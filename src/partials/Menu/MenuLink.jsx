import { Link } from "react-router-dom";

const MenuLink = (props) => {
  if (props.status == true) {
    return (
      <li className="py-2 pl-6 border-r-4 border-orange-800 text-orange-800 bg-white font-semibold">
        <Link to={props.to}>{props.title}</Link>
      </li>
    );
  } else {
    return (
      <li className="py-2 pl-6 border-r-4 border-slate-200 hover:text-slate-400 hover:border-orange-800 text-slate-400 font-light">
        <Link to={props.to}>{props.title}</Link>
      </li>
    );
  }
};

export default MenuLink;
