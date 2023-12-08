import Button from "../layouts/Button";
import img from "../assets/img/contactImg.jpg"

const Contact = () => {
  return (
    <div className="min-h-screen flex w-full flex-col items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      ></div>
      <div className="flex flex-col md:flex-row justify-center w-full items-center z-10">
        <form className="w-fit md:w-2/5 space-y-10">
          <h1 className="text-6xl font-semibold text-center">Contact Us</h1>
          <div className=" flex flex-col gap-2">
            <label htmlFor="userName" className="text-xl">Your Name</label>
            <input
              className="text-xl py-3 px-2 rounded-lg hover:shadow-md transition-all outline-none text-black"
              type="text"
              name="userName"
              id="userName"
              placeholder="John Doe"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="userEmail" className="text-xl">Your Email</label>
            <input
              className="text-xl py-3 px-2 rounded-lg hover:shadow-md transition-all outline-none text-black"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="johndoe@mail.com"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="userNumber" className="text-xl">Your Number</label>
            <input
              className="text-xl py-3 px-2 rounded-lg hover:shadow-md transition-all outline-none text-black"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Your mobile number"
            />
          </div>

          <div className=" flex flex-row justify-center">
            <Button title="Send Message" to={"#"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
