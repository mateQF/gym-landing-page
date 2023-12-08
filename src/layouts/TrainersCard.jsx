import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const TrainersCard = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center gap-5 pb-8 w-[350px] rounded-xl">
      <div className="w-full">
        <img className="trainer-img" src={img} alt="img" />
      </div>
      <div>
        <h1 className="text-4xl font-semibold pb-2 text-center">
          {name}
        </h1>
        <div className="flex flex-row justify-center pt-6 gap-10">
          <BsInstagram
            size={32}
            className=" hover:text-[#e53961] cursor-pointer"
          />
          <BsFacebook
            size={32}
            className=" hover:text-[#4267B2] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;
