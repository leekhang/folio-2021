import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useWillChange } from 'framer-motion';

import fb_icon from '../../assets/images/Meta.png'
import build_icon from '../../assets/images/Build.png'
import story_icon from '../../assets/images/Story.png'
import child_icon from '../../assets/images/Child.png'
import down_icon from '../../assets/images/DownArrow.png'

function IntroPage(props) {
   let val = 0
   const numberOfPhrases = 4;
   let phrases = [];
   const phrase_container = useRef();
   const willChange = useWillChange();

   useEffect(() => {
      for (let i = 0; i < numberOfPhrases; i++) {
         phrases[i] = document.getElementById(`phrase-${i+1}`);
      }
   },[]);
   

   function phraseChangeHandler(input) {
   
      if (val < 3 && input === "next") {
         // Handle visual phrase changes with css classes
         phrases[val].classList.remove("phrase-focus");
         phrases[val].classList.add("phrase-unfocus");
         phrases[val+1].classList.remove("phrase-hidden");
         phrases[val+1].classList.add("phrase-focus");
         // Handle height change
         // console.log("current container height: " + phrase_container.current.offsetHeight);
         const new_height = phrase_container.current.offsetHeight +  phrases[val+1].offsetHeight;
         // console.log("new container height: " + new_height)
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
      <motion.div 
         className="app intro-app"
         style={{ willChange }}
         initial={{ opacity:0, scale:1 }}
         animate={{ opacity:1, scale:1 }}
         exit={{ opacity:0, scale:0.97 }}
         transition={{ duration:0.75 }}
      >
         <motion.div 
            className="name-container"
            initial={{ y:200, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ duration:2, ease:[0.25, 1, 0.5, 1], delay:1 }}
         >
            <h1>Khang
               <br />
               <span className="name-letter-l">L</span>
               <motion.span
                  animate={{ x:[0,0,0,0,0,2,0,0,0,0,0], rotate:[-32,-32,-32,-32,-32,-24,-32,-32,-32,-32,-32] }}
                  transition={{ duration:5, repeat:Infinity, repeatType:"reverse"}}
                  className="name-letter-e"
               >
                  e
               </motion.span>
               <motion.span
                  animate={{ x:[0,0,0,0,0,2,0,0,0,0,0], rotate:[-32,-32,-32,-32,-32,-24,-32,-32,-32,-32,-32] }}
                  transition={{ duration:5, repeat:Infinity, repeatType:"reverse", delay:0.1 }}
                  className="name-letter-e"
               >
                  e
               </motion.span>
            </h1>
         </motion.div>

         <motion.div 
            initial={{ y:-200, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ duration:2, ease:[0.25, 1, 0.5, 1], delay:2.5 }}
            className="phrase-list-container"
         >
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
         </motion.div>
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