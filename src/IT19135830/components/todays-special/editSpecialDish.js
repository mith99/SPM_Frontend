import React, {Component} from "react";
import {Card, Modal, Button, Row,Col} from "reactstrap";
import '../../css/viewSpecials.css'
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

        if(this.state.dishName == ""|| this.state.description == "" || this.state.price == 0 || this.state.date == "" || this.state.date == ""|| this.state.image == "") {
            alert("Please Fill All The Fields");

        }
        else {
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
                    window.location = ('/view-todays-special');
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message);
                })
        }

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
                <Row className="backgroundRowImageOffer">
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <Row>

                            <h1 className='titleStyle' style={{opacity:'100%', width:'900px'}}>Edit Today's Special</h1>
                            <br/>
                            <br/>
                            <div className="container">

                                <div className="card-body">
                                    <Row style={{paddingTop:'4vh', paddingLeft:'3vh', height:'85vh', background:'rgba(26,26,26, 0.5)', color:'white', marginTop:'8vh', width:'150vh'}}>

                                        <Col sm="12">
                                            <Row>

                                                <Col sm='1'></Col>
                                                <Col sm="8">

                                                    <div className="mb-3">
                                                        <h3 className='dishNameStyle' style={{ width:'400px',fontSize:'50px'}}>{this.state.dishName}</h3>


                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1"
                                                               className="form-label titleStyleEmail">Description</label>
                                                        <br/>
                                                        <textarea
                                                            className="inputTextBox"
                                                            name="description"
                                                            value={this.state.description}
                                                            onChange={this.onChange}
                                                            required
                                                            style={{ height:'100px', paddingTop:'1vh'}}
                                                        ></textarea>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1"
                                                               className="form-label titleStyleEmail">Price</label>
                                                        <br/>
                                                        <input
                                                            className="inputTextBox"
                                                            name="price"
                                                            type="number"
                                                            min = "0"
                                                            value={this.state.price}
                                                            onChange={this.onChange}
                                                            required
                                                        ></input>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1"
                                                               className="form-label titleStyleEmail">Date</label>
                                                        <br/>
                                                        <input
                                                            className="inputTextBox"
                                                            name="date"
                                                            type='date'
                                                            value={this.state.date}
                                                            onChange={this.onChange}
                                                            required
                                                        ></input>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1"
                                                               className="form-label titleStyleEmail">Image</label>
                                                        <br/>
                                                        <input
                                                            className="inputTextBox"
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={this.setSelectImageFile}
                                                            required
                                                        ></input>
                                                    </div>
                                                </Col>

                                            </Row>
                                            <Row className='-flex flex-row-reverse'>
                                                <Col sm='1'></Col>
                                                <Col sm="2">
                                                    <br/>
                                                    <button
                                                        className="btn btn-info"
                                                        onClick={this.edit}
                                                        style={{ width: '140px', height: '40px', borderRadius:'2vh'}}

                                                    >
                                                        Update
                                                    </button>
                                                </Col>
                                                <Col sm="2">
                                                    <br/>
                                                    <button
                                                        className=" btn btn-danger"
                                                        // onClick={(e) =>
                                                        // this.setState({closeModal:true})}
                                                        type='reset'
                                                        style={{ width: '140px', height: '40px', borderRadius:'2vh'}}
                                                    >
                                                        Reset
                                                    </button>




                                                </Col>

                                            </Row>
                                        </Col>
                                        <Col sm='6'>
                                            <img
                                                src={this.state.selectedFile}
                                                alt="item image"
                                                className="imageBox"
                                            /></Col>
                                    </Row>
                                </div>

                            </div>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default EditSpecialDish


