import { Link } from "react-scroll";
import { links } from "../utils/navbarData";

const MobileNavbar = ({ menu, handleClick }) => {
  return (
    <div
      className={`${
        menu ? "translate-x-0" : "translate-x-full"
      } z-50 md:hidden flex flex-col gap-5 absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center py-4 w-full h-fit transition-transform duration-300`}
    >
      {links?.map((link) => (
        <Link
          key={crypto.randomUUID()}
          className="cursor-pointer hover:text-brightRed transition-all"
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          onClick={handleClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavbar;
