import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const PlansCard = ({ title, price }) => {
  return (
    <div className="flex flex-col bg-[#222] lg:w-[450px] p-5 rounded-lg">
      <div className="flex items-center justify-center gap-3">
        <span>
          <FontAwesomeIcon icon={faDumbbell} size="2xl" />
        </span>
        <h2 className="font-semibold text-center text-3xl py-2">{title}</h2>
        <span>
          <FontAwesomeIcon icon={faDumbbell} size="2xl" />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span>
          <MdOutlineAttachMoney size={28} />
        </span>
        <h3 className="font-semibold text-2xl inline-block">{price}</h3>
      </div>
      <div className="flex flex-col items-center mt-5 gap-10">
        <div className="flex items-center">
          <span className="mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            voluptates!
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
          </span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis enim magnam rerum, eius fugiat!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button title={"Buy Plan"} to={"#"} />
      </div>
    </div>
  );
};

export default PlansCard;
