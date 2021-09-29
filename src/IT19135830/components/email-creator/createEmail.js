import React, {Component} from "react";
import axios from "axios";
import {Button, Col, Modal, Row} from "reactstrap";
import '../../css/email.css'

const initialState = {
    emailTopic:'',
    emailBody:'',
    date:''
}


class CreateEmail extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialState;
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }



    onSubmit(e){
        e.preventDefault();

        let date = new Date();


        let email = {
            topic: this.state.emailTopic,
            body: this.state.emailBody,
            date: date
        }

        console.log(email);

        axios.post('http://localhost:5000/email/send-email', email)
            .then(response => {
                alert('Data Successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    render() {
        return(
            <div>
                <Row className="backgroundRowImageOffer">
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <Row>

                            <h1 className='titleStyle' style={{opacity:'100%'}}>Create Email</h1>
                            <br/>
                            <br/>
                            <div className="container">

                                <div className="card-body">
                                    <Row style={{paddingTop:'7vh', paddingLeft:'3vh', height:'70vh', background:'rgba(26,26,26, 0.5)', color:'white', marginTop:'8vh', width:'150vh'}}>

                                        <Col sm="12">
                                                <Row>

                                                    <Col sm='1'></Col>
                                                    <Col sm="8">

                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlInput1"
                                                                   className="form-label titleStyleEmail"> Topic</label>
                                                            <input
                                                                className="form-control"
                                                                type='text'
                                                                name="emailTopic"
                                                                value={this.state.emailTopic}
                                                                onChange={this.onChange}
                                                                style={{width:'100vh'}}
                                                                required
                                                            />

                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlTextarea1"
                                                                   className="form-label titleStyleEmail">Email Body</label>
                                                            <textarea className="form-control"
                                                                      type='text'
                                                                      name="emailBody"
                                                                      value={this.state.emailBody}
                                                                      onChange={this.onChange}
                                                                      required
                                                                      rows="3"
                                                                      style={{width:'100vh', height:'20vh',maxHeight:'35vh'}}></textarea>
                                                        </div>
                                                    </Col>

                                                </Row>
                                                <Row className='-flex flex-row-reverse'>
                                                    <Col sm='1'></Col>
                                                    <Col sm="2">
                                                        <br/>
                                                        <button
                                                            className="btn btn-info"
                                                            onClick={this.onSubmit}
                                                            style={{ width: '140px', height: '40px', borderRadius:'2vh'}}

                                                        >
                                                            Send
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

export default CreateEmail

