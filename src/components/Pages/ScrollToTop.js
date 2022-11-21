import { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   // [pathname]
//   return null;
// }

export default function ScrollToTop() {
//   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
//   // [pathname]
  return null;
}

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return (null);
// }

// export default withRouter(ScrollToTop);