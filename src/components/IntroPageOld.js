import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';

import fb_icon from '../assets/images/FB.png'
import build_icon from '../assets/images/Build.png'
import story_icon from '../assets/images/Story.png'
import child_icon from '../assets/images/Child.png'
import down_icon from '../assets/images/DownArrow.png'

class IntroPageOld extends Component {
   constructor(props) {
      super(props);
      this.val = 0;
      this.height = 184;
      this.phrases = [];
      this.btns = [];
   }

   render() {
      return (
         <div className="App">
            <div className="name-container">
               <h1>Khang<br />
                  <span className="name-letter-l">L</span>
                  <span className="name-letter-e">e</span>
                  <span className="name-letter-e">e</span>
               </h1>
            </div>

            <div className="phrase-list-container">
               <div className="phrase-growing-container" id="phrase-container" ref={this.phrase_container}>

                  <div className="phrase-container phrase-focus" id="phrase-1">
                     <div className="phrase-layout"> 
                        <p className="phrase-content">Product Designer at Facebook</p>
                        <img className="intro-icon" id="FB-icon" alt="FB icon" src={fb_icon} />
                     </div>
                     <button className="down-btn">
                        <img alt="down-arrow" src={down_icon}></img>
                     </button>
                  </div>

                  <div className="phrase-container phrase-hidden" id="phrase-2">
                     <div className="phrase-layout">
                        <p className="phrase-content">Likes to build dope shit</p>
                        <img className="intro-icon" id="Build-icon" alt="build icon" src={build_icon} />   
                     </div>
                     <button className="down-btn">
                        <img alt="down-arrow" src={down_icon}></img>
                     </button>
                  </div>

                  <div className="phrase-container phrase-hidden" id="phrase-3">
                     <div className="phrase-layout">
                        <p className="phrase-content">Avid Storyteller</p>
                        <img className="intro-icon" id="Story-icon" alt="loudspeaker icon" src={story_icon} />
                     </div>
                     <button className="down-btn">
                        <img alt="down-arrow" src={down_icon}></img>
                     </button>
                  </div>

                  <div className="phrase-container phrase-hidden" id="phrase-4">
                     <div className="phrase-layout">
                        <p className="phrase-content">Advocate for The Inner Child</p>
                        <img className="intro-icon" id="Child-icon" alt="shapes icon" src={child_icon} />
                     </div>
                     <button className="down-btn">
                        <img alt="down-arrow" src={down_icon}></img>
                     </button>
                  </div>

               </div>
            </div>
         </div>
      );
   }

   componentDidMount() {
      this.phrase_container = document.getElementById('phrase-container');
      for (let i = 0; i < 4; i++) {
         this.phrases[i] = document.getElementById(`phrase-${i+1}`);
      };
      this.btns = Object.values(document.getElementsByClassName("down-btn"));
      this.btns.forEach( (el) => el.addEventListener("click", () => this.changeHandler("next")) );

      window.addEventListener('keydown', (event) => {
         if ( event.key === "ArrowRight" || event.key === "ArrowDown" ) {
            this.changeHandler("next");
         } else if ( event.key === "ArrowLeft" || event.key === "ArrowUp" ) {
            this.changeHandler("prev");
         }
      });
   }

   changeHandler(input) {
      if (this.val < 3 && input === "next") {
         // Handle visual phrase changes with css classes
         this.phrases[this.val].classList.remove("phrase-focus");
         this.phrases[this.val].classList.add("phrase-unfocus");
         this.phrases[this.val + 1].classList.remove("phrase-hidden");
         this.phrases[this.val + 1].classList.add("phrase-focus");
         // Handle height change
         this.height += this.phrases[this.val + 1].offsetHeight;
         this.phrase_container.style.height = this.height + 'px';
         this.val++;

      } else if (this.val > 0 && input === "prev") {
         // Handle visual phrase changes with css classes
         this.phrases[this.val].classList.remove("phrase-focus");
         this.phrases[this.val].classList.add("phrase-hidden");
         this.phrases[this.val - 1].classList.remove("phrase-unfocus");
         this.phrases[this.val - 1].classList.add("phrase-focus");
         // Handle height change
         this.height -= this.phrases[this.val].offsetHeight;
         this.phrase_container.style.height = this.height + 'px';
         this.val--;
      }
   }
}

export default IntroPageOld