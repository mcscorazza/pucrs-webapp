import { Link } from "react-router-dom";

const MenuLink = (props) => {

  if (props.isActive) {
    return (
      <li className="my-2 py-1 pl-6 border-r-4 border-orange-800 bg-orange-800 text-white font-semibold border-b">
        <Link to={props.to}>{props.title}</Link>
      </li>
    );
  } else {
    return (
      <li className="my-2 py-1 pl-6 border-r-4 border-transparent hover:text-slate-400 hover:border-orange-800 text-slate-400 font-light border-b">
        <Link to={props.to}>{props.title}</Link>
      </li>
      
    );
  }
};

export default MenuLink;
