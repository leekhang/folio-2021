import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectGallery(props) {
   const theme = props.theme;
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
      console.log("scroll width: " + carousel.current.scrollWidth);
      console.log("offset width: " + carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth);
   });

   return (
      <div className="project-section-content">
         <h2 className="section-header gallery-header" style={{ color: theme }}>Highlights</h2>
         <motion.div className="gallery-carousel-wrapper" ref={carousel} whileTap={{cursor: "grabbing"}}>
            <motion.div className="gallery-carousel"  
               drag="x" 
               dragConstraints={{ right: 0, left: -width }}
            >
               {/* <motion.div> */}
                  <img className="gallery-col gallery-img gallery-img-uno" src={require("../../assets/images/Strange0.png")} />
               {/* </motion.div> */}
               
               <div className="gallery-col">
                  <img className="gallery-img gallery-img-duo" src={require("../../assets/images/Strange1.png")} />
                  <img className="gallery-img gallery-img-duo" src={require("../../assets/images/Strange2.png")} />
               </div>

               {/* <motion.div> */}
                  <img className="gallery-col gallery-img gallery-img-uno" src={require("../../assets/images/Strange1.png")} />
               {/* </motion.div> */}

               {/* <motion.div> */}
                  <img className="gallery-col gallery-img gallery-img-uno" src={require("../../assets/images/Strange3.png")} />
               {/* </motion.div> */}
               
            </motion.div>
         </motion.div>
         <p className="section-copy gallery-footer">Shoot me a message for project details.</p>
      </div>
   );
}

/*
  function transformScroll(event) {
     if (!event.deltaY) return;
     console.log(event.deltaY);
     console.log(event.currentTarget.scrollLeft);
     if (event.currentTarget.scrollLeft >= 0 && event.deltaY > 0) { // if position is at zero
        event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        event.preventDefault();
     } else if (event.currentTarget.scrollLeft <= 993 && event.deltaY < 0) {
        event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        event.preventDefault();
     }
  }

  useEffect(() => {
     let element = document.getElementsByClassName("gallery-carousel")[0];
     console.log(element.offsetWidth);
     element.addEventListener('wheel', transformScroll);
  },[]);
  */