import React, {Component} from "react";
import {Col, Row, Modal, Card, Button} from "reactstrap";
import '../../css/viewSpecials.css'
import axios from "axios";


class viewIndividualDish extends Component {
    constructor(props) {
        super(props);
        this.deleteDish = this.deleteDish.bind(this);
        this.editDish = this.editDish.bind(this);
        this.state = {
            dish:[],
            closeModal:''
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/user/view-individual-todays-special/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({dish: response.data.data});
                console.log("dish", this.state.dish);
                console.log('state', this.state.closeModal)
            });
    }

    deleteDish(e){
        axios
            .delete(
                `http://localhost:5000/user/delete-todays-special/${this.props.match.params.id}`
            )
            .then((response) => {
                alert("Data Successfully Deleted.");
                window.location=('/view-todays-special');
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    }

    editDish(e, id){
        window.location=(`/edit-dish/${id}`);
    }


    render() {
        return (
            <div>
                <Row className="backgroundRowImageOffer">
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <Row>

                            <h1 className='titleStyle' style={{opacity:'100%'}}>Today's Special</h1>
                            <div className="container">
                                    <div
                                        className="card text-dark bg-lightbg-light mb-3 "
                                        style={{ marginTop: "20pt" }}
                                    >
                                        <div
                                            className="card-body"
                                        >
                                            <Row style={{paddingTop:'2vh', paddingLeft:'3vh', height:'400px'}}>

                                                <Col sm="3">
                                                    <img
                                                        src={this.state.dish.image}
                                                        alt="item image"
                                                        className="imageBoxOfferIndividual"
                                                    />
                                                </Col>
                                                <Col sm="9">
                                                    <Row>
                                                        <Col sm='1'></Col>
 
                                                      
 
                                                        <Col sm="11">
 
                                                            <h2 className="dishNameInd">
                                                                {this.state.dish.dishName}
                                                            </h2>
                                                            <br /><br />

 
                                                            <h6 className="dishDetails">
                                                                Description - {this.state.dish.description}
                                                            </h6>
 
                                                            <h6 className="dishDetails" style={{width:'800px'}}>
                                                                Description - {this.state.dish.description}
                                                            </h6>
                                                            <br/><br/>
 
                                                           <h6 className="dishDetails">
                                                                Price - {this.state.dish.price}
                                                            </h6>


                                                            <h6 className="dishDetails">
                                                                Date - {this.state.dish.date}
                                                            </h6>

                                                            <p className="paraTerms">
                                                                Terms and conditions apply
                                                            </p>
                                                        </Col>

                                                    </Row>
                                                    <Row>
                                                        <Col sm="6"></Col>
                                                        <Col sm="2">
 
                                                            <br/>
 
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={(e) =>
                                                                    this.editDish(e, this.state.dish._id)
                                                                }
 
                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh'}}
 
                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh', marginTop:'-8vh'}}
 

                                                            >
                                                                Edit
                                                            </button>
                                                        </Col>
                                                        <Col sm="2">
 
                                                            <br/>
 
                                                            <button
                                                                className=" btn btn-danger"
                                                                onClick={(e) =>
                                                                    this.setState({closeModal:true})
                                                                }
 
                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh'}}
 
                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh',marginTop:'-8vh'}}
 
                                                            >
                                                                Delete
                                                            </button>


                                                            {/*Modal to confirm deletedish*/}

                                                                <Modal isOpen={this.state.closeModal} style={{alignSelf:'center', marginTop:'5vh'}}>
                                                                    <div style={{paddingLeft:'3vh', paddingRight:'3vh', paddingBottom:'2vh',paddingTop:'1vh'}}>
                                                                        <Row>
                                                                            <Col md='12'>
                                                                                <h5 style={{textAlign:'center',paddingTop:'1vh', paddingBottom:'-1vh'}}>
 
                                                                                    Are you sure to remove this User ?
 
                                                                                    Are you sure to remove this Dish ?
 
                                                                                </h5>
                                                                                <br/>
                                                                            </Col>
                                                                        </Row>

                                                                        <div className=" px-5 d-flex  justify-content-between " style={{paddingBottom:'1vh',paddingTop:'1vh'}}>
                                                                            <Button
                                                                                className="ml-1"
                                                                                color="danger"
                                                                                onClick={(e) =>
                                                                                    this.deleteDish(e, this.state.dish._id)
                                                                                }
                                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh'}}
                                                                            >
                                                                                Delete
                                                                            </Button>

                                                                            <Button
                                                                                className="ml-1"
                                                                                color="danger"
                                                                                outline
                                                                                onClick={() => this.setState({closeModal:false})}
                                                                                style={{ width: '140px', height: '40px', borderRadius:'2vh'}}

                                                                            >
                                                                                Cancel
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </Modal>


                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default viewIndividualDish