import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${img})`, opacity: "0.5" }}
      ></div>
      <div className="flex justify-center flex-col items-center z-10 px-10 w-full text-start my-14">
        <h1 className="text-6xl font-semibold text-center">
          About Us
        </h1>
        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p className="text-lg md:text-xl">
            Welcome to FitZone, where fitness isn&apos;t just a goal, it&apos;s
            a lifestyle. We&apos;re more than a gym; we&apos;re a vibrant
            community dedicated to helping you realize your fitness potential.
          </p>
          <p className="text-lg md:text-xl">
            At FitZone, our story revolves around a simple yet powerful idea: to
            create an environment where fitness enthusiasts, beginners, and
            experts alike can thrive. Our commitment lies in empowering our
            members to lead healthier lives through cutting-edge facilities,
            customized training programs, and unwavering support. What truly
            defines us is our team of passionate trainers. They&apos;re not just
            instructors; they&apos;re mentors here to inspire and guide you
            throughout your fitness journey, regardless of your starting point.
          </p>
          <p className="text-lg md:text-xl">
            Our ethos revolves around inclusivity and support. From dynamic
            group sessions to personalized workouts, we offer a diverse range of
            fitness programs tailored to your preferences and goals. But fitness
            isn&apos;t just about physical strength. At FitZone, we prioritize
            holistic well-being. Our gym is a sanctuary where you can unwind,
            focus on self-care, and connect with a community that shares your
            passion for living well. Join us at FitZone and be part of our
            fitness family. Together, let&apos;s embark on a transformative
            journey to a healthier, fitter, and more vibrant version of
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
