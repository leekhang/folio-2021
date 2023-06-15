import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function RenderGalleryAssets(props) {
   
   return props.content.map((asset, index) => {
      let output;
      const fileExt = asset.split('.').pop();

      console.log(index);

      if (fileExt === 'mp4') {
         output = 
            <video 
               loop autoplay muted playsinline
               key={index}
               className={`slider-asset ${props.projectName}-asset`}
            >
               <source src={asset} type="video/mp4" />
            </video>
      } else {
         output = <img className={`slider-asset ${props.projectName}-asset`} src={asset} draggable="false" alt="Project mock up" key={index} />
      }

      return (
         <motion.div 
            className={`slider-item ${props.projectName}-slider-item`} 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
         >
            { output }
         </motion.div>
      );
   })
}

export default function ProjectGallery(props) {
   const [width, setWidth] = useState(0);
   const carouselWrapper = useRef();
   const carousel = useRef();

   const galleryTitle = (props.title) ? <h2 className="section-header gallery-header" style={{ color: props.theme }}>{props.title}</h2> : props.title;
   const galleryFooter = (props.footer) ? <p className="section-copy gallery-footer">{props.footer}</p> : props.footer;

   useEffect(() => {
      setWidth(carousel.current.scrollWidth - carouselWrapper.current.offsetWidth);
   }, []);

   return (   
      <motion.div
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.4, delay: props.delay }}
         key={props.index} className="project-section-wrapper project-gallery"
      >

         <div className="project-section">

            { galleryTitle }

            <motion.div className="slider-wrapper" ref={carouselWrapper} whileTap={{ cursor: "grabbing" }}>

               <motion.div className="slider" id="slider"
                  ref={carousel}
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  dragElastic={0.2}
               >

                  { RenderGalleryAssets(props) }

               </motion.div>

            </motion.div>

            { galleryFooter }

         </div>
      </motion.div>
   );
}