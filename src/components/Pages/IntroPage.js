import React, {useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import fb_icon from '../../assets/images/Meta.png'
import build_icon from '../../assets/images/Build.png'
import story_icon from '../../assets/images/Story.png'
import child_icon from '../../assets/images/Child.png'
import down_icon from '../../assets/images/DownArrow.png'

function IntroPage(props) {
   let val = 0
   const phrases = [];
   const phrase_container = useRef();

   useEffect(() => {
      for (let i = 0; i < 4; i++) phrases[i] = document.getElementById(`phrase-${i+1}`);
      window.addEventListener('keydown', (event) => {
         if ( event.key === "ArrowRight" || event.key === "ArrowDown" ) {
            phraseChangeHandler("next");
         } else if ( event.key === "ArrowLeft" || event.key === "ArrowUp" ) {
            phraseChangeHandler("prev");
         }
      });
   }); 

   function phraseChangeHandler(input) {
   
      if (val < 3 && input === "next") {
         // Handle visual phrase changes with css classes
         phrases[val].classList.remove("phrase-focus");
         phrases[val].classList.add("phrase-unfocus");
         phrases[val+1].classList.remove("phrase-hidden");
         phrases[val+1].classList.add("phrase-focus");
         // Handle height change
         console.log("current container height: " + phrase_container.current.offsetHeight);
         const new_height = phrase_container.current.offsetHeight +  phrases[val+1].offsetHeight;
         console.log("new container height: " + new_height)
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
      <motion.div className="app intro-app"
      initial={{scale:1.1, opacity:0}}
      animate={{scale:1, opacity:1}}
      exit={{scale:0.95, opacity:0}}
      transition={{ duration: 0.75 }}>
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
                  order = {1}
                  content = "Product Designer at Meta Inc."
                  imgId = "FB-icon" imgSrc = {fb_icon}
                  func = {phraseChangeHandler}
               />

               <Phrase 
                  order = {2}
                  content = "Likes to build dope shit"
                  imgId = "Build-icon" imgSrc = {build_icon}
                  func = {phraseChangeHandler}
               />

               <Phrase 
                  order = {3} 
                  content = "Avid storyteller"
                  imgId = "Story-icon" imgSrc = {story_icon}
                  func = {phraseChangeHandler}
               />

               <Phrase 
                  order = {4}
                  content = "Advocate for the Inner Child"
                  imgId = "Child-icon" imgSrc = {child_icon}
                  func = {phraseChangeHandler}
               />

            </div>
         </div>
      </motion.div>
   );
}

function Phrase(props) {

   const button = (props.order === 4) ? 
   (
      <NavLink className="to-work-link" to="/work">
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
            <p className="phrase-content select-disabled">{props.content}</p>
            <img className="intro-icon select-disabled" id={props.imgId} alt="shapes icon" src={props.imgSrc} />
         </div>
         {button}
      </div>
   );
}

export default IntroPage;