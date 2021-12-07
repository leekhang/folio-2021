import { NavLink } from 'react-router-dom';

import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'
import mail from '../assets/images/mail.svg'

function NavBar(props) {
   return (
      <div className="navbar-container blur-filter">
         <div className="navbar">

            <div className="nav-name-container">
               <NavLink to="/" id="nav-name">
                  Khang Lee
               </NavLink>
            </div>

            <div className="nav-btns-list">
               <NavLink className="nav-btn nav-link-btn" id="nav-btn-selected" to="/work">
                  WORK
               </NavLink>
               <NavLink className="nav-btn nav-link-btn" to="/about">
                  ABOUT
               </NavLink>
            </div>

            <div className="comms-list">
               <NavLink className="nav-btn nav-comm-btn" to="/work">
                  <img className="nav-comm-img" src={mail} alt="email icon"/>
               </NavLink>
               <a className="nav-btn nav-comm-btn" href="https://twitter.com/1eekhang" target="_blank" rel="noopener noreferrer">
                  <img className="nav-comm-img" src={twitter} alt="twitter icon"/>
               </a>
               <a className="nav-btn nav-comm-btn" href="https://www.instagram.com/kingkhang_/" target="_blank" rel="noopener noreferrer">
                  <img className="nav-comm-img" src={instagram} alt="instagram icon"/>
               </a>
               <NavLink className="nav-btn nav-link-btn" id="resume-btn" to="/work">
                  RESUME
               </NavLink>
               
            </div>
         </div>
      </div>
      
   );
}

export default NavBar;