import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOffer from "./IT19136134/components/offers/add-offer";
import EditDeleteOffer from "./IT19136134/components/offers/edit-delete-offer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={AddOffer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
