import { Component } from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";
import DashBoardCss from "../../styleSheets/dashBoard.css";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row className="backgroundImageDashBoard">
          <Col sm="3"></Col>
          <Col sm="9">
            <Row>
              <Row>
                <div
                  style={{
                    backgroundColor: "rgb(0,0,0)",
                    backgroundColor: "rgba(0,0,0, 0.4)",
                    marginBottom: "15pt",
                  }}
                >
                  <h1 className="dashBoardTopic">Dash Board</h1>
                </div>

                <Col sm="4">
                  <div
                    className="card text-white bg-danger mb-3"
                    style={{
                      maxWidth: "18rem",
                      marginLeft: "15pt",
                    }}
                  >
                    <div class="card-body">
                      <div className="cardDiv">
                        <h1
                          className="cardNumber"
                          style={{
                            color: "#df4759",
                          }}
                        >
                          02
                        </h1>
                      </div>
                      <p
                        class="card-text"
                        style={{
                          textAlign: "center",
                          fontSize: "15pt",
                          fontWeight: "bold",
                          marginTop: "5pt",
                        }}
                      >
                        Canceled
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div
                    className="card text-white bg-primary mb-3"
                    style={{
                      maxWidth: "18rem",
                      marginLeft: "15pt",
                    }}
                  >
                    <div class="card-body">
                      <div className="cardDiv">
                        <h1
                          className="cardNumber"
                          style={{
                            color: "#467fd0",
                          }}
                        >
                          02
                        </h1>
                      </div>
                      <p
                        class="card-text"
                        style={{
                          textAlign: "center",
                          fontSize: "15pt",
                          fontWeight: "bold",
                          marginTop: "5pt",
                        }}
                      >
                        Pending
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div
                    className="card text-white bg-success mb-3"
                    style={{
                      maxWidth: "18rem",
                      marginLeft: "15pt",
                    }}
                  >
                    <div class="card-body">
                      <div className="cardDiv">
                        <h1
                          className="cardNumber"
                          style={{
                            color: "#42ba96",
                          }}
                        >
                          02
                        </h1>
                      </div>
                      <p
                        class="card-text"
                        style={{
                          textAlign: "center",
                          fontSize: "15pt",
                          fontWeight: "bold",
                          marginTop: "5pt",
                        }}
                      >
                        Completed
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="container">
                  <div
                    className="card text-dark bg-warning mb-3 "
                    style={{ marginTop: "20pt" }}
                  >
                    <div className="card-body">
                      <Row>
                        <Col sm="9">
                          <div className="emaildiv">
                            <h1
                              className="cardNumber"
                              style={{
                                color: "#ffc107",
                              }}
                            >
                              2500
                            </h1>
                          </div>
                        </Col>
                        <Col sm="3">
                          <p
                            class="card-text"
                            style={{
                              textAlign: "center",
                              fontSize: "25pt",
                              fontWeight: "bold",
                              marginTop: "18pt",
                              color: "white",
                            }}
                          >
                            Subscribers
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default DashBoard;
