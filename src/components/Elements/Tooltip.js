import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Tooltip(props) {
   
   let hidden = (props.status === 0) ? "hidden" : "";
   // let hidden = ''; // for debugging

   return (
      <motion.div className={`tooltip ${hidden}`} 
         initial={{ opacity: 0 }}
         animate={{ opacity: props.status }}
         // animate={{ opacity: 1 }} // for debugging
         transition={{ duration: 0.1 }}
      >
         <div className="tooltip-label" id={`${props.id}-label`}>{props.copy}</div>
         <div className="tooltip-arrow triangle"></div>
      </motion.div>
   );
}


