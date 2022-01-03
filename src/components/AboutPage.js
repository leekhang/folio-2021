import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Tooltip from './Tooltip';
import profileImg from '../assets/images/profile.jpg';

function AboutPage(props) {
   const [isReady, setIsReady] = useState(false);
   const [nameHover, setNameHover] = useState(0);
   const [ECEHover, setECEHover] = useState(0);
   const [HCIHover, setHCIHover] = useState(0);

   useEffect(() => {
      document.fonts.load("12px Relative Faux").then(() => setIsReady(true));
    }, []);

   return ( isReady &&
      <motion.div className="app work-app"
         initial={{y:-20, scale:1.05, opacity:0}}
         animate={{y:0, scale:1, opacity:1}}
         exit={{y:-20, scale:1.05, opacity:0 }}
         transition={{ duration: 0.6 }}
      >
         <div className="body-container">
            <div className="about-layout-container">

               <div className="about-left-column">
                  <div className="about-title-section">
                     <div className="about-title"><span id="chinese-title">你好。</span>Apa khabar?</div>
                     <div className="about-title" id="about-title-2nd-row">
                        <div>I'm&nbsp;</div>
                        <div className="contains-tooltip" id="name-tooltip-container">
                           <u onMouseEnter={() => setNameHover(1)} onMouseLeave={() => setNameHover(0)}>
                              Khang.
                           </u>
                           <Tooltip copy={`Pronounced 'Khan' with a 'g'`} status={nameHover} id="name-tooltip"/>
                        </div>
                     </div>
                  </div>
                  <div className="about-body-section">
                     <p className="about-p">Designer based in the United States, born and raised in Malaysia 🇲🇾.</p>
                     <p className="about-p">I’m currently take on the Product Design title, but I love dabbling in projects that are creative & dope.</p>
                     <div className="about-p">
                        <div>Graduated with a double STEM degree</div>
                        <div className="p-contains-tooltip">
                           <div>in&nbsp;</div>
                           <div className="contains-tooltip p-tooltip-container">
                              <u onMouseEnter={() => setECEHover(1)} onMouseLeave={() => setECEHover(0)}>ECE ⚡️</u>
                              <Tooltip copy={`Electrical & Computer Engineering`} status={ECEHover} id="ECE-tooltip"/>
                           </div>
                           <div>&nbsp;and&nbsp;</div>
                           <div className="contains-tooltip p-tooltip-container">
                              <u onMouseEnter={() => setHCIHover(1)} onMouseLeave={() => setHCIHover(0)}>HCI  💻</u>
                              <Tooltip copy={`Human-Computer Interaction`} status={HCIHover} id="HCI-tooltip"/>
                           </div>   
                           <div>.</div>
                        </div>
                     </div>
                     <p className="about-p">I main Pacman on Super Smash Bros Ultimate.</p>
                  </div>
               </div>

               <div className="about-right-column">
                  <div className="profile-img"></div>
               </div>

            </div>
            
         </div>               
      </motion.div>
   );
}

export default AboutPage;