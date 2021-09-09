import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';

class EditAndDeleteCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
 
      categoryName : '',
      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      
       
    };

     
    this.setSelectImageFile = this.setSelectImageFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
     
    console.log(this.props.match.params.id);
        axios.get(`http://localhost:5000/category/getCategoryById/${this.props.match.params.id}`)
        .then(response => {
                this.setState ({    categoryName :response.data.categories.categoryName,
                                    selectedFile: response.data.categories.image,
                                     
                });
                
               
        })
        .catch(error => {
          alert(error.message)
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
    axios.delete(`http://localhost:5000/category/delete/${this.props.match.params.id}`)
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
    let category = {
      categoryName: this.state.categoryName,   
      image: this.state.selectedFile,
    };
    console.log("category Details", category);
    axios
      .put(
        `http://localhost:5000/category/edit/${this.props.match.params.id}`,
        category
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
                <h1 className="topic">Edit/Delete Category</h1>
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

export default EditAndDeleteCategory;