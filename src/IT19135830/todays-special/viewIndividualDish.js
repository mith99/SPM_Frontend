import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import '../css/viewSpecials.css'
import axios from "axios";


class viewIndividualDish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish:[]
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/user/view-individual-todays-special/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({dish: response.data.data});
                console.log("dish", this.state.dish)
            });
    }

    viewIndividualDish(e, id){
        window.location=(`/view-dish/${id}`);
    }

    render() {
        return (
            <div>
                <Row className="backgroundRowImageOffer">
                    <Col sm="2"></Col>
                    <Col sm="9">
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
                                            <Row style={{paddingTop:'2vh', paddingLeft:'3vh', height:'500px'}}>

                                                <Col sm="3">
                                                    <img
                                                        src={this.state.dish.image}
                                                        alt="item image"
                                                        className="imageBoxOfferIndividual"
                                                    />
                                                </Col>
                                                <Col sm="9">
                                                    <Row>
                                                        <Col sm="5">
                                                            <h2 className="dishNameInd">
                                                                {this.state.dish.dishName}
                                                            </h2>
                                                            <br />                                                            <br />

                                                            <h6 className="dishDetails">
                                                                Description - {this.state.dish.description}
                                                            </h6>
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


                                                        <Col sm="3">
                                                            <button
                                                                className="deleteButton"
                                                                // onClick={(e) =>
                                                                //     // this.navigateToEditDeletePage(e, item._id)
                                                                // }
                                                            >
                                                                Edit/Delete
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default viewIndividualDish