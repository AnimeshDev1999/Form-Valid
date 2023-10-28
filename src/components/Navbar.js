import icon from "../images/logo.png";
import menu from "../images/menu.svg";

const Navbar = () => {
  return (
    <div className="py-4 px-5 flex justify-between items-center">
      <img src={icon} alt="" className="h-16" />
      <img src={menu} alt="" className="h-8" />
    </div>
  );
};

export default Navbar;
