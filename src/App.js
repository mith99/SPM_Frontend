import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './IT19135830/sideNavBar';
import logo from './IT19135830/images/logo.png';
import AddTodaysSpecial from './IT19135830/todays-special/addTodaysSpecial'
import ViewSpecials from './IT19135830/todays-special/viewSpecials';
import IndividualDish from './IT19135830/todays-special/viewIndividualDish'


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

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
