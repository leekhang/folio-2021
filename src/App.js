import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';

import IntroPage from './components/IntroPage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';

import popper from './assets/projects/Popper.js';
import strange from './assets/projects/Strange.js';
// import gtm from './assets/projects/gtm.js';
// import overviewtab from './assets/projects/OverviewTab.js';
// import applied from './assets/projects/Applied.js';
// import elios from './assets/projects/Elios.js';

const projects = [popper, strange]; 

function App(props) {
  const location = useLocation();
  const [initial, setInitial] = useState(false);
  
  useEffect(() => setInitial(true), []);

  function renderProjectPage(routerProps) {
    let project = null;
    projects.forEach((item) => {
      if (item.metadata.name === routerProps.match.params.name) project = item;
    });
    return ( <ProjectPage { ...routerProps } content={project}/> );
  }

  return (
    <div className="App">
      <Route path={["/work", "/about"]} component={NavBar} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={ routerProps => (<IntroPage {...routerProps}/>) } />
          <Route exact path="/work" render={ routerProps => (<WorkPage { ...routerProps } />) }/>
          <Route path="/work/:name" render={ routerProps => renderProjectPage(routerProps) }/>
          <Route path="/about" render={ routerProps => (<AboutPage { ...routerProps } />) }/>
          <Redirect to="/"/>
        </Switch>
      </AnimatePresence>
    </div>
  );
}


export default App;