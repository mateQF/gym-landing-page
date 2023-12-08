import { Link } from "react-scroll";

const Button = ({ title, to }) => {
  return (
    <div>
      <Link to={to} spy smooth duration={500} className="cursor-pointer relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-1/2 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-2/4 bg-brightRed opacity-100 group-hover:-translate-x-8"></span>
        <span className="text-xl relative w-full text-left text-white transition-colors duration-200 ease-in-out">
          {title}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </Link>
    </div>
  );
};

export default Button;
