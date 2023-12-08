import { Link } from "react-scroll";
import { links } from "../utils/navbarData";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center p-2 gap-9">
      {links?.map((link) => (
        <Link
          key={crypto.randomUUID()}
          className="cursor-pointer hover:text-brightRed transition-all text-xl"
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
