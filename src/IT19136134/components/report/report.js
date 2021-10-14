import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import ViewOfferBackPanelCss from "../../styleSheets/report.css";

class ReportCommon extends Component {
  constructor(props) {
    super(props);

    this.navigateToOfferReport = this.navigateToOfferReport.bind(this);
  }

  navigateToOfferReport(e) {
    window.location = "/offer-report";
  }

  render() {
    return (
      <div>
        <Row className="backgroundRowImageReport">
          <Col sm="3"></Col>
          <Col sm="9">
            <Row>
              <div className="container">
                <h1 className="topicviewReport">Reports</h1>
              </div>
              <Col sm="6">
                <div
                  style={{
                    border: "10px solid white",
                    marginTop: "30pt",
                    height: "240px",
                  }}
                >
                  <div
                    className="card text-white bg-danger mb-3"
                    style={{
                      height: "220px",
                      //   marginLeft: "15pt",
                    }}
                    onClick={(e) => this.navigateToOfferReport(e)}
                  >
                    <div class="card-body">
                      <div>
                        <h1
                          style={{
                            marginTop: "60px",
                            textAlign: "center",
                          }}
                        >
                          Menu Report
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div
                  style={{
                    border: "10px solid white",
                    marginTop: "30pt",
                    height: "240px",
                  }}
                >
                  <div
                    className="card text-white  "
                    style={{
                      height: "220px",
                      backgroundColor: "#55BD23",

                      //   marginLeft: "15pt",
                    }}
                    onClick={(e) => this.navigateToOfferReport(e)}
                  >
                    <div class="card-body">
                      <div>
                        <h1
                          style={{
                            marginTop: "60px",
                            textAlign: "center",
                          }}
                        >
                          Today Special Report
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <div
                  style={{
                    border: "10px solid white",
                    marginTop: "40pt",
                    height: "240px",
                  }}
                >
                  <div
                    className="card text-white "
                    style={{
                      height: "220px",
                      backgroundColor: "#AC9F2C",
                      //   marginLeft: "15pt",
                    }}
                    onClick={(e) => this.navigateToOfferReport(e)}
                  >
                    <div class="card-body">
                      <div>
                        <h1
                          style={{
                            marginTop: "60px",
                            textAlign: "center",
                          }}
                        >
                          Offer Report
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div
                  style={{
                    border: "10px solid white",
                    marginTop: "40pt",
                    height: "240px",
                  }}
                >
                  <div
                    className="card text-white "
                    style={{
                      height: "220px",
                      backgroundColor: "#1381A4",
                      //   marginLeft: "15pt",
                    }}
                  >
                    <div class="card-body">
                      <div>
                        <h1
                          style={{
                            marginTop: "60px",
                            textAlign: "center",
                          }}
                        >
                          Delivery Report
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReportCommon;
