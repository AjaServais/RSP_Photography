import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import WeddingGallery from "./components/gallery/WeddingGallery";
import FamilyGallery from "./components/gallery/FamilyGallery";
import EngagementGallery from "./components/gallery/EngagementGallery";
import GastroGallery from "./components/gallery/GastroGallery";
import TravelGallery from "./components/gallery/TravelGallery";
import WorkshopsMain from "./components/WorkshopsMain";
import WeddingPkg from "./components/WeddingPkg";
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from "react-router";


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={App} />
      <Route path="About" component={About} />
       <Route path="Contact" component={Contact} />
      <Route path="WorkshopsMain" component={WorkshopsMain} />
      <Route path="WeddingPkg" component={WeddingPkg} />
      <Route path="WeddingGallery" component={WeddingGallery} />
      <Route path="FamilyGallery" component={FamilyGallery} />
      <Route path="EngagementGallery" component={EngagementGallery} />
      <Route path="TravelGallery" component={TravelGallery} />
      <Route path="GastroGallery" component={GastroGallery} />

    </Route>

  </Router>,
  document.getElementById('root'));
registerServiceWorker();
