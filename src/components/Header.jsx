import { Link } from "react-scroll";
import Navbar from "./Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("transparent");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setHeaderBackground("#222");
    } else {
      setHeaderBackground("transparent");
    }
  }, [scrollPosition]);

  return (
    <div>
      <div
        className="fixed md:px-32 px-5 py-3 gap-16 z-50 w-full transition-all duration-300"
        style={{ backgroundColor: headerBackground }}
      >
        <div className="flex items-center p-2 justify-between md:justify-start gap-5">
          <Link to="#home" spy smooth duration={500}>
            <h1 className="font-semibold text-2xl text-brightRed cursor-pointer">
              FitZone
            </h1>
          </Link>
          <Navbar />
          <div className="md:hidden flex items-center" onClick={handleClick}>
            <AiOutlineMenu className="cursor-pointer" size={28} />
          </div>
          <MobileNavbar menu={menu} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
