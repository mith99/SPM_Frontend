import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewOrdersBackPanel from "./IT19134536/pages/Order-page-backpannel/pages/view-orders"
import ViewOrderSingleBackPanel from "./IT19134536/pages/Order-page-backpannel/pages/view-single-order"
import ViewFeedbackPanel from "./IT19134536/pages/Feedback-pages/pages/view-feedback"
import Navbar from "./sideNavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/order/view-orders-list" component={ViewOrdersBackPanel}></Route>
          <Route path="/feedback/view-feedbacks-list" component={ViewFeedbackPanel}></Route>
          <Route path="/order/view-single-order" component={ViewOrderSingleBackPanel}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
