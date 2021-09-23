import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOffer from "./IT19136134/components/offers/add-offer";
import EditDeleteOffer from "./IT19136134/components/offers/edit-delete-offer";
import ViewOfferBackPanel from "./IT19136134/components/offers/view-backpanel-offers";
import DashBoard from "./IT19136134/components/dashBoard/dash-board";
import Navbar from "./IT19135830/sideNavBar";
import OfferReport from "./IT19136134/components/report/offers-report";
import ViewOffersBackPanel from "./IT19136134/components/offers/view-backpanel-offers";
import Report from "./IT19136134/components/report/report";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/offer-report" component={OfferReport}></Route>
          <Route path="/report" component={Report}></Route>
          <Route
            path="/edit-delete-offer/:id"
            component={EditDeleteOffer}
          ></Route>
          <Route
            path="/view-offer-backpanel"
            component={ViewOffersBackPanel}
          ></Route>
          <Route path="/add-offer" component={AddOffer}></Route>
          <Route path="/" component={DashBoard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
