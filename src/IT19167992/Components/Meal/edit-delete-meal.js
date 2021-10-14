import React, { Component } from "react";
import { Col, Row , Modal, Card, Button} from "reactstrap";
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';
import Select from "react-dropdown-select";
 

class EditMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal:'',
      mealId:'',
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
    const mealIdentification = this.props.location.state.mealId
    console.log(this.props.match.params.id);
    axios
      .get(
        `http://localhost:5000/meal/getMealById/${mealIdentification}`
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
    const mealIdentification = this.props.location.state.mealId
    axios.delete(`http://localhost:5000/meal/delete/${mealIdentification}`)
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
    const mealIdentification = this.props.location.state.mealId
    let meal = {
      mealName: this.state.mealName,
      price: this.state.price,
      description: this.state.description,
      image: this.state.selectedFile,
    };
    console.log("Offer Details", meal);
    axios
      .put(
        `http://localhost:5000/meal/edit/${mealIdentification}`,
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
                              Are you sure to remove this meal ?
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

export default EditMeal;