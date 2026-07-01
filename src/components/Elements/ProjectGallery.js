import React from 'react';
import { motion } from 'framer-motion';

function RenderGalleryAssets(props) {
   return props.content.map((asset, index) => {
      const fileExt = asset.split('.').pop();
      const media = fileExt === 'mp4'
         ? <video loop autoPlay muted playsInline className={`slider-asset ${props.projectName}-asset`}>
              <source src={asset} type="video/mp4" />
           </video>
         : <img className={`slider-asset ${props.projectName}-asset`} src={asset} draggable="false" alt="Project mock up" />;

      return (
         <motion.div
            key={index}
            className={`slider-item ${props.projectName}-slider-item`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            style={{ touchAction: 'pan-x' }}
         >
            {media}
         </motion.div>
      );
   });
}

export default function ProjectGallery(props) {
   const galleryTitle = props.title
      ? <h2 className="section-header gallery-header" style={{ color: props.theme }}>{props.title}</h2>
      : null;
   const galleryFooter = props.footer
      ? <p className="section-copy gallery-footer">{props.footer}</p>
      : null;

   return (
      <motion.div
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.4, delay: props.delay }}
         key={props.index}
         className="project-section-wrapper project-gallery"
      >
         <div className="project-section">
            {galleryTitle}
            <div className="slider-wrapper">
               <div className="slider" id="slider">
                  {RenderGalleryAssets(props)}
               </div>
            </div>
            {galleryFooter}
         </div>
      </motion.div>
   );
}
