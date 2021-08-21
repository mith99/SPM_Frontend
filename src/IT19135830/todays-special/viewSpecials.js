import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import '../css/viewSpecials.css'
import axios from "axios";


class viewSpecials extends Component {
    constructor(props) {
        super(props);
        this.viewIndividualDish = this.viewIndividualDish.bind(this);
        this.state = {
            specials:[]
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/user/views-today-specials")
            .then((response) => {
                this.setState({specials: response.data.data});
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

                                {this.state.specials.length > 0 &&
                                this.state.specials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="card text-dark bg-lightbg-light mb-3 "
                                        style={{ marginTop: "20pt" }}
                                    >
                                        <div
                                            className="card-body"
                                            //onClick={(e) => this.navigateToSubjects(e, item._id)}
                                        >
                                            <Row>
                                                <Col sm="3">
                                                    <img
                                                        src={item.image}
                                                        alt="item image"
                                                        className="imageBoxOffer"
                                                    />
                                                </Col>
                                                <Col sm="9">
                                                    <Row>
                                                        <Col sm="5">
                                                            <h4 className="offerNamefont">
                                                                {item.dishName}
                                                            </h4>
                                                            <h5 className="offerNamefont">
                                                                {item.description}
                                                            </h5>
                                                            <br />

                                                            <p className="paraTerms">
                                                                Terms and conditions apply
                                                            </p>
                                                        </Col>
                                                        <Col sm="3">
                                                            {" "}
                                                            <br />
                                                            <br />

                                                            <h6 className="priceDiscount">
                                                                {item.price}
                                                            </h6>
                                                            <h5 className="priceNew">Price</h5>

                                                            <h5 className="offerDetails">
                                                                {item.date}
                                                            </h5>
                                                        </Col>

                                                        <Col sm="3">
                                                            <button
                                                                className="deleteButton"
                                                                onClick={(e) =>
                                                                    this.viewIndividualDish(e, item._id)
                                                                }

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

export default viewSpecials