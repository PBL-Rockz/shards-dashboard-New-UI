import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNav from './MainNav'; // Create MainNav.jsx separately
import Sidebar from './Sidebar'; // Create Sidebar.jsx separately
import Home from './Home'; // Create Home.jsx separately
import About from './About'; // Create About.jsx separately
import Contact from './Contact'; // Create Contact.jsx separately

function LandingPage() {
  return (
    <Router>
      <div className="app">
        <MainNav />

        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default LandingPage;
