import React, { Component, Fragment } from "react";
// import Home from './components/ui/home';
import { Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Header from "./components/ui/header";
import { Main } from "./components/ui/body";

const history= createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Fragment>
            <Header />
            <Main />
            <footer>
              <span>hacker news 2019</span>
            </footer>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
