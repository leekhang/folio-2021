import React, {useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';

import fb_icon from '../assets/images/FB.png'
import build_icon from '../assets/images/Build.png'
import story_icon from '../assets/images/Story.png'
import child_icon from '../assets/images/Child.png'
import down_icon from '../assets/images/DownArrow.png'

function IntroPage(props) {
   let val = 0
   const phrases = [];
   const phrase_container = useRef();

   useEffect(() => {
      for (let i = 0; i < 4; i++) {
         phrases[i] = document.getElementById(`phrase-${i+1}`);
      };
      window.addEventListener('keydown', (event) => {
         if ( event.key === "ArrowRight" || event.key === "ArrowDown" ) {
            changeHandler("next");
         } else if ( event.key === "ArrowLeft" || event.key === "ArrowUp" ) {
            changeHandler("prev");
         }
      });

   }); 

   function changeHandler(input) {
      // if (val === 3) {
      //    // redirect to work page
      // }

      if (val < 3 && input === "next") {
         // Handle visual phrase changes with css classes
         phrases[val].classList.remove("phrase-focus");
         phrases[val].classList.add("phrase-unfocus");
         phrases[val+1].classList.remove("phrase-hidden");
         phrases[val+1].classList.add("phrase-focus");
         // Handle height change
         const new_height = phrase_container.current.offsetHeight +  phrases[val+1].offsetHeight;
         phrase_container.current.style.height = new_height + 'px';
         val++;

      } else if (val > 0 && input === "prev") {
         // Handle visual phrase changes with css classes
         phrases[val].classList.remove("phrase-focus");
         phrases[val].classList.add("phrase-hidden");
         phrases[val-1].classList.remove("phrase-unfocus");
         phrases[val-1].classList.add("phrase-focus");
         // Handle height change
         const new_height = phrase_container.current.offsetHeight - phrases[val].offsetHeight;
         phrase_container.current.style.height = new_height + 'px';
         val--;
      }
   }

   return (
      <div className="app intro-app">
         <div className="name-container">
            <h1>Khang
               <br />
               <span className="name-letter-l">L</span>
               <span className="name-letter-e">e</span>
               <span className="name-letter-e">e</span>
            </h1>
         </div>

         <div className="phrase-list-container">
            <div className="phrase-growing-container" id="phrase-container" ref={phrase_container}>

               <Phrase 
                  content = "Product Designer at Facebook"
                  imgId = "FB-icon"
                  imgSrc = {fb_icon}
                  order = {1}
                  func = {changeHandler}
               />

               <Phrase 
                  content = "Likes to build dope shit"
                  imgId = "Build-icon"
                  imgSrc = {build_icon}
                  order = {2}
                  func = {changeHandler}
               />

               <Phrase 
                  content = "Avid storyteller"
                  imgId = "Story-icon"
                  imgSrc = {story_icon}
                  order = {3}
                  func = {changeHandler}
               />

               <Phrase 
                  content = "Advocate for the Inner Child"
                  imgId = "Child-icon"
                  imgSrc = {child_icon}
                  order = {4}
                  func = {changeHandler}
               />

            </div>
         </div>
      </div>
   );
}

function Phrase(props) {

   const button = props.order === 4 ? (
      <NavLink to="/work">
         <button className="down-btn">
            <img alt="down-arrow" src={down_icon}></img>
         </button>
      </NavLink>
   ) : (
      <button className="down-btn" onClick={() => props.func("next")}>
         <img alt="down-arrow" src={down_icon}></img>
      </button>
   );

   return (
      <div className={"phrase-container " + (props.order === 1 ? "phrase-focus" : "phrase-hidden")} id={`phrase-${props.order}`}>
         <div className="phrase-layout">
            <p className="phrase-content">{props.content}</p>
            <img className="intro-icon" id={props.imgId} alt="shapes icon" src={props.imgSrc} />
         </div>
         {button}
      </div>
   );
}

export default IntroPage;