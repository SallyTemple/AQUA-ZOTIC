import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Administration from "./components/pages/Administration";
import Contact from "./components/pages/ContactUs";
import FishGallery from "./components/pages/FishGallery";
import Inventory from "./components/pages/Inventory";
import Products from "./components/pages/Products";
import Relaxation from "./components/pages/Relaxation";
import Home from "./components/pages/Home";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/relaxation" component={Relaxation} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/inventory" component={Inventory} />
      <Route path="/fishgallery" component={FishGallery} />
      <Route path="/administration" component={Administration} />
    </div>
  </Router>
);


export default App;
