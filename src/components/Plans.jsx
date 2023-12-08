import PlansCard from "../layouts/PlansCard";
import img from "../assets/img/membership.jpg";
const Plans = () => {
  return (
    <div className="min-h-screen gap-5 flex flex-col justify-center items-center md:px-32 px-5 w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      ></div>
      <div className="z-10 my-14">
        <h1 className="text-6xl font-semibold text-center">Gym Membership</h1>
        <div className="flex justify-center mt-10 gap-5 flex-wrap w-full">
          <PlansCard title={"Trail Plan"} price={"0"} />
          <PlansCard title={"Plus Plan"} price={"3000"} />
          <PlansCard title={"ProMax Plan"} price={"5000"} />
        </div>
      </div>
    </div>
  );
};

export default Plans;
