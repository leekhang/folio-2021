import React, { useEffect } from 'react';
import { motion, useWillChange } from 'framer-motion';

import BackButton from '../Elements/BackButton';
import ProjectGallery  from '../Elements/ProjectGallery';

function ProjectPage(props) {
   const content = props.content;
   const projectName = content.metadata.name;
   const theme = content.metadata.theme;
   const gradient = content.metadata.gradient;
   const willChange = useWillChange();

   useEffect(() => {
      document.documentElement.scrollTo(0, 0);
      if (theme !== undefined) {
         document.getElementById("nav-name").style.color = theme;
         document.getElementsByClassName("project-app")[0].style.background = `linear-gradient(to top, rgb(255, 255, 255) 0%, ${gradient} 20%, ${gradient} 80%, rgb(255, 255, 255) 100%)`;
      }
      return () => document.getElementById("nav-name").style.color = "#FF9431";
   },[]);

   return (
      <motion.div className="app project-app" id={`${content.metadata.name}-project-app`}
         style={{ willChange }}
         initial={{ scale:0.99, opacity:0 }}
         animate={{ scale:1, opacity:1 }}
         exit={{ y:0, scale:0.99, opacity:0 }}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container" id="project-body-container">

            <div className="project-section-wrapper" id="top-back-btn-container">
               <BackButton text="Back" id="top-back-btn"/>
            </div>

            <ProjectHeader content={content} />
            
            { 
               content.sections.map(( item, index ) => {
                  return (
                     <ProjectSection
                        item={item}
                        theme={theme}
                        index={index}
                        projectName={projectName}
                     /> 
                  );
               }) 
            }
   
            <div className="project-section-wrapper" id="bottom-back-btn-container">
               <BackButton text="See all projects" id="bottom-back-btn"/>
            </div>
         
         </div>

      </motion.div>
   );
}

function ProjectHeader(props) {
   const header = props.content.header;
   const name = props.content.metadata.name;
   const theme = props.content.metadata.theme;   

   return (

      <motion.div 
         initial={{ y:10, opacity: 0 }} 
         animate={{ y:0, opacity: 1 }} 
         transition={{ duration: 0.6, delay:0.2 }}
         className="project-section-wrapper project-header"
      >
         {/* Project Header Content */}
         <div className="project-section" id={`${name}-project-section-content`}>
            <h1 className="project-title" style={{color:theme}}> { header.name } </h1>
            <p className="project-catchphrase"> { header.catchphrase } </p>
            { ( header.descriptions ) &&
               <ul className="project-desc-list">
                  { 
                     header.descriptions.titles.map(( item, index ) => { 
                        return (
                           <li key={index} className="project-desc">
                              <div className="desc-title"> { item } </div>
                              <div className="desc-content"> { header.descriptions.contents[index] } </div>
                           </li>
                        );
                     })
                  }
               </ul>
            }
         </div>
         
         {/* Project Header Splash Image  */}
         { ( props.content.header.images ) && 
            <div className="splash-img-container" id={`${props.content.metadata.name}-splash-img-container`}>
               {props.content.header.images.map((item, index) => {
                  return <img key={index} className="splash-img" id={`${props.content.metadata.name}-splash-${index}`} src={item} loading="lazy" alt="Project splash"/>;
               })}
            </div>
         }
         

      </motion.div>
   );
}

function ProjectSection(props) {
   const item = props.item;
   const index = props.index;
   const theme = props.theme
   const projectName = props.projectName;

   if (item.type === 'gallery') {
      return ( 
         <ProjectGallery 
            projectName={projectName} 
            title={item.name} 
            content={item.content} 
            theme={theme} 
            index={index} 
            delay={index*0.2 + 0.75}
         /> 
      );
   }   

   return ( 
      <motion.div 
         initial={{ y:10, opacity: 0 }} 
         animate={{ y:0, opacity: 1 }} 
         transition={{ duration: 0.4, delay:(index*0.2 + 0.75) }}
         key={index} className="project-section-wrapper project-context"
      >
         <div className="project-section project-section-text">
            <h2 className="section-header" style={{color:theme}}> {item.name} </h2>
            { item.content.map( (item, index) => renderParagraphContent(item, index, theme)) }
         </div>
      </motion.div>
   );

   
}

function renderParagraphContent(item, index, theme) {
   if (typeof item === 'object' && item.length !== undefined) {
      return (
         <p key={index} className="section-copy">
            {item.map((item, index) => renderParagraphContent(item, index, theme))}
         </p>
      );
   }

   if (typeof item === 'string') return <p key={index} className="section-copy">{item}</p>;

   if (item.TextType === "subheader") {
      return (<h3 className="section-subheader">{item.Content}</h3>)   
   }

   if (item.TextType === 'innerText') return item.Content;

   if (item.TextType === "bold") {
      return (<strong className="section-copy-bold">{item.Content}</strong>);

   } else if (item.TextType === 'italic') {
      return (<em className={"section-copy-italic"}>{item.Content}</em>);

   } else if (item.TextType === 'link') {
      return (
         <a className="section-copy-link" href={item.href} target="_blank" rel="noopener noreferrer">
            <u>{item.Content}</u>
         </a>
      );
   }
}

export default ProjectPage;