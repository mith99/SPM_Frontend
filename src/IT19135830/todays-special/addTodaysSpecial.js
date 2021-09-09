import React, { Component } from "react";
import { Col, Row } from "reactstrap";
// import Select from "react-dropdown-select";
// import axios from "axios";
import '../css/todaysSpecial.css'

class AddTodaysSpecial extends Component {
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

      catergories: [],
      optionsCatergories: [],
      selectedCatergories: "",

      meals: [],
      optionsMeals: [],
      selectedMeals: "",
    };

    // this.onCatergorySelect = this.onCatergorySelect.bind(this);
    // this.onMealSelect = this.onMealSelect.bind(this);
    // this.setSelectImageFile = this.setSelectImageFile.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/category/getAllCategories")
//       .then((response) => {
//         console.log(response);
//         this.setState({ catergories: response.data.data }, () => {
//           let data = [];

//           this.state.catergories.map((item, index) => {
//             let catergory = {
//               value: item._id,
//               label: item.categoryName,
//             };
//             data.push(catergory);
//           });

//           this.setState({ optionsCatergories: data });
//         });
//       });

//     axios.get("http://localhost:5000/meal/").then((response) => {
//       console.log(response);
//       this.setState({ meals: response.data.data }, () => {
//         let data = [];

//         this.state.meals.map((item, index) => {
//           let meal = {
//             value: item._id,
//             label: item.mealName,
//           };
//           data.push(meal);
//         });

//         this.setState({ optionsMeals: data });
//       });
//     });
//   }

//   onCatergorySelect(e) {
//     this.setState({
//       selectedCatergories: e.map((item) => item.value),
//     });
//     console.log(this.state.selectedCatergories);
//   }

//   onMealSelect(e) {
//     this.setState({
//       selectedMeals: e.map((item) => item.value),
//     });
//     const meal = this.state.selectedMeals;
//     console.log(meal);
//   }

//   setSelectImageFile = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         resolve(event.target.result);
//       };
//       reader.readAsDataURL(file.target.files[0]);
//       reader.onload = () => {
//         console.log(reader.result);
//         this.setState({
//           selectedFile: reader.result,
//         });
//       };
//     });

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     let offer = {
//       offerName: this.state.offerName,
//       catergories: this.state.selectedCatergories,
//       meals: this.state.selectedMeals,
//       description: this.state.description,
//       discount: this.state.discountPercentage,
//       price: this.state.newPrice,
//       startDate: this.state.startDate,
//       endDate: this.state.endDate,
//       image: this.state.selectedFile,
//     };
//     console.log("Offer Details", offer);
//     axios
//       .post("http://localhost:5000/offer/create", offer)
//       .then((response) => {
//         alert("Data inserted successfully");
//         this.setState({
//           offerName: "",
//           description: "",
//           discountPercentage: "",
//           newPrice: "",
//           startDate: new Date(),
//           endDate: new Date(),
//           selectedFile:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

//           selectedCatergories: "",
//           selectedMeals: "",
//         });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert(error.message);
//       });
//   }

  render() {
    return (
      <div className="backgroundRowImage">
        <Row >
          <Col sm="12" style={{marginLeft:'300px'}}>
            <div>
           <h1 className='titleStyle' style={{opacity:'100%'}}>Todays's Special</h1>
           </div>
           </Col>
           </Row>

          <br/>
          <br/>

          <Row >
            <Col sm='2'></Col>
            <Col sm='10'>
              <h3 className='inputTitles'style={{marginBottom:'-15px'}}>
                Dish Name
              </h3>
              <br/>
                <input
                    className="inputTextBox"
                    name="description"
                    // value={this.state.description}
                    // onChange={this.onChange}
                    required
                ></input>
            </Col>


          </Row>


        <Row >
          <Col sm='2'></Col>
          <Col sm='10'>
              <h3 className='inputTitles'>
                Description
              </h3>

              <textarea
                  className="inputTextBox"
                  name="description"
                  // value={this.state.description}
                  // onChange={this.onChange}
                  required
                  // style={{marginTop:'30px', height:'100px'}}
              ></textarea>
            </Col>


          </Row>
          
        
      </div>
    );
  }
}

export default AddTodaysSpecial;