import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Tooltip from './Tooltip';

import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import mail from '../assets/images/mail.svg'


function NavBar(props) {
   const [hover, setHover] = useState(0);

   function handleEmailClick() {
      
      let tempContent = document.getElementById("email-tooltip-label");
      const oldContent = tempContent.innerHTML;
      tempContent.innerHTML = "Copied!";
      navigator.clipboard.writeText("leekg97@gmail.com"); // copy email to clipboard
      setTimeout(() => {
         setHover(0);
         tempContent.innerHTML = oldContent;
      }, 1000);
      return false; // do not redirect
   }

   return (
      <motion.div className="navbar-container blur-filter"
         initial={{y:-100, scale:0.98, opacity:1}}
         animate={{y:0, scale:1, opacity:1}}
         exit={{y:-100, scale:0.98, opacity:1}}
         transition={{ duration: 0.5 }}
      >
         <div className="navbar">

            <div className="nav-name-container">
               <NavLink exact to="/work" id="nav-name">
                  Khang Lee
               </NavLink>
            </div>

            <div className="nav-btns-list">
               <NavLink activeClassName="nav-btn-selected" className="nav-btn nav-link-btn" exact to="/work">
                  WORK
               </NavLink>
               <NavLink activeClassName="nav-btn-selected" className="nav-btn nav-link-btn" exact to="/about">
                  ABOUT
               </NavLink>
            </div>

            <div className="comms-list">
               <div className="nav-btn nav-comm-btn contains-tooltip">
                  <a onClick={() => handleEmailClick()} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                     <img className="nav-comm-img" src={mail} alt="email icon"/>
                  </a>
                  <Tooltip copy="Copy email to clipboard" status={hover} id="email-tooltip"/>
               </div>
               
               <a className="nav-btn nav-comm-btn" href="https://twitter.com/1eekhang" target="_blank" rel="noopener noreferrer">
                  <img className="nav-comm-img" src={twitter} alt="twitter icon"/>
               </a>
               <a className="nav-btn nav-comm-btn" href="https://www.instagram.com/kingkhang_/" target="_blank" rel="noopener noreferrer">
                  <img className="nav-comm-img" src={instagram} alt="instagram icon"/>
               </a>
               <a className="nav-btn nav-link-btn" id="resume-btn" href="https://www.dropbox.com/s/hx2r3ws3quqdgi5/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                  RESUME
               </a>
               
            </div>
         </div>
      </motion.div>
      
   );
}

export default NavBar;