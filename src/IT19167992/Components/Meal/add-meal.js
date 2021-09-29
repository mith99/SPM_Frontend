import React, { Component } from "react";
import { Col, Row } from "reactstrap";
// import Select from "react-dropdown-select";
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';
import Select from "react-select";

class createMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mealName : '',
        price : '',
        description : '',

      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      catergories: [],
      optionsCatergories: [],
      selectedCatergories: [],

       
    };

    this.onCatergorySelect = this.onCatergorySelect.bind(this);
 
    this.setSelectImageFile = this.setSelectImageFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/category/getAllCategories")
      .then((response) => {
        console.log(response);
        this.setState({ catergories: response.data.data }, () => {
          let data = [];

          this.state.catergories.map((item, index) => {
            let catergory = {
              value: item._id,
              label: item.categoryName,
            };
            data.push(catergory);
          });

          this.setState({ optionsCatergories: data });
        });
      });

     
  }

   

  // onCatergorySelect(e) {
  //   this.setState({
  //     selectedCatergories: e ? e.map((item) => item.value) : [],
  //   });
  // }
  onCatergorySelect(e) {
    this.setState({
      selectedCatergories: e.map((item) => item.value),
    });
    console.log(this.state.selectedCatergories);
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

  onSubmit(e) {
    e.preventDefault();
    let meal = {
        mealName : this.state.mealName,
        catergories: this.state.selectedCatergories.toString(),
        price : this.state.price,
        description : this.state.description,
        image: this.state.selectedFile,
    };
    console.log("Meals Details", meal);
    axios
      .post("http://localhost:5000/meal/create", meal)
      .then((response) => {
        alert("Data inserted successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   let meal = {
 
  //     mealName : this.state.mealName,
  //     catergories: this.state.selectedCatergories,
  //     price : this.state.price,
  //     description : this.state.description,
  //     image: this.state.selectedFile,
  //   };
  //   console.log("Offer Details", meal);
  //   axios
  //     .post("http://localhost:5000/meal/create", meal)
  //     .then((response) => {
  //       alert("Data inserted successfully");

  //       this.setState({
  //         mealName: "",
  //         selectedCatergories: "",
  //         price: "",
  //         description: "",
          
  //         selectedFile:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

          
       
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       alert(error.message);
  //     });
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
            <Row className="backgroundRowImage">
          
              <Col sm="6">
                <h1 className="topic">Add Meal</h1>
                <p className="fontPara">Upload Image</p>
                <img
                  src={this.state.selectedFile}
                  alt="item image"
                  className="imageBoxNew"
                />
                <br />
                <br />
               
                
              </Col>
              <Col sm="6" className="spaceTop">
                <p className="fontPara">Meal Name</p>
                <input
                  className="inputTextBox"
                  name="mealName"
                  value={this.state.mealName}
                  onChange={this.onChange}
                  required
                ></input>
               <p className="fontPara">Price</p>
                <input
                  className="inputTextBox"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChange}
                  required
                ></input>
                <p className="fontPara">Description</p>
                <input
                  className="inputTextBox"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  required
                ></input>

                <p className="fontPara">Catergory</p>
                <div className="col-md-9">
                  {/* <Select
                    // options={this.state.optionsCatergories}
                    // onChange={this.onCatergorySelect}
                    // className="inputTextBox"
                    // required
                    optionsCatergories={this.state.optionsCatergories}
                    onChange={this.onCatergorySelect}
                    className="inputTextBox"
                    required
                  /> */}
                    <Select
                      options={this.state.optionsCatergories}
                      onChange={this.onCatergorySelect}
                      className="basic-multi-select"
                      isMulti
                    />
                </div>
                <p className="fontPara">Image</p>
                <input
                  className="inputTextBox"
                  type="file"
                  accept="image/*"
                  onChange={this.setSelectImageFile}
                  required
                ></input>
                <br></br><br></br><br></br>
  
                <Row>
                  <Col sm="6">
                  </Col>
                  <Col sm="6">
                  <button className="addNewButton">
                  Add
                </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        </form>
      </div>
    );
  }
}

export default createMeal;