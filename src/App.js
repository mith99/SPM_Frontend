import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOffer from "./IT19136134/components/offers/add-offer";
import EditDeleteOffer from "./IT19136134/components/offers/edit-delete-offer";
import ViewOfferBackPanel from "./IT19136134/components/offers/view-backpanel-offers";
import DashBoard from "./IT19136134/components/dashBoard/dash-board";
import Navbar from "./IT19135830/sideNavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route
            path="/edit-delete-offer/:id"
            component={EditDeleteOffer}
          ></Route>
          <Route path="/" component={ViewOfferBackPanel}></Route>
          {/* <Route path="/" component={AddOffer}></Route> */}
          {/* <Route path="/" component={DashBoard}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
