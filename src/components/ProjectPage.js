import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';
import Tooltip from './Tooltip';
import BackArrow from '../assets/images/arrow-back.svg'

function ProjectPage(props) {
   const content = props.content;

   useEffect(() => window.scrollTo(0, 0), []);

   /* if (content === null) show 404 page */

   return (
      <motion.div className="app project-app"
         // style={{ originX:0.5, originY:0.5 }}
         initial={{x:80, scale:0.98, opacity:0}}
         animate={{x:0, scale:1, opacity:1}}
         exit={{x:80, scale:0.98, opacity:0}}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container" id="project-body-container">
            
            <BackButton text="Back"/>

            <div className="project-header project-section">
               <ProjectHeaderContent content={props.content}/>
               <ProjectHeaderSplash content={props.content} />
            </div>
            
            <div className="project-context project-section">
               <div className="project-section-content">
                  <h2 className="section-header">Context</h2>
                  {props.content.context.map((item, index) => <p key={index} className="section-copy">{item}</p>)}
               </div>
            </div>

            <ProjectGallery/>
            
            <BackButton text="See all projects"/>

         </div>
      </motion.div>
   );
}

function BackButton(props) {
   return (
      <NavLink className="nav-btn back-btn" exact to="/work">
         <img className="back-arrow" src={BackArrow}/>
         <span className="back-btn-content">{props.text}</span>
      </NavLink>
   );
}

function ProjectHeaderContent(props) {
   const header = props.content.header;
   const name = props.content.metadata.name;
   const descs = header.descriptions;
   
   return (
      <div className="project-section-content" id={`${name}-project-section-content`}>
         <h1 className="project-title">{header.name}</h1>
         <p className="project-catchphrase">{header.catchphrase}</p>
         <ul className="project-desc-list">
            {descs.titles.map((item, index) => { return (
               <li key={index} className="project-desc">
                  <div className="desc-title">{item}</div>
                  <div className="desc-content">{descs.contents[index]}</div>
               </li>
            )})}
         </ul>
      </div>
   );
}

function ProjectHeaderSplash(props) {
   const content = props.content;
   return (
      <div className="splash-img-container" id={`${content.metadata.name}-splash-img-container`}>
         {content.header.images.map((item, index) => {
            return <img key={index} className="splash-img" id={`${content.metadata.name}-splash-${index}`} src={item}/>;
         })}
      </div>
   );
}

function ProjectGallery(props) {
   return(
      <div className="project-gallery project-section">
         <div className="project-section-content">
            <h2 className="section-header gallery-header">Highlights</h2>
            <div className="gallery-carousel">
               <img className="gallery-col gallery-img gallery-img-uno" src={require("../assets/images/Strange0.png")}/>
               <div className="gallery-col">
                  <img className="gallery-img gallery-img-duo" src={require("../assets/images/Strange1.png")}/>
                  <img className="gallery-img gallery-img-duo" src={require("../assets/images/Strange2.png")}/>
               </div>
               <img className="gallery-col gallery-img gallery-img-uno" src={require("../assets/images/Strange1.png")}/>
               <img className="gallery-col gallery-img gallery-img-uno" src={require("../assets/images/Strange3.png")}/>
            </div>
            <p className="section-copy gallery-footer">Shoot me a message for project details.</p>
         </div>

      </div>
   );
}

export default ProjectPage;