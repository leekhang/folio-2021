import React, { useState } from 'react';
import { motion, useWillChange } from 'framer-motion';

import Tooltip from '../Elements/Tooltip';
import Comms from '../Elements/Comms';

function AboutPage(props) {
   const [nameHover, setNameHover] = useState(0);
   const [ECEHover, setECEHover] = useState(0);
   const [HCIHover, setHCIHover] = useState(0);
   const willChange = useWillChange();
   
   return ( 
      <motion.div className="app about-app"
         style={{ willChange }}
         initial={{ y:-20, scale:1.05, opacity:0 }}
         animate={{ y:0, scale:1, opacity:1 }}
         exit={{ y:-20, scale:1.05, opacity:0 }}
         transition={{ duration: 0.75, delay: 0.25 }}
      >
         <div className="body-container" id="about-body-container">
            <div className="about-layout-container">
               <div className="about-left-column">
                  <motion.div 
                     initial={{ y:10, opacity: 0 }} 
                     animate={{ y:0, opacity: 1 }} 
                     transition={{ duration: 0.4, delay:0.75 }}
                     className="about-title-section"
                  >
                     <div className="about-title"><span id="chinese-title">你好。</span>Apa khabar?</div>
                     <div className="about-title" id="about-title-2nd-row">
                        I'm&nbsp;
                        <div className="contains-tooltip" id="name-tooltip-container">
                           <u id="khang-word" onMouseEnter={() => setNameHover(1)} onMouseLeave={() => setNameHover(0)}>
                              Khang
                           </u>
                           <Tooltip copy={`Pronounced 'Khan' with a 'g'`} status={nameHover} id="name-tooltip"/>
                        </div>
                        .
                     </div>
                  </motion.div>

                  <div className="about-body-section">

                     <motion.p 
                        initial={{ y:10, opacity: 0 }} 
                        animate={{ y:0, opacity: 1 }} 
                        transition={{ duration: 0.4, delay:1 }}
                        className="about-p"
                     >
                        I'm a Creative based in San Francisco, born and raised in Malaysia 🇲🇾.
                     </motion.p>

                     <motion.p 
                        initial={{ y:10, opacity: 0 }} 
                        animate={{ y:0, opacity: 1 }} 
                        transition={{ duration: 0.4, delay:1.2 }}
                        className="about-p"
                     >
                        Currently, I take on the title of Product Design. But outside of that, I love creating things that tell a touching story.
                     </motion.p>

                     <motion.p 
                        initial={{ y:10, opacity: 0 }} 
                        animate={{ y:0, opacity: 1 }} 
                        transition={{ duration: 0.4, delay:1.4 }}
                        className="about-p"
                     >
                        <span>I graduated at the University of Washington with a double STEM degree  </span>
                        <span className="p-contains-tooltip">
                           in&nbsp;
                           <WordWithTooltip 
                              text="ECE ⚡️" 
                              tooltipText="Electrical & Computer Engineering" 
                              setEnter={() => setECEHover(1)} 
                              setLeave={() => setECEHover(0)} 
                              hoverStats={ECEHover} 
                              id="ECE"
                           />
                           &nbsp;and&nbsp;
                           <WordWithTooltip 
                              text="HCI  💻"
                              tooltipText="Human-Computer Interaction"
                              setEnter={() => setHCIHover(1)}
                              setLeave={() => setHCIHover(0)}
                              hoverStats={HCIHover}
                              id="HCI"/>
                           .
                        </span>
                     </motion.p>

                     <motion.p
                        initial={{ y:10, opacity: 0 }} 
                        animate={{ y:0, opacity: 1 }} 
                        transition={{ duration: 0.4, delay:1.6 }}
                        className="about-p"
                     >
                        I main Pacman on Super Smash Bros Ultimate & Raze in Valorant.
                     </motion.p>

                     
                  </div>
               </div>

               <div className="about-right-column">
                  <div className="profile-img"></div>
                  <Comms location="about"/>
               </div>

            </div>
            
         </div>               
      </motion.div>
   );
}

function WordWithTooltip(props) {
   return(
      <span className="contains-tooltip p-tooltip-container">
         <u id={`${props.id}-word`} onMouseEnter={props.setEnter} onMouseLeave={props.setLeave}>{props.text}</u>
         <Tooltip copy={props.tooltipText} status={props.hoverStats} id={`${props.id}-tooltip`}/>
      </span>   
   );
}

export default AboutPage;