// import React, { useEffect, useLayoutEffect, createRef } from 'react';
// import { motion } from 'framer-motion';
// // import { NavLink } from 'react-router-dom';

// import BackButton from '../Elements/BackButton';
// import ScrollToTop from './ScrollToTop';

// export default function AppliedProjectContent(props) {

//   return (
//     <div>
//       <div className="project-section project-context">
//           <div className="project-section-content">
//             <h2 className="section-header" style={{color:props.theme}}>Context</h2>
//             {props.content.sections[0].Context.Content.map((item, index) => <p key={index} className="section-copy">{item}</p>)}
//           </div>
//       </div>

//       <div className="project-section project-gallery">
//           {/* <ProjectGallery content={content}/> */}
//       </div>
//     </div>
//   );
// }