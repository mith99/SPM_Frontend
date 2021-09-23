import React, { Component } from "react";
import { Col, Row, Modal, Card, Button } from "reactstrap";
//import Select from "react-select";
import Select from "react-dropdown-select";
import axios from "axios";
import AddOfferCss from "../../styleSheets/addOffer.css";

class EditOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerName: "",
      description: "",
      discountPercentage: "",
      newPrice: "",
      startDate: new Date(),
      endDate: new Date(),

      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      catergories: "",

      meals: "",

      closeModal: "",
    };

    this.setSelectImageFile = this.setSelectImageFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(
        `http://localhost:5000/offer/getOfferById/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          offerName: response.data.data.offerName,
          description: response.data.data.description,
          discountPercentage: response.data.data.discount,
          newPrice: response.data.data.price,
          startDate: response.data.data.startDate,
          endDate: response.data.data.endDate,
          selectedFile: response.data.data.image,
        });
      })
      .catch((error) => {
        alert(error.message);
      });

    axios
      .get(
        `http://localhost:5000/offer/getMealForOffer/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log("Meals:", response.data.meals.mealName);

        this.setState({ meals: response.data.meals.mealName });
      })
      .catch((error) => {
        alert(error.message);
      });

    axios
      .get(
        `http://localhost:5000/offer/getCatergoryForOffer/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log("Catergory:", response.data.catergories.categoryName);

        this.setState({ catergories: response.data.catergories.categoryName });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  setSelectImageFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        this.setState({
          selectedFile: reader.result,
        });
      };
    });

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDelete(e) {
    axios 
      .delete(
        `http://localhost:5000/offer/deleteoffer/${this.props.match.params.id}`
      )
      .then((response) => {
        // alert("Data Successfully Deleted.");
        this.setState({
          offerName: "",
          description: "",
          discountPercentage: "",
          newPrice: "",
          startDate: new Date(),
          endDate: new Date(),
          selectedFile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

          selectedCatergories: "",
          selectedMeals: "",
        });
        window.location = "/view-offer-backpanel";
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  onEdit(e) {
    e.preventDefault();
    let offer = {
      offerName: this.state.offerName,
      description: this.state.description,
      discount: this.state.discountPercentage,
      price: this.state.newPrice,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      image: this.state.selectedFile,
    };
    console.log("Offer Details", offer);
    axios
      .put(
        `http://localhost:5000/offer/updateoffer/${this.props.match.params.id}`,
        offer
      )
      .then((response) => {
        alert("Data updated successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div>
        <Row className="backgroundRowImage">
          <Col sm="3"></Col>
          <Col sm="9">
            <Row>
              <Col sm="6">
                <h1 className="topic">Edit Offer</h1>
                <p className="fontPara">Upload Image</p>
                <img
                  src={this.state.selectedFile}
                  alt="item image"
                  className="imageBox"
                />
                <br />
                <br />
                <input
                  className="inputTextBox"
                  type="file"
                  accept="image/*"
                  onChange={this.setSelectImageFile}
                  required
                ></input>
                <br></br>
                <p className="fontPara">Start Date</p>
                <input
                  className="inputTextBox"
                  type="date"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">End Date</p>
                <input
                  className="inputTextBox"
                  type="date"
                  name="endDate"
                  value={this.state.endDate}
                  onChange={this.onChange}
                  required
                ></input>
              </Col>
              <Col sm="6" className="spaceTop">
                <p className="fontPara">Offer Name</p>
                <input
                  className="inputTextBox"
                  name="offerName"
                  value={this.state.offerName}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">Catergory</p>
                <input
                  className="inputTextBox"
                  value={this.state.catergories}
                  disabled
                ></input>

                <p className="fontPara">Meal</p>

                <input
                  className="inputTextBox"
                  value={this.state.meals}
                  disabled
                ></input>
                <p className="fontPara">Description</p>
                <input
                  className="inputTextBox"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">Discount Percentage</p>
                <input
                  type="number"
                  className="inputTextBox"
                  name="discountPercentage"
                  value={this.state.discountPercentage}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">New Price</p>
                <input
                  type="number"
                  className="inputTextBox"
                  name="newPrice"
                  value={this.state.newPrice}
                  onChange={this.onChange}
                  required
                ></input>
                <br />
                <br />
                <row className="d-flex justify-content-between">
                  <button
                    className="editDeleteButton"
                    onClick={(e) => this.setState({ closeModal: true })}
                    // onClick={this.onDelete}
                  >
                    Delete
                  </button>

                  {/*Modal to confirm deletedish*/}

                  <Modal
                    isOpen={this.state.closeModal}
                    style={{ alignSelf: "center", marginTop: "5vh" }}
                  >
                    <div
                      style={{
                        paddingLeft: "3vh",
                        paddingRight: "3vh",
                        paddingBottom: "2vh",
                        paddingTop: "1vh",
                      }}
                    >
                      <Row>
                        <Col md="12">
                          <h5
                            style={{
                              textAlign: "center",
                              paddingTop: "1vh",
                              paddingBottom: "-1vh",
                            }}
                          >
                            Are you sure to remove this Offer ?
                          </h5>
                          <br />
                        </Col>
                      </Row>

                      <div
                        className=" px-5 d-flex  justify-content-between "
                        style={{ paddingBottom: "1vh", paddingTop: "1vh" }}
                      >
                        <Button
                          className="ml-1"
                          color="danger"
                          onClick={this.onDelete}
                          style={{
                            width: "140px",
                            height: "40px",
                            borderRadius: "2vh",
                          }}
                        >
                          Delete
                        </Button>

                        <Button
                          className="ml-1"
                          color="danger"
                          outline
                          onClick={() => this.setState({ closeModal: false })}
                          style={{
                            width: "140px",
                            height: "40px",
                            borderRadius: "2vh",
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Modal>

                  <button className="editDeleteButton" onClick={this.onEdit}>
                    Edit
                  </button>
                </row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditOffer;
