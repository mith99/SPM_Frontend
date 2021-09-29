import React, { Component } from "react";
import { Col, Row , Modal, Card, Button} from "reactstrap";
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';
 
class EditAndDeleteCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal:'',
      categoryId:'',
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
    const categotyIdentification = this.props.location.state.categoryId
    console.log(categotyIdentification);
        axios.get(`http://localhost:5000/category/getCategoryById/${categotyIdentification}`)
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
    const categotyIdentification = this.props.location.state.categoryId
    axios.delete(`http://localhost:5000/category/delete/${categotyIdentification}`)
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
    const categotyIdentification = this.props.location.state.categoryId
    let category = {
      categoryName: this.state.categoryName,   
      image: this.state.selectedFile,
    };
    console.log("category Details", category);
    axios
      .put(
        `http://localhost:5000/category/edit/${categotyIdentification}`,
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
                  className="imageBoxNew"
                />
                <br />
                <br />
                
               
                
              </Col>
              <Col sm="6" className="spaceTop">
              <br></br><br></br><br></br>
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
               
                  <Col sm="6" >
                  <button className="editnewDeleteButton" onClick={this.onEdit}>
                    Edit
                  </button>
                  </Col>
                  <Col sm="6" >
               
                    <button
                      className=" btn btn-danger"
                      onClick={(e) =>
                        this.setState({ closeModal: true })
                      }
                      style={{ width: '160px', height: '60px', borderRadius: '4vh' }}
                    >
                      Delete
                    </button>
                  </Col>
                  </row>
                   {/*Modal to confirm deletedish*/}

                    <Modal isOpen={this.state.closeModal} style={{ alignSelf: 'center', marginTop: '5vh' }}>
                      <div style={{ paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '2vh', paddingTop: '1vh' }}>
                        <Row>
                          <Col md='12'>
                            <h5 style={{ textAlign: 'center', paddingTop: '1vh', paddingBottom: '-1vh' }}>
                              Are you sure to remove this category ?
                            </h5>
                            <br />
                          </Col>
                        </Row>

                        <div className=" px-5 d-flex  justify-content-between " 
                        style={{ 
                            paddingBottom: '1vh',
                             paddingTop: '1vh' 
                             }}>
                          <Button
                            className="ml-1"
                            color="danger"
                            onClick={this.onDelete}
                            style={{ width: '140px', height: '40px', borderRadius: '2vh' }}
                          >
                            Delete
                          </Button>

                          <Button
                            className="ml-1"
                            color="danger"
                            outline
                            onClick={() => this.setState({
                              closeModal: false
                            })}
                            style={{ 
                              width: '140px', 
                              height: '40px', 
                              borderRadius: '2vh' 
                            }}

                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </Modal>
              
              
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditAndDeleteCategory;