import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavBar from './components/Elements/NavBar';

import ScrollToTop from './components/Pages/ScrollToTop';
import IntroPage from './components/Pages/IntroPage';
import WorkPage from './components/Pages/WorkPage';
import AboutPage from './components/Pages/AboutPage';
import ProjectPage from './components/Pages/ProjectPage';

import popper from './assets/projects/Popper/Popper.js';
import strange from './assets/projects/Strange/Strange.js';
import applied from './assets/projects/Applied/Applied.js';
import abp from './assets/projects/ABP/ABP.js';
import priv from './assets/projects/Priv/Priv.js';
import elios from './assets/projects/Elios/Elios.js';

const projects = [priv, abp, popper, strange, applied, elios]; 

function App(props) {
  const location = useLocation();
  const [initial, setInitial] = useState(false);
  
  useEffect(() => {
    // window.scrollTo(0,0);
    setInitial(true);
  }, []);

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
      <ScrollToTop/>
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