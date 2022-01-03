import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Tooltip(props) {
   return(
      <motion.div className="tooltip" 
         initial={{ opacity: 0 }}
         animate={{ opacity: props.status }}
         transition={{ duration: 0.2 }}
      >
         <div className="tooltip-label" id={`${props.id}-label`}>{props.copy}</div>
         <div className="tooltip-arrow triangle"></div>
      </motion.div>
   );
}

export default Tooltip;


