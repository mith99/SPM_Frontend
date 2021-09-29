import React, {Component} from "react";
import {Card, Modal, Button, Row,Col} from "reactstrap";
import axios from "axios";


class EditSpecialDish extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            dishName: "",
            description: "",
            price:0,
            date: new Date(),

            selectedFile:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU"
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/user/view-individual-todays-special/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    dishName: response.data.data.dishName,
                    description:response.data.data.description,
                    price:response.data.data.price,
                    date:response.data.data.date,
                    selectedFile:response.data.data.image

                });

                console.log(this.state.description)
            });
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    edit(e){
         e.preventDefault();
        let todaySpecial = {
            dishName: this.state.dishName,
            description: this.state.description,
            price: this.state.price,
            date: this.state.date,
            image: this.state.selectedFile
        }

        console.log(todaySpecial);

        axios.patch(`http://localhost:5000/user/edit-todays-special/${this.props.match.params.id}`, todaySpecial)
            .then(response => {
                alert('Data Successfully inserted');
                window.location=('/view-todays-special');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })

    }

    setSelectImageFile = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.readAsDataURL(file.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
                this.setState({
                    selectedFile: reader.result,
                });
            };
        });


    render() {
        return(
            <div>
                <Row >
                    <div className="backgroundRowImage ">
                        <Row >
                            <Col sm="6" style={{marginLeft:'300px'}}>
                                <div>
                                    <h1 className='titleStyle' style={{opacity:'100%', width:'850px'}}>Edit Today's Special</h1>
                                </div>
                            </Col>
                        </Row>

                        <br/>
                        <br/>

                        <div >

                            <Row  >
                                <Col sm = '6' >
                                    <Row >
                                        <Col sm='2'></Col>
                                        <Col sm="6" style={{marginLeft:'400px'}}>
                                            <div>
                                                <h3 className='dishNameStyle' style={{ width:'400px',fontSize:'50px'}}>{this.state.dishName}</h3>
                                            </div>
                                        </Col>


                                    </Row>


                                    <Row >
                                        <Col sm='2'></Col>
                                        <Col sm='10'>
                                            <h3 className='inputTitles'>
                                                Description
                                            </h3>

                                            <textarea
                                                className="inputTextBox"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.onChange}
                                                required
                                                style={{ height:'100px', paddingTop:'1vh'}}
                                            ></textarea>
                                        </Col>
                                    </Row>

                                    <Row >
                                        <Col sm='2'></Col>
                                        <Col sm='10'>
                                            <h3 className='inputTitles'>
                                                Price
                                            </h3>

                                            <input
                                                className="inputTextBox"
                                                name="Price"
                                                type="number"
                                                id="price"
                                                value={this.state.price}
                                                onChange={this.onChange}
                                                required
                                            ></input>
                                        </Col>


                                    </Row>

                                    <Row >
                                        <Col sm='2'></Col>
                                        <Col sm='10'>
                                            <h3 className='inputTitles'>
                                                Date
                                            </h3>

                                            <input
                                                className="inputTextBox"
                                                name="Date"
                                                type='date'
                                                value={this.state.date}
                                                onChange={this.onChange}
                                                required
                                            ></input>
                                        </Col>


                                    </Row>

                                    <Row >
                                        <Col sm='2'></Col>
                                        <Col sm='10'>
                                            <h3 className='inputTitles'>
                                                Image
                                            </h3>

                                            <input
                                                className="inputTextBox"
                                                type="file"
                                                accept="image/*"
                                                onChange={this.setSelectImageFile}
                                                required
                                            ></input>
                                        </Col>


                                    </Row>
                                </Col>
                                <Col sm='6'>
                                    <img
                                        src={this.state.selectedFile}
                                        alt="item image"
                                        className="imageBox"
                                    />

                                    <button
                                        type="submit"
                                        className="addButton btn btn-info"
                                        onClick={this.edit}
                                    > Edit </button>
                                </Col>


                            </Row>

                        </div>


                    </div>
                </Row>
            </div>
        )
    }
}
export default EditSpecialDish


