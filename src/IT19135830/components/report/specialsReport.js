import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "font-awesome/css/font-awesome.min.css";
import "../../css/report.css";

class SpecialsReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            specials: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/user/specials-report").then((response) => {
            this.setState({ specials: response.data.data });

            console.log(this.state.specials)
        });
    }

    printDocument() {
        const input = document.getElementById("viewtable");
        html2canvas(input).then((canvas) => {
            var imgWidth = 200;
            var pageHeight = 290;
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            var position = 0;
            var heightLeft = imgHeight;
            pdf.addImage(imgData, "JPEG", 4, position, imgWidth, imgHeight);
            pdf.save("Offer List Report.pdf");
        });
    }

    render() {
        return (
            <div>
                <Row style={{paddingLeft:'30px'}}>
                    <Col sm="2"></Col>
                    <Col sm="9">
                        <h1 className="topicviewOfferreport" style={{paddingTop:'8vh'}}>Offer List Report</h1>
                        <br></br>
                        <button type="button" className="btn btn-outline-danger"
                                onClick={this.printDocument}
                                style={{
                                    borderRadius: "5px",
                                    textAlign: "center",
                                }}
                                variant="contained">
                            <i
                            className="fa fa-file-pdf-o fa-lg"
                            aria-hidden="true"
                        >
                            {" "}
                            Generate PDF
                        </i></button>



                        <br></br>
                        <br></br>
                        <div id="viewtable" style={{paddingTop:'5vh'}}>
                            <p>Report Date: {new Date().toLocaleString() + ""}</p>
                            <h2 style={{ fontWeight: "bold", fontFamily: "serif" }}>
                                Offer List
                            </h2>
                            <br></br>
                            <table className="table">
                                <tr
                                    style={{
                                        backgroundColor: "#afeeee",
                                        lineHeight: "50px",
                                    }}
                                >
                                    <th style={{paddingLeft:'3vh'}}>Dish Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Date</th>

                                </tr>

                                {this.state.specials.length > 0 &&
                                this.state.specials.map((item, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            borderBottom: "2px solid #ddd",
                                            //alignContent: "centre",
                                        }}
                                    >
                                        <td style={{ paddingLeft: '3vh' }}>{item.dishName}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>

                                        <hr /> <hr />
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SpecialsReport;