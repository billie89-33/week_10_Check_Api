import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkstyle = ({ isActive }) =>
    `text-lg font-bold trasiton-all duration-300 px-4 py-2 rounded-lg ${
        isActive
         ? "text-slate-900 bg-slate-100 shadow-sm"
         : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                                                               
    }`;

  return (
    <nav className="flex justify-items-end items-center gap-4 px-10 py-5">
    <NavLink to="/" className={linkstyle}>
    Home
    </NavLink>

    <NavLink to="/Owner" className={linkstyle}>
    Owner
    </NavLink>
    
    </nav>
  );
};


export default Navbar;
