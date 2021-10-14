import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import ViewCategoryBackPanelCss from '../../Stylesheets/viewCategoryBackPanel.css';

class ViewMealsBackPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    };
    this.navigateToEditDeletePage = this.navigateToEditDeletePage.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/meal/").then((response) => {
      this.setState({ meals: response.data.data });
    });
  }

  navigateToEditDeletePage(e, mealId) {
    // window.location = `/edit-delete-meal/${mealId}`;
    let data = {
      mealId: mealId
  }
  this.props.history.push("/edit-delete-meal", data)
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
            <Row className="backgroundRowImageCategory">
              <div className="container">
                <h1 className="topicviewCategory">View Meals</h1>
                {this.state.meals.length > 0 &&
                  this.state.meals.map((item, index) => (
                    <div
                      key={index}
                      className="card text-dark bg-lightbg-light mb-3 "
                      style={{ marginTop: "20pt" }}
                    >
                      <div
                        className="card-body"
                       
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
                              <Col sm="8">
                                <br></br> 
                                <h4 className="categoryNamefont">
                                  {item.mealName}
                                </h4>
                                <h5 className="priceNew">
                                  {item.price}
                                </h5>
                                <br />
                                <h6 className="categoryDetails">
                                    {item.description}  
                                </h6>

                                 
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

export default ViewMealsBackPanel;