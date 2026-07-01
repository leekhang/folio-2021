import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import NavBar from './components/Elements/NavBar';

import ScrollToTop from './components/Functions/ScrollToTop';
import IntroPage from './components/Pages/IntroPage';
import WorkPage from './components/Pages/WorkPage';
import AboutPage from './components/Pages/AboutPage';
import ProjectPage from './components/Pages/ProjectPage';
import IGPage from './components/Pages/IGPage';

import popper from './assets/projects/Popper/Popper.js';
import strange from './assets/projects/Strange/Strange.js';
import applied from './assets/projects/Applied/Applied.js';
import abp from './assets/projects/ABP/ABP.js';
import priv from './assets/projects/Priv/Priv.js';
import elios from './assets/projects/Elios/Elios.js';
import ig from './assets/projects/IG/IG.js';

const projects = [ig, priv, abp, popper, strange, applied, elios];

const ORANGE = '#FF9431'; // matches $orange in Variables.scss

function App(props) {
  const location = useLocation();
  const isIGPage = location.pathname === '/work/ig';

  // Sync navbar dark theme with the overlay — fires on route change, not on page mount.
  // Set nav-name color via inline style so it fires at t=0 (CSS class rule loses to
  // any leftover inline style from ProjectPage cleanup).
  useEffect(() => {
    const navName = document.getElementById("nav-name");
    if (isIGPage) {
      document.body.classList.add('ig-dark-nav');
      if (navName) navName.style.color = ig.metadata.theme;
    } else {
      document.body.classList.remove('ig-dark-nav');
      if (navName) navName.style.color = ORANGE;
    }
  }, [isIGPage]);

  function renderProjectPage(routerProps) {
    let project = null;
    projects.forEach((item) => {
      if (item.metadata.name === routerProps.match.params.name) project = item;
    });
    return ( <ProjectPage { ...routerProps } content={project}/> );
  }

  return (
    <div className="App">
      {/* Full-viewport black overlay — fades in/out with the IG page.
          z-index 1: above body gradient, below page content (z-index 2) and navbar (z-index 3).
          This avoids compositing a dark page over a cream body (grey wash) and covers all edges. */}
      <motion.div
        style={{ position: 'fixed', inset: 0, background: ig.metadata.background, zIndex: 1, pointerEvents: 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isIGPage ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      <Route path={["/work", "/about"]} component={NavBar} />
      <ScrollToTop/>
      {/* z-index 2 keeps page content above the overlay */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" render={ routerProps => (<IntroPage {...routerProps}/>) } />
            <Route exact path="/work" render={ routerProps => (<WorkPage { ...routerProps } />) }/>
            <Route exact path="/work/ig" render={ routerProps => (<IGPage {...routerProps} content={ig} />) } />
            <Route path="/work/:name" render={ routerProps => renderProjectPage(routerProps) }/>
            <Route path="/about" render={ routerProps => (<AboutPage { ...routerProps } />) }/>
            <Redirect to="/"/>
          </Switch>
        </AnimatePresence>
      </div>
      <Analytics />
    </div>
  );
}


export default App;