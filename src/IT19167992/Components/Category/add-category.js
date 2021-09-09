import React, { Component } from "react";
import { Col, Row } from "reactstrap";
 
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';

class createCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryName : '',

      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      
       
    };

     
    this.setSelectImageFile = this.setSelectImageFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    let category = {
      categoryName : this.state.categoryName,
      image: this.state.selectedFile,
    };
    console.log("Category Details", category);
    axios
      .post("http://localhost:5000/category/create", category)
      .then((response) => {
        alert("Data inserted successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="2"></Col>
          <Col sm="10">
              
            <Row className="backgroundRowImage">
              <Col sm="6">
                <h1 className="topic">Add Category</h1>
                <p className="fontPara">Upload Image</p>
                <img
                  src={this.state.selectedFile}
                  alt="item image"
                  className="imageBox"
                />
                <br />
                <br />
                
               
                
              </Col>
              <Col sm="6" className="spaceTop">
              <br></br><br></br><br></br>
                <p className="fontPara">Category Name</p>
                <input
                  className="inputTextBox"
                  name="categoryName"
                  value={this.state.categoryName}
                  onChange={this.onChange}
                  required
                ></input>
                <br />
                <br />
                <p className="fontPara">Image</p>
                <input
                  className="inputTextBox"
                  type="file"
                  accept="image/*"
                  onChange={this.setSelectImageFile}
                  
                ></input>
                <br></br><br></br><br></br>
                <button className="addButton" onClick={this.onSubmit}>
                  Add
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default createCategory;