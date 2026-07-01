import React, { useEffect } from 'react';
import { motion, useWillChange } from 'framer-motion';

import BackButton from '../Elements/BackButton';
import ProjectGallery from '../Elements/ProjectGallery';
import IGTitleSVG from '../Elements/IGTitleSVG';

import postImg from '../../assets/projects/IG/post.png';
import shopNowImg from '../../assets/projects/IG/shop-now-sticker.png';
import learnMoreImg from '../../assets/projects/IG/learn-more-sticker.png';
import metricTileImg from '../../assets/projects/IG/metric-tile.png';
import midcardImg from '../../assets/projects/IG/midcard.png';

// TODO: Paste SVG path data exported from Figma here.
const IG_TITLE_PATHS = [];
const IG_TITLE_VIEWBOX = "0 0 600 80";
const IG_ZIGZAG_PATH = null;

function IGPage({ content }) {
   const willChange = useWillChange();

   useEffect(() => {
      document.documentElement.scrollTo(0, 0);
   }, []);

   return (
      <motion.div className="app ig-project-app" id="ig-project-app"
         style={{ willChange }}
         initial={{ scale: 0.99, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container" id="ig-body-container">

            <div className="project-section-wrapper" id="top-back-btn-container">
               <BackButton text="Back" id="top-back-btn" />
            </div>

            <motion.div className="project-section-wrapper project-header ig-header"
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
               <div className="project-section">
                  <IGTitleSVG
                     paths={IG_TITLE_PATHS}
                     zigzagPath={IG_ZIGZAG_PATH}
                     viewBox={IG_TITLE_VIEWBOX}
                  />
                  <p className="ig-catchphrase">
                     {content.header.catchphrase}
                  </p>
                  <ul className="project-desc-list">
                     {content.header.descriptions.titles.map((title, i) => (
                        <li key={i} className="project-desc">
                           <div className="ig-desc-label">{title}</div>
                           <div className="ig-desc-value">
                              {content.header.descriptions.contents[i]}
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="splash-img-container" id="ig-splash-container">
                  <img className="ig-splash-img" id="ig-splash-post"       src={postImg}       alt="Instagram post mockup" draggable="false" />
                  <img className="ig-splash-img" id="ig-splash-shop-now"   src={shopNowImg}    alt="Shop now"              draggable="false" />
                  <img className="ig-splash-img" id="ig-splash-midcard"    src={midcardImg}    alt="Mid card"              draggable="false" />
                  <img className="ig-splash-img" id="ig-splash-learn-more" src={learnMoreImg}  alt="Learn more"            draggable="false" />
                  <img className="ig-splash-img" id="ig-splash-metric"     src={metricTileImg} alt="Metric tile"           draggable="false" />
               </div>
            </motion.div>

            {content.sections.map((item, index) => {
               if (item.type === 'gallery') {
                  return (
                     <ProjectGallery
                        key={index}
                        projectName={content.metadata.name}
                        title={item.name}
                        content={item.content}
                        theme={content.metadata.theme}
                        index={index}
                        delay={index * 0.2 + 0.75}
                     />
                  );
               }
               return (
                  <motion.div
                     key={index}
                     className="project-section-wrapper project-context"
                     initial={{ y: 10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.2 + 0.75 }}
                  >
                     <div className="project-section project-section-text">
                        <h2 className="ig-section-header"
                            style={{ color: content.metadata.theme }}>
                           {item.name}
                        </h2>
                        {item.content.map((text, i) => (
                           <p key={i} className="ig-section-copy">{text}</p>
                        ))}
                     </div>
                  </motion.div>
               );
            })}

            <div className="project-section-wrapper" id="bottom-back-btn-container">
               <BackButton text="See all projects" id="bottom-back-btn" />
            </div>

         </div>
      </motion.div>
   );
}

export default IGPage;
