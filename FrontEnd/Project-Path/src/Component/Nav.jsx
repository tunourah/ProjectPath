import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import NavbarLogo from "../assets/Navbar-logo.png";

function Nav() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  function hide() {
    document.querySelector("nav").style.right = "100%";
  }

  function show() {
    document.querySelector("nav").style.right = "0%";
  }

  return (
    <>
      <img
        className="md:invisible visible absolute left-4 top-4 cursor-pointer"
        src="https://i.ibb.co/172TmgX/menu.png"
        onClick={show}
        alt="Menu"
      />
      <nav
        id="nav"
        className="bg-white sm:w-1/5 sm:shadow-2xl xs:shadow-none xs:w-full xs:absolute z-50 flex flex-col justify-between"
        style={{
          height: "100vh",
          maxHeight: "100%",
          transition: "right 0.3s ease",
        }}
      >
        <img
          className="md:invisible visible absolute left-[85%] top-4 z-1 cursor-pointer"
          src="https://i.ibb.co/d0dgRNS/close.png"
          onClick={hide}
          alt="Close"
        />
        {/* for admin */}
        <ul
          className={
            userData.firstName !== "admin" ? "hidden" : "text-[#6d6d6d]"
          }
        >
          <li className="text-lg md:text-xl xs:text-2xl font-bold flex items-center justify-center text-black p-3 transition duration-200">
            <Link to="/dashboard">
              <img
                src={NavbarLogo}
                className="h-[50px] object-cover rounded-full"
              />
            </Link>
          </li>
          <Link to="/dashboard">
            <li className="p-6 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png"
                alt=""
                className="w-8 mr-3"
              />
              Dashboard
            </li>
          </Link>
          <Link to="/tablestd">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/rZN4dHG/student-1.png"
                alt=""
                className="w-12 mr-3"
              />
              Students
            </li>
          </Link>
          <Link to="/tableproject">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/sF0S9qt/project.png"
                alt=""
                className="w-12 mr-3"
              />
              Projects
            </li>
          </Link>
        </ul>

        {/* for student */}
        <ul
          className={
            userData.firstName !== "admin" ? "text-[#6d6d6d]" : "hidden"
          }
        >
          <li className="text-lg md:text-xl xs:text-2xl font-bold flex items-center justify-center text-black p-3 transition duration-200">
            <Link to="/dashboardstd">
              <img
                src={NavbarLogo}
                className="h-[50px] object-cover rounded-full"
              />
            </Link>
          </li>
          <Link to="/dashboardstd">
            <li className="p-6 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png"
                alt=""
                className="w-8 mr-3"
              />
              Dashboard
            </li>
          </Link>
          <Link to="/ideas">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/RDg2W4h/star.png"
                alt=""
                className="w-12 mr-3"
              />
              All Ideas
            </li>
          </Link>
          <Link to="/tablestate">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/W6s9QWG/state-1.png"
                alt=""
                className="mr-3 w-12"
              />
              My Projects
            </li>
          </Link>
          <Link to="/addideas">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img
                src="https://i.ibb.co/Dz8g0cp/add.png"
                alt=""
                className="w-12 mr-3"
              />
              Add Idea
            </li>
          </Link>
        </ul>
        <div
          className="cursor-pointer"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          <div className="p-3 flex items-center font-bold hover:bg-[#f0f0f0] transition duration-200">
            <img
              src="https://i.ibb.co/mNdC4gK/logout.png"
              alt=""
              className="w-4 mr-3"
            />
            Log Out
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
