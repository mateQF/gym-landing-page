import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-[#222] pt-5">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:px-32 px-5 py-5">
        <div>
          <Link to="#home" spy smooth duration={500}>
            <h1 className="cursor-pointer w-fit font-semibold text-3xl text-brightRed">
              FitZone
            </h1>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-xl">Address</h1>
          <p>89925 Aubree Square Mumbai 12721</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-xl">Contact</h1>
          <div>
            <div className="flex items-center gap-2 pb-2">
              <AiTwotonePhone size={20} />
              <p>+91-777-24-12</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineMail size={20} />
              <p>FitZone@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-start px-5 md:px-0 md:text-center py-4">
          @Copyright developed by
          <span className=" text-brightRed"> Mateo Fortuna</span> | All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
