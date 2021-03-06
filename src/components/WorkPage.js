import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from './NavBar';

import gtm from '../assets/images/GTM.png'
import overview_tab from '../assets/images/Overview Tab.png'
import applied from '../assets/images/Applied.png'
import elios from '../assets/images/ELIOS.png'
import popper from '../assets/images/Popper.png'
import strange from '../assets/images/Strange Machines.png'

function WorkPage(props) {
   const [isReady, setIsReady] = useState(false);

   useEffect(() => {
      document.fonts.load("12px Relative Faux").then(() => setIsReady(true));
    }, []);

   return ( isReady &&
      <motion.div className="app work-app"
         initial={{y:-20, scale:1.05, opacity:0}}
         animate={{y:0, scale:1, opacity:1}}
         exit={{y:-20, scale:1.05, opacity:0 }}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container" id="work-body-container">
            <div className="page-title-section">
               <div className="page-title">Works I'm Proud Of</div>
            </div>
            <div className="main-section">
               <CaseStudy name="overview" src={overview_tab}/>
               <CaseStudy name="gtm" src={gtm}/>
               <CaseStudy name="applied" src={applied}/>
               <CaseStudy name="popper" src={popper}/>
               <CaseStudy name="elios" src={elios}/>
               <CaseStudy name="strange" src={strange}/>
            </div>
         </div>               
      </motion.div>
   );
}

function CaseStudy(props) {
   return (
      <div className="case-study" id={`${props.name}-project`}>
         <NavLink className="case-link" to={"/work/" + props.name}>
            <img className="case-img"
                 id={`${props.name}-img`}
                 src={props.src}
                 alt={`${props.name} project`} />
         </NavLink>
      </div>
   );
}

export default WorkPage;