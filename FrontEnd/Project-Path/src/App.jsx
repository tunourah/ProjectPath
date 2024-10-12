import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import FooterLogo from "./assets/Footer-logo.png";
import Landing from "./assets/Landing-img.png";
import Features from "./assets/Features-img.png";
import Header from "./Component/Header";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";

function App() {
  return (
    <>
      <Header />

      {/* Hero section */}
      <div className="flex flex-col gap-4 items-center mt-20 px-4 text-center border-b-2 border-[#25DEC5] lg:rounded-bl-[20rem] rounded-bl-[10rem]">
        <h1 className="font-bold md:text-5xl text-3xl">
          Transform Your Project <br className="hidden md:block" /> Ideas into
          Reality with projectPath
        </h1>

        <p className="font-bold md:text-xl text-base">
          Unlock Seamless Collaboration for{" "}
          <span className="text-[#25DEC5]">Ideas and Projects</span>
        </p>

        <div className="md:my-4 md:h-[350px]">
          <img src={Landing} className="object-cover h-auto md:h-full" />
        </div>

        <Link
          smooth
          to="/#about"
          className="font-bold text-base border-2 border-[#25DEC5] px-8 py-2 rounded-full hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center hover:text-[#002933]"
        >
          Get Started
        </Link>

        <div className="w-full h-20 lg:pl-24">
          <div className="bg-[#F76C35] p-3 rounded-full w-fit"></div>
        </div>
      </div>

      {/* About section */}
      <div className="bg-[#F4F5F6] rounded-tr-[200px] rounded-bl-[200px]">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 py-20"
          id="about"
        >
          <div className="md:my-4 md:h-[350px]">
            <img src={Landing} className="object-contain h-auto md:h-full" />
          </div>

          <div className="flex flex-col gap-6 md:w-1/2 md:pl-0 pl-8">
            <h1 className="font-bold text-4xl">Abou us</h1>

            <p className="text-xl">
              Project Path is a website designed to manage student graduation
              projects. It's help streamline the management of student projects,
              facilitating communication and decision-making between students
              and administrators.
            </p>

            <div className="flex md:justify-start justify-center">
              <Link
                smooth
                to="/#features"
                className="font-bold text-base border-2 border-[#0AC6F2] px-8 py-2 rounded-full hover:bg-[#0AC6F2] hover:border-[#0AC6F2] hover:text-[#002933]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 my-8" id="features">
        <div className="flex items-center lg:mb-0 mb-8">
          <img src={Features} className="object-cover md:h-[350px] h-[150px]" />

          <h1 className="font-bold md:text-4xl text-2xl text-center lg:hidden block">
            Streamline Your Project Workflow from Submission to Approval
          </h1>
        </div>

        <h1 className="font-bold md:text-4xl text-2xl text-center md:-translate-y-52 xl:ml-0 ml-16 lg:block hidden">
          Streamline Your Project Workflow <br /> from Submission to Approval
        </h1>

        <div className="flex flex-col items-center">
          <div className="flex md:flex-row flex-col gap-12 justify-between xl:w-3/5">
            <div className="md:w-2/5 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4 border-2 border-[#0AC6F2] p-2 rounded-tr-[200px] rounded-bl-[100px] rounded-tl-[100px] w-9/12">
                <p className="bg-[#0AC6F2] py-2 px-4 rounded-full text-white flex items-center">
                  1
                </p>
                <h1 className="font-semibold text-xl">Student</h1>
              </div>

              <p>
                <span className="font-bold text-base">Submitting Ideas</span> No
                more complicated processes—submit your project ideas in just a
                few clicks.
              </p>

              <p>
                <span className="font-bold text-base">Receiving Feedback</span>{" "}
                Get quick and constructive feedback from teachers, helping you
                improve and grow faster.
              </p>

              <p>
                <span className="font-bold text-base">Tracking Progress</span>{" "}
                Easily monitor the status of your submissions and keep track of
                project milestones.
              </p>
            </div>

            <div className="md:w-2/5 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4 border-2 border-[#25DEC5] p-2 rounded-tr-[200px] rounded-bl-[100px] rounded-tl-[100px] w-9/12">
                <p className="bg-[#25DEC5] py-2 px-4 rounded-full text-white flex items-center">
                  2
                </p>
                <h1 className="font-semibold text-xl">Teacher</h1>
              </div>

              <p>
                <span className="font-bold text-base">
                  Reviewing Submissions
                </span>{" "}
                A simple and organized dashboard lets you review and provide
                feedback on student ideas efficiently.
              </p>

              <p>
                <span className="font-bold text-base">Mentoring Students</span>{" "}
                Focus on guiding students without the hassle of managing
                paperwork. Everything is digital and streamlined.
              </p>

              <p>
                <span className="font-bold text-base">Project Approval</span>{" "}
                Quickly accept or reject projects with detailed feedback, all
                within the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-[#F4F5F6] rounded-tr-[200px] rounded-bl-[200px]">
        <div className="container mx-auto px-4 py-20" id="contact">
          <h1 className="text-center font-bold md:text-4xl text-2xl mb-20">
            Contact us
          </h1>

          <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="bg-white drop-shadow shadow-[#002933] rounded-lg p-4 flex flex-col gap-4">
              <a
                href="https://github.com/tunourah"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="text-xl text-[#002933]">
                  <VscGithub />
                </div>

                <p>tunourah</p>
              </a>
            </div>

            <div className="bg-white drop-shadow shadow-[#002933] rounded-lg p-4 flex flex-col gap-4">
              <a target="_blank" className="flex items-center gap-4">
                <div className="text-xl text-[#0AC6F2]">
                  <BiLogoGmail />
                </div>

                <p>Mada Alwathnaani</p>
              </a>
            </div>

            <div className="bg-white drop-shadow shadow-[#002933] rounded-lg p-4 flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/ahmed-alharbi-7a8436304/"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="text-xl text-[#25DEC5]">
                  <FaLinkedinIn />
                </div>

                <p>Ahmed Alharbi</p>
              </a>
            </div>

            <div className="bg-white drop-shadow shadow-[#002933] rounded-lg p-4 flex flex-col gap-4">
              <a
                href="www.linkedin.com/in/yousef-mohammed-b01685249"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="text-xl text-[#27969A]">
                  <FaLinkedinIn />
                </div>

                <p>Yousef Mohammed</p>
              </a>

              <a
                href="mailto:yousefmalsaadan@gmail.com"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="text-xl text-[#27969A]">
                  <BiLogoGmail />
                </div>

                <p>yousefmalsaadan@gmail.com</p>
              </a>

              <a
                href="https://github.com/Yousef-Alsaadan"
                target="_blank"
                className="flex items-center gap-4"
              >
                <div className="text-xl text-[#27969A]">
                  <VscGithub />
                </div>

                <p>Yousef-Alsaadan</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between container mx-auto lg:px-20 px-8 pb-4 pt-2 bg-[#002933] text-[#C6CFDC] font-light rounded-t-full">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <img
              src={FooterLogo}
              className="h-[40px] object-cover rounded-full"
            />
          </Link>

          <p>ProjectPath ©2024</p>
        </div>

        <div className="flex gap-4">
          <Link
            smooth
            to="/#about"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            About Us
          </Link>
          <Link
            smooth
            to="/#features"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            Features
          </Link>
          <Link
            smooth
            to="/#contact"
            className="hover:underline hover:decoration-[#25DEC5] decoration-2 underline-offset-8"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
