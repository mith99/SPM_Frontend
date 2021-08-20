import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createCategory from './IT19167992/Components/Category/add-category';
import categoryList from './IT19167992/Components/Category/category-list';
import createMeal from './IT19167992/Components/Meal/add-meal';
import ViewMealsBackPanel from "./IT19167992/Components/Meal/meals-list";
import EditAndDeleteCategory from './IT19167992/Components/Category/edit-delete-category';
import EditMeal from './IT19167992/Components/Meal/edit-delete-meal';
function App() {
  return (
   <div>
      <Router>
        <Switch>
        
          <Route path="/add-category" component={createCategory} />
          <Route path="/category-list" component={categoryList} />
          <Route path="/add-meal" component={createMeal} />
          <Route path="/meal-list" component={ViewMealsBackPanel} />
          <Route path="/edit-delete-category/:id" component={EditAndDeleteCategory} />
          <Route path="/edit-delete-meal/:id" component={EditMeal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;