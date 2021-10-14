import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
import createCategory from './IT19167992/Components/Category/add-category';
import categoryList from './IT19167992/Components/Category/category-list';
 import createMeal from './IT19167992/Components/Meal/add-meal';
import ViewMealsBackPanel from "./IT19167992/Components/Meal/meals-list";
import EditAndDeleteCategory from './IT19167992/Components/Category/edit-delete-category';
import EditMeal from './IT19167992/Components/Meal/edit-delete-meal';


import NavBar from './IT19135830/sideNavBar';
import MealReport from "./IT19167992/Components/Meal/meal-report";

 

import NavBar from './IT19135830/sideNavBar';
import logo from './IT19135830/images/logo.png';
import AddTodaysSpecial from './IT19135830/components/todays-special/addTodaysSpecial'
import ViewSpecials from './IT19135830/components/todays-special/viewSpecials';
import IndividualDish from './IT19135830/components/todays-special/viewIndividualDish';
import EditDish from './IT19135830/components/todays-special/editSpecialDish';
import CreateEmail from "./IT19135830/components/email-creator/createEmail";
import ViewEmails from "./IT19135830/components/email-creator/viewEmails";


function App() {
  return (
   <div>

     <NavBar/>
   
     
     <Router>
        {/* <Login /> */}
        <Switch>
          <Route path="/add-todays-special" component={AddTodaysSpecial}></Route>
          <Route path="/view-todays-special" component={ViewSpecials}></Route>
          <Route path="/view-dish/:id" component={IndividualDish}></Route>
          <Route path="/edit-dish/:id" component={EditDish}></Route>
          <Route path="/create-email" component ={CreateEmail}></Route>
          <Route path="/view-emails" component ={ViewEmails}></Route>


import AddOffer from "./IT19136134/components/offers/add-offer";
import EditDeleteOffer from "./IT19136134/components/offers/edit-delete-offer";

import DashBoard from "./IT19136134/components/dashBoard/dash-board";
import Navbar from "./IT19135830/sideNavBar";
import OfferReport from "./IT19136134/components/report/offers-report";
import ViewOffersBackPanel from "./IT19136134/components/offers/view-backpanel-offers";
import ReportCommon from "./IT19136134/components/report/report";



// import logo from "./IT19135830/images/logo.png";
import AddTodaysSpecial from "./IT19135830/components/todays-special/addTodaysSpecial";
// import ViewSpecials from "./IT19135830/components/todays-special/viewSpecials";
// import IndividualDish from "./IT19135830/components/todays-special/viewIndividualDish";
// import EditDish from "./IT19135830/components/todays-special/editSpecialDish";
// import CreateEmail from "./IT19135830/components/email-creator/createEmail";
//import ViewEmails from "./IT19135830/components/email-creator/viewEmails";
 
function App() {
  return (
   <div>
     <NavBar/>
      <Router>
        <Switch>
 
          <Route path="/add-category" component={createCategory} />
          <Route path="/category-list" component={categoryList} />
          <Route path="/add-meal" component={MealReport} />
          <Route path="/meal-list" component={ViewMealsBackPanel} />
          <Route path="/edit-delete-category" component={EditAndDeleteCategory} />
          <Route path="/edit-delete-meal" component={EditMeal} />
 
          <Route path="/offer-report" component={OfferReport}></Route>
          <Route path="/report" component={ReportCommon}></Route>

          <Route
            path="/edit-delete-offer/:id"
            component={EditDeleteOffer}
          ></Route>
          <Route
            path="/view-offer-backpanel"

            component={ViewOffersBackPanel}
          ></Route>
          <Route path="/add-offer" component={AddOffer}></Route>
          <Route
            path="/add-todays-special"
            component={AddTodaysSpecial}
          ></Route>
          {/* <Route path="/view-todays-special" component={ViewSpecials}></Route>
          <Route path="/view-dish/:id" component={IndividualDish}></Route>
          <Route path="/edit-dish/:id" component={EditDish}></Route>
          <Route path="/create-email" component={CreateEmail}></Route> */}
          {/* <Route path="/view-emails" component={ViewEmails}></Route> */}
          component={ViewOfferBackPanel}
          ></Route>
          <Route path="/add-offer" component={AddOffer}></Route>

          <Route path="/" component={DashBoard}></Route>

 
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
