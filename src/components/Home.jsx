import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg"

const Home = () => {
  return (
    <div className="min-h-screen flex justify-between md:px-32 px-5 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="flex flex-col justify-center z-30">
        <h1 className="text-8xl font-semibold md:text-start text-center md:w-2/3">
          Your body, your rules.
        </h1>
        <div className="w-full md:w-2/4 mt-10 flex justify-center">
          <Button title={"Checkout our plans"} to={"#plans"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
