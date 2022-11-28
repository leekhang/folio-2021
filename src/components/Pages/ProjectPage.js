import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

import BackButton from '../Elements/BackButton';
import ProjectGallery  from '../Elements/ProjectGallery';

function ProjectHeaderSplash(props) {
   if (props.content.header.images === undefined) return null;
   
   return (
      <div className="splash-img-container" id={`${props.content.metadata.name}-splash-img-container`}>
         {props.content.header.images.map((item, index) => {
            return <img key={index} className="splash-img" id={`${props.content.metadata.name}-splash-${index}`} src={item} loading="lazy"/>;
         })}
      </div>
   );
}

function ProjectHeaderContent(props) {

   const header = props.content.header, name = props.content.metadata.name,
         theme = props.content.metadata.theme;   
   let descs = undefined;

   if (header.descriptions !== undefined) {
      descs = header.descriptions.titles.map((item, index) => { 
                  return (
                     <li key={index} className="project-desc">
                        <div className="desc-title">{item}</div>
                        <div className="desc-content">{header.descriptions.contents[index]}</div>
                     </li>)
                  })
   }

   return (
      <div className="project-section" id={`${name}-project-section-content`}>
         <h1 className="project-title" style={{color:theme}}>{header.name}</h1>
         <p className="project-catchphrase">{header.catchphrase}</p>
         <ul className="project-desc-list">
            {descs}
         </ul>
      </div>
   );
}

function HandleProjectSections(projectName, sectionsArray, theme) {
   return sectionsArray.map((item, index) => {
      
      if (item.type === 'text') {
         return ( 
            <div key={index} className="project-section-wrapper project-context">
               <div className="project-section project-section-text">
                  <h2 className="section-header" style={{color:theme}}> {item.name} </h2>
                  { item.content.map( (item, index) => handleParagraphContent(item, index, theme)) }
               </div>
            </div>
         );

      } else if (item.type === 'gallery') {
         return ( <ProjectGallery projectName={projectName} title={item.name} content={item.content} theme={theme} index={index}/> );
      }   
   });
}

function handleParagraphContent(item, index, theme) {
   if (typeof item === 'object' && item.length !== undefined) {
      return (
         <p key={index} className="section-copy">
            {item.map((item, index) => handleParagraphContent(item, index, theme))}
         </p>
      );
   }

   if (typeof item === 'string') return <p key={index} className="section-copy">{item}</p>;

   if (item.TextType == "subheader") {
      return (<h3 className="section-subheader">{item.Content}</h3>)   
   }

   if (item.TextType == 'innerText') return item.Content;

   if (item.TextType == "bold") {
      return (<strong className="section-copy-bold">{item.Content}</strong>);

   } else if (item.TextType == 'italic') {
      return (<em className={"section-copy-italic"}>{item.Content}</em>);

   } else if (item.TextType === 'link') {
      return (
         <a className="section-copy-link" href={item.href} target="_blank" rel="noopener noreferrer">
            <u>{item.Content}</u>
         </a>
      );
   }
}

function ProjectPage(props) {
   const content = props.content;
   const theme = content.metadata.theme;
   const gradient = content.metadata.gradient;

   useLayoutEffect(() => {
      window.scrollTo(0, 0);
      if (theme !== undefined) {
         document.getElementById("nav-name").style.color = theme;
         document.getElementsByClassName("project-app")[0].style.background = `linear-gradient(to top, ${gradient} 50%,rgb(255, 255, 255) 100%)`;
      }
      return () => document.getElementById("nav-name").style.color = "#FF9431";
   },[]);

   return (
      <motion.div className="app project-app" id={`${content.metadata.name}-project-app`}
         initial={{scale:0.99, opacity:0}}
         animate={{scale:1, opacity:1}}
         exit={{y:0, scale:0.99, opacity:0}}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container" id="project-body-container">

            <div className="project-section-wrapper" id="top-back-btn-container">
               <BackButton text="Back" id="top-back-btn"/>
            </div>

            <div className="project-section-wrapper project-header">
               <ProjectHeaderContent content={content}/>
               <ProjectHeaderSplash content={content} />
            </div>

            { HandleProjectSections(content.metadata.name, content.sections, theme) }
            
            <div className="project-section-wrapper" id="bottom-back-btn-container">
               <BackButton text="See all projects" id="bottom-back-btn"/>
            </div>
         
         </div>

      </motion.div>
   );
}

export default ProjectPage;