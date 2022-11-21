import { NavLink } from 'react-router-dom';
import BackArrow from '../../assets/images/arrow-back.svg';

export default function BackButton(props) {
    return (
       <NavLink className="nav-btn back-btn" id={props.id} scroll="false" exact to="/work">
          <img className="back-arrow" src={BackArrow}/>
          <span className="back-btn-content">{props.text}</span>
       </NavLink>
    );
 }
 