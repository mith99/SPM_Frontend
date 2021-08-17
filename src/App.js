import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOffer from "./IT19136134/components/offers/add-offer";
import EditDeleteOffer from "./IT19136134/components/offers/edit-delete-offer";
import ViewOfferBackPanel from "./IT19136134/components/offers/view-backpanel-offers";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/edit-delete-offer/:id"
            component={EditDeleteOffer}
          ></Route>
          <Route path="/" component={ViewOfferBackPanel}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
