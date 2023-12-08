import TrainersCard from "../layouts/TrainersCard";
import img from "../assets/img/dumbbell.jpg";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";

const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      ></div>
      <div className="z-10 w-full">
        <h1 className="text-6xl font-semibold text-center mt-10">
          Our Trainers
        </h1>
        <div className="flex flex-wrap justify-around items-center gap-24 mt-12">
          <TrainersCard img={img1} name="Anatoly" />
          <TrainersCard img={img2} name="Victor" />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
