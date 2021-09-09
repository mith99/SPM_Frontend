import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import ViewCategoryBackPanelCss from '../../Stylesheets/viewCategoryBackPanel.css';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
        categories: [],
    };
    this.navigateToEditDeletePage = this.navigateToEditDeletePage.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/category/getAllCategories").then((response) => {
      this.setState({ categories: response.data.data });
    });
  }

  navigateToEditDeletePage(e, categoryId) {
     window.location = `/edit-delete-category/${categoryId}`;
  //   let data = {
  //     categoryId: categoryId
  // }
  // this.props.history.push("/edit-delete-category", data)
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
            <Row className="backgroundRowImageCategory">
              <div className="container">
                <h1 className="topicviewCategory">View Categories</h1>
                {this.state.categories.length > 0 &&
                  this.state.categories.map((item, index) => (
                    <div
                      key={index}
                      className="card text-dark bg-lightbg-light mb-3 "
                      style={{ marginTop: "20pt" }}
                    >
                      <div
                        className="card-body"
                        // onClick={(e) => this.navigateToSubjects(e, item._id)}
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
                                <br></br><br></br>
                                <h4 className="categoryNamefont">
                                  {item.categoryName}
                                </h4>
                                
                              </Col>
                            
                                
                              <Col sm="3">
                                <button
                                  className=" addButton"
                                  onClick={(e) =>
                                    this.navigateToEditDeletePage(e,item._id)
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

export default CategoryList;