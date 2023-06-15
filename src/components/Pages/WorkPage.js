import React, { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useWillChange } from 'framer-motion';

import priv from '../../assets/images/Meta Privacy.png';
import abp from '../../assets/images/Meta ABP.png';
import applied from '../../assets/images/Applied.png';
import elios from '../../assets/images/ELIOS.png';
import popper from '../../assets/images/Popper.png';
import strange from '../../assets/images/Strange Machines.png';

function WorkPage(props) {
   const willChange = useWillChange();

   useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
      document.getElementById("nav-name").style.color = "#FF9431";
   }, []);
   
   return (
      <motion.div className="app work-app"
         style={{ willChange }}
         initial={{ y:-20, scale:1.05, opacity:0 }}
         animate={{ y:0, scale:1, opacity:1 }}
         exit={{ scale:1.05, opacity:0 }}
         transition={{ duration: 0.75 }}
      >
         <div className="app work-app">
            <div className="body-container" id="work-body-container">
               <div className="page-title-section">
                  <div className="page-title">Work I'm Proud Of</div>
               </div>
               <motion.div className="main-section"
                  transition={{ duration: 0.75, delay: 1, delayChildren: 1.5 }}
               >
                  <CaseStudy name="priv" delay={0.15} src={priv}/>
                  <CaseStudy name="abp" delay={0.3} src={abp}/>
                  <CaseStudy name="applied" delay={0.45} src={applied}/>
                  <CaseStudy name="strange" delay={0.6} src={strange}/>
                  <CaseStudy name="popper" delay={0.6} src={popper}/>
                  <CaseStudy name="elios" delay={0.8} src={elios}/>
               </motion.div>
            </div>    
         </div>           
      </motion.div>
   );
}

function CaseStudy(props) {
   const willChange = useWillChange();

   return (
         <motion.div 
            style={{ willChange }}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.2, delay: props.delay}}
            exit={{ opacity:0 }}
            className="case-study" id={`${props.name}-project`}
         >
         {/* <div className="case-study" id={`${props.name}-project`}> */}
            <NavLink className="case-link" to={"/work/" + props.name}>
               <img className="case-img"
                  id={`${props.name}-img`}
                  src={props.src}
                  alt={`${props.name} project`}
               />
            </NavLink>
         {/* </div> */}
         </motion.div>
   );
}

export default WorkPage;