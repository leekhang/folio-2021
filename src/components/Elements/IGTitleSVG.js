import { motion } from 'framer-motion';

// When paths is empty (before Figma export is pasted in), renders a text fallback.
// Once paths are provided, animates each path stroke sequentially.
function IGTitleSVG({ paths, zigzagPath, viewBox, color = "#DC00C5" }) {
   if (!paths || paths.length === 0) {
      return <div className="ig-title-placeholder">Instagram Boost</div>;
   }

   return (
      <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" aria-label="Instagram Boost">
         {paths.map((d, i) => (
            <motion.path
               key={i}
               d={d}
               fill="none"
               stroke={color}
               strokeWidth={2}
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 0.4, delay: i * 0.08, ease: "easeInOut" }}
            />
         ))}
         {zigzagPath && (
            <motion.path
               d={zigzagPath}
               fill="none"
               stroke={color}
               strokeWidth={2}
               strokeLinecap="round"
               strokeLinejoin="round"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{
                  duration: 0.3,
                  delay: paths.length * 0.08 + 0.1,
                  ease: "easeOut"
               }}
            />
         )}
      </svg>
   );
}

export default IGTitleSVG;
