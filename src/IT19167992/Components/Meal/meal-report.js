import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import "font-awesome/css/font-awesome.min.css";
import MealReportCss from "../../Stylesheets/mealReport.css"

class MealReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/meal/").then((response) => {
      this.setState({ meals: response.data.data });
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
        <Row>
          <Col sm="3"></Col>
          <Col sm="9">
            <h1 className="topicviewMealreport">Meal List Report</h1>
            <br></br>
            <button
              onClick={this.printDocument}
              style={{
                borderRadius: "5px",
                textAlign: "center",
              }}
              variant="contained"
              color="primary"
            >
              <i
                className="fa fa-file-pdf-o fa-lg"
                aria-hidden="true"
                style={{ color: "red" }}
              >
                {" "}
                Generate PDF
              </i>
            </button>
            <br></br>
            <br></br>
            <div id="viewtable">
              <p>Report Date: {new Date().toLocaleString() + ""}</p>
              <h2 style={{ fontWeight: "bold", fontFamily: "serif" }}>
                Meals List
              </h2>
              <br></br>
              <table className="table">
                <tr
                  style={{
                    backgroundColor: "#afeeee",
                    lineHeight: "50px",
                  }}
                >
                  <th>Meal Name</th>
                  <th>Price</th>
                  <th>Description</th>
               
                </tr>

                {this.state.meals.length > 0 &&
                  this.state.meals.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "2px solid #ddd",
                        //alignContent: "centre",
                      }}
                    >
                      <td style={{ paddingLeft: "0" }}>{item.mealName}</td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
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

export default MealReport;