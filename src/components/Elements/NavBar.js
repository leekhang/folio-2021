import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Comms from './Comms';


function NavBar(props) {

   return (
      <motion.div className="navbar-container blur-filter" id="navbar-container"
         initial={{ y:-100, scale:0.95, opacity:1 }}
         animate={{ y:0, scale:1, opacity:1 }}
         exit={{ y:-100, scale:0.95, opacity:1 }}
         transition={{ duration: 0.75 }}
      >
         <div className="navbar">

            <div className="nav-name-container">
               <NavLink exact to="/work" id="nav-name">
                  Khang <span>Lee</span>
               </NavLink>
            </div>

            <Comms location="nav"/>
            
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