import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Tooltip from './Tooltip';

import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import mail from '../../assets/images/mail.svg'
import resume from '../../assets/images/resume.svg'


function NavBar(props) {
   const [emailHover, setEmailHover] = useState(0);
   const [tweetHover, setTweetHover] = useState(0);
   const [IGHover, setIGHover] = useState(0);
   const [resumeHover, setResumeHover] = useState(0);

   function handleEmailClick() {
      let tempContent = document.getElementById("email-tooltip-label");
      const oldContent = tempContent.innerHTML;
      tempContent.innerHTML = "Copied!";
      navigator.clipboard.writeText("leekg97@gmail.com"); // copy email to clipboard
      setTimeout(() => {
         setEmailHover(0);
         tempContent.innerHTML = oldContent;
      }, 1000);
      return false; // do not redirect
   }

   return (
      <motion.div className="navbar-container blur-filter" id="navbar-container"
         initial={{y:-100, scale:0.98, opacity:1}}
         animate={{y:0, scale:1, opacity:1}}
         exit={{y:-100, scale:0.98, opacity:1}}
         transition={{ duration: 1 }}
      >
         <div className="navbar">

            <div className="nav-name-container">
               <NavLink exact to="/work" id="nav-name">
                  Khang <span>Lee</span>
               </NavLink>
            </div>

            <div className="comms-list">
               <a id="email-link" onClick={() => handleEmailClick()} onMouseEnter={() => setEmailHover(1)} onMouseLeave={() => setEmailHover(0)}>
                  <div className="nav-btn nav-comm-btn contains-tooltip">
                     <img className="nav-comm-img" src={mail} alt="email icon"/>
                     <Tooltip copy="Copy email to clipboard" status={emailHover} id="email-tooltip"/>
                  </div>
               </a>

               <a id="twitter-link" onMouseEnter={() => setTweetHover(1)} onMouseLeave={() => setTweetHover(0)} href="https://twitter.com/1eekhang" target="_blank" rel="noopener noreferrer">
                  <div className="nav-btn nav-comm-btn contains-tooltip">
                     <img className="nav-comm-img" src={twitter} alt="twitter icon"/>
                     <Tooltip copy="Twitter" status={tweetHover} id="twitter-tooltip"/>
                  </div>
               </a>
               
               <a id="ig-link" onMouseEnter={() => setIGHover(1)} onMouseLeave={() => setIGHover(0)} href="https://www.instagram.com/kingkhang_/" target="_blank" rel="noopener noreferrer">
                  <div className="nav-btn nav-comm-btn contains-tooltip">
                     <img className="nav-comm-img" src={instagram} alt="instagram icon"/>
                     <Tooltip copy="Instagram" status={IGHover} id="IG-tooltip"/>
                  </div>
               </a>

               <a id="resume-link" onMouseEnter={() => setResumeHover(1)} onMouseLeave={() => setResumeHover(0)} href="https://www.dropbox.com/s/hx2r3ws3quqdgi5/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                  <div className="nav-btn nav-comm-btn contains-tooltip">
                     <img className="nav-comm-img" src={resume} alt="resume icon"/>
                     <Tooltip copy="Resume" status={resumeHover} id="resume-tooltip"/>
                  </div>
               </a>
               
            </div>

            <div className="nav-btns-list">
               <NavLink activeClassName="nav-btn-selected" className="nav-btn nav-link-btn" exact to="/work">
                  WORK
               </NavLink>
               <NavLink activeClassName="nav-btn-selected" className="nav-btn nav-link-btn" exact to="/about">
                  ABOUT
               </NavLink>
            </div>

         </div>

      </motion.div>
      
   );
}

export default NavBar;