import React, {
  Component,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Container
} from 'semantic-ui-react';

import House from "../pages/house";
import Navbar from "./navbar";
import MainPage from "../pages";
import Shopping from "../pages/shopping";
import Recipe from "../pages/recipe";
import ToDo from "../pages/todo";
import Meals from "../pages/meals";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Container text style={{ marginTop: '7em' }}>
            <Route path="/" exact component={MainPage} />
            <Route path="/shopping" exact component={Shopping} />
            <Route path="/recipe" exact component={Recipe} />
            <Route path="/todo" exact component={ToDo} />
            <Route path="/meals" exact component={Meals} />
            <Route path="/house" exact component={House} />
          </Container>
        </Router>
      </div>
    )
  }
}

export default Layout
