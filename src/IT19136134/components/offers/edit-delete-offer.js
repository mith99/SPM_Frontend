import React, { Component } from "react";
import { Col, Row } from "reactstrap";
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
    };
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

  // onSubmit(e) {
  //   e.preventDefault();
  //   let offer = {
  //     offerName: this.state.offerName,
  //     catergories: this.state.selectedCatergories,
  //     meals: this.state.selectedMeals,
  //     description: this.state.description,
  //     discount: this.state.discountPercentage,
  //     price: this.state.newPrice,
  //     startDate: this.state.startDate,
  //     endDate: this.state.endDate,
  //     image: this.state.selectedFile,
  //   };
  //   console.log("Offer Details", offer);
  //   axios
  //     .post("http://localhost:8080/offer/create", offer)
  //     .then((response) => {
  //       alert("Data inserted successfully");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       alert(error.message);
  //     });
  // }

  render() {
    return (
      <div>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
            <Row className="backgroundRowImage">
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
                  className="inputTextBox"
                  name="discountPercentage"
                  value={this.state.discountPercentage}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">New Price</p>
                <input
                  className="inputTextBox"
                  name="newPrice"
                  value={this.state.newPrice}
                  onChange={this.onChange}
                  required
                ></input>
                <br />
                <br />
                <row className="d-flex justify-content-between">
                  <button className="editDeleteButton">Delete</button>
                  <button className="editDeleteButton">Edit</button>
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
