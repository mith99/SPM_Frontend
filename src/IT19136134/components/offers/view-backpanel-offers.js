import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import ViewOfferBackPanelCss from "../../styleSheets/viewOfferBackPanel.css";

class ViewOffersBackPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
    };
    this.navigateToEditDeletePage = this.navigateToEditDeletePage.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/offer/").then((response) => {
      this.setState({ offers: response.data.data });
    });
  }

  navigateToEditDeletePage(e, offerId) {
    window.location = `/edit-delete-offer/${offerId}`;
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
            <Row className="backgroundRowImageOffer">
              <div className="container">
                <h1 className="topicviewOffer">View Offers</h1>
                {this.state.offers.length > 0 &&
                  this.state.offers.map((item, index) => (
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
                                  {item.offerName}
                                </h4>
                                <h5 className="offerDetails">
                                  {item.description}
                                </h5>
                                <br />
                                <h6 className="offerDetails">
                                  Starting from : {item.startDate} -{" "}
                                  {item.endDate}
                                </h6>

                                <p className="paraTerms">
                                  Terms and conditions apply
                                </p>
                              </Col>
                              <Col sm="3">
                                {" "}
                                <br />
                                <h5 className="priceDiscount">
                                  {item.discount} discount
                                </h5>
                                <br />
                                <h5 className="priceNew">New Price</h5>
                                <h5 className="priceNew">
                                  Rs.{item.price} only
                                </h5>
                              </Col>
                              <Col sm="3">
                                <button
                                  className=" addButton"
                                  onClick={(e) =>
                                    this.navigateToEditDeletePage(e, item._id)
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
    );
  }
}

export default ViewOffersBackPanel;
