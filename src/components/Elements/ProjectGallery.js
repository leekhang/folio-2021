import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectGallery(props) {
  const [width, setWidth] = useState(0);
  const carouselWrapper = useRef();
  const carousel = useRef();

  const title = (props.title) ? 
    <h2 className="section-header gallery-header" style={{ color: props.theme }}>{props.title}</h2> : props.title;

  const footer = (props.footer) ?
    <p className="section-copy gallery-footer">{props.footer}</p> : props.footer;

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carouselWrapper.current.offsetWidth);
    }, 10);
    
    
  },[carousel.current, carouselWrapper.current]);

  return (
    <motion.div 
      initial={{ y:10, opacity: 0 }} 
      animate={{ y:0, opacity: 1 }} 
      transition={{ duration: 0.4, delay:props.delay }}
      key={props.index} className="project-section-wrapper project-gallery"
    >

      <div className="project-section">

        {title}

        <motion.div className="slider-wrapper" ref={carouselWrapper} whileTap={{ cursor: "grabbing" }}>

          <motion.div className="slider" id="slider"
            ref={carousel}
            drag="x"
            dragConstraints={{ right:0 , left:-width }}
            dragElastic={0.2}
          >
            {
              props.content.map((asset, index) => {
                
                let output;
                const fileExt = asset.split('.').pop();

                if (fileExt === 'mp4') {
                  output =  <video loop autoPlay muted key={index} className={`slider-asset ${props.projectName}-asset`} >
                              <source src={asset} type="video/mp4"/>
                            </video>
                } else {
                  output = <img className={`slider-asset ${props.projectName}-asset`} src={asset} draggable="false" key={index} loading="lazy"/>
                } 

                return (
                  <motion.div className={`slider-item ${props.projectName}-slider-item`} key={index} 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    { output }
                  </motion.div>
                );
              })
            }
          </motion.div>

        </motion.div>

        {footer}

      </div>
    </motion.div>
  );
}