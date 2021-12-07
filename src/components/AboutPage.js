import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar';

import profileImg from '../assets/images/profile.jpg';

function AboutPage(props) {
   const [isReady, setIsReady] = useState(false);

   useEffect(() => {
      document.fonts.load("12px Relative Faux").then(() => setIsReady(true));
    }, []);

   return ( isReady &&
      <div className="app work-app">
         <NavBar/>
         <div className="body-container">
            <div className="about-layout-container">

               <div className="about-left-column">
                  <div className="about-title-section">
                     <div className="about-title"><span id="chinese-title">你好。</span>Apa khabar?</div>
                     <div className="about-title">I'm Khang.</div>
                  </div>
                  <div className="about-body-section">
                     <p className="about-p">Designer based in the United States, born and raised in Malaysia 🇲🇾.</p>
                     <p className="about-p">I’m currently take on the Product Design title, but I love dabbling in projects that are creative & dope.</p>
                     <p className="about-p">Graduated in with a double degree in ECE ⚡️ and HCI 💻.</p>
                     <p className="about-p">I main Pacman on Super Smash Bros Ultimate.</p>
                  </div>
               </div>

               <div className="about-right-column">
                  <div className="profile-img"></div>
               </div>

            </div>
            
         </div>               
      </div>
   );
}

export default AboutPage;