import "../App.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Nav() {
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
        style={{ height: "100vh", maxHeight: "100%", transition: "right 0.3s ease" }}
      >
        <img 
          className="md:invisible visible absolute left-[85%] top-4 z-1 cursor-pointer" 
          src="https://i.ibb.co/d0dgRNS/close.png" 
          onClick={hide} 
          alt="Close"
        />
        <ul className="text-[#6d6d6d]">
          <li className="text-lg md:text-xl xs:text-2xl font-bold flex items-center justify-center text-black p-3 hover:bg-[#f0f0f0] transition duration-200">
            project<span className="text-[#26dec6] mr-2">path </span>
            <img 
              className="w-10 h-10 pl-1" 
              src={Logo} 
              
              alt="LOGO" 
            />
          </li>
          <Link to="/dashboard">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" className="w-3 mr-3" /> 
              Dashboard
            </li>
          </Link>
          <Link to="/tablestd">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" className="w-3 mr-3" /> 
              Students
            </li>
          </Link>
          <Link to="/tableproject">
            <li className="p-3 flex items-center hover:bg-[#f0f0f0] transition duration-200">
              <img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" className="w-3 mr-3" /> 
              Projects
            </li>
          </Link>
        </ul>
        <Link to="/">
          <div className="p-3 flex items-center font-bold hover:bg-[#f0f0f0] transition duration-200">
            <img src="https://i.ibb.co/mNdC4gK/logout.png" alt="" className="w-4 mr-3" /> 
            Log Out
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Nav;
