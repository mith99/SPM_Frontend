import React, {Component} from "react";
import {Card, Modal, Button, Row,Col} from "reactstrap";
import axios from "axios";


class EditSpecialDish extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
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
                this.setState({dish: response.data.data});
                console.log("dish", this.state.dish);
                console.log('state', this.state.closeModal)
            });
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
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
                                    <h1 className='titleStyle' style={{opacity:'100%'}}>Today's Special</h1>
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
                                        <Col sm='10'>
                                            <h3 className='inputTitles'style={{marginBottom:'-15px'}}>
                                                Dish Name
                                            </h3>
                                            <br/>
                                            <input
                                                className="inputTextBox"
                                                name="dishName"
                                                value={this.state.dishName}
                                                onChange={this.onChange}
                                                required
                                            ></input>
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
                                        className="addButton"
                                        onClick={this.onSubmit}
                                    > Add </button>
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


