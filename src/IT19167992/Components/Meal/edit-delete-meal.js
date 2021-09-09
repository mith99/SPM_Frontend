import React, { Component } from "react";
import { Col, Row } from "reactstrap"; 
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';
import Select from "react-dropdown-select";
 

class EditMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealName : '',
      price : '',
      description : '',
     
      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      oldCatergories: "",
      catergories: [],
      optionsCatergories: [],
      selectedCatergories: "",
     
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
        `http://localhost:5000/meal/getMealById/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          mealName: response.data.meals.mealName,
          price: response.data.meals.price,
          description: response.data.meals.description,
          catergories :response.data.meals.categories,
          selectedFile: response.data.meals.image,
        });
      })
      .catch((error) => {
        alert(error.message);
      });

     
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
    axios.delete(`http://localhost:5000/meal/delete/${this.props.match.params.id}`)
    .then(response => {
        alert('Data Successfully Deleted.')
    })
    .catch(error => {
        console.log(error.message);
        alert(error.message)

    })
  }

  onEdit(e) {
    e.preventDefault();
    let meal = {
      mealName: this.state.mealName,
      price: this.state.price,
      description: this.state.description,
      image: this.state.selectedFile,
    };
    console.log("Offer Details", meal);
    axios
      .put(
        `http://localhost:5000/meal/edit/${this.props.match.params.id}`,
        meal
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
        <Row>
          <Col sm="2"></Col>
           
          <Col sm="10">
            <Row className="backgroundRowImage">
              <Col sm="6">
                <h1 className="topic">Edit/Delete Meal</h1>
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
                  <Select
                    options={this.state.optionsCatergories}
                    onChange={this.onCatergorySelect}
                    className="inputTextBox"
                  />
                </div>
                <p className="fontPara">Image</p>
                <input
                  className="inputTextBox"
                  type="file"
                  accept="image/*"
                  onChange={this.setSelectImageFile}
                
                ></input>
                <br></br>
                <row className="d-flex justify-content-between">
                  <button className="editDeleteButton" onClick={this.onDelete}>
                    Delete
                  </button>
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

export default EditMeal;