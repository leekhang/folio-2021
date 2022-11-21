import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProjectGallery  from './ProjectGallery';

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


function ProjectSection(props) {

  if (props.item === 'text') {
    return ( 
      <div className="project-section-wrapper project-context">
         <div className="project-section">
            <h2 className="section-header" style={{color:props.item.theme}}> {props.item.name} </h2>
            { props.item.content.map( (item, index) => handleParagraphContent(item, index, theme)) }
         </div>
      </div>
   );
  } else if (props.item === 'gallery') {
    return ( <ProjectGallery projectName={projectName} title={item.name} content={item.content} theme={theme} index={index}/> );
  }
  
}