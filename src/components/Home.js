import React from 'react';
import fb_icon from '../assets/images/FB.png'
import build_icon from '../assets/images/Build.png'
import story_icon from '../assets/images/Story.png'
import child_icon from '../assets/images/Child.png'

function Home() {
   return (
      <div className="App">
         {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
         </header> */}
         <div className="Name-container">
            <h1>Khang<br />Lee</h1>
            {/* <button className="spin">Draw</button> */}
         </div>

         <div className="Phrase-list-container">
            
            <div className="phrase-container" id="phrase-1">
               <div className="phrase-layout"> 
                  <p className="phrase-content">Product Designer at Facebook, Inc.</p>
                  <img className="intro-icon" id="FB-icon" alt="FB icon" src={fb_icon} />
               </div>
            </div>

            <div className="phrase-container" id="phrase-2">
               <div className="phrase-layout">
                  <p className="phrase-content">Likes to build dope shit</p>
                  <img className="intro-icon" id="Build-icon" alt="build icon" src={build_icon} />   
               </div>
            </div>

            <div className="phrase-container" id="phrase-3">
               <div className="phrase-layout">
                  <p className="phrase-content">Avid Storyteller</p>
                  <img className="intro-icon" id="Story-icon" alt="loudspeaker icon" src={story_icon} />
               </div>
            </div>

            <div className="phrase-container" id="phrase-4">
               <div className="phrase-layout">
                  <p className="phrase-content">Advocate for The Inner Child</p>
                  <img className="intro-icon" id="Child-icon" alt="shapes icon" src={child_icon} />
               </div>
            </div>
            
         </div>
    </div>
   );
}

export default Home;