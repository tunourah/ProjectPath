// import "../App.css";
import { Link } from "react-router-dom";
function Nav() {
  function hide(){
   document.querySelector("nav").style.right="100%"
  }
  function show(){
    document.querySelector("nav").style.right="0%"
   }
  return <>
   <img className="md:invisible visible absolute left-4 top-4 " src="https://i.ibb.co/172TmgX/menu.png" onClick={show} />
  <nav id="nav" className="bg-[white] sm:w-1/5 sm:shadow-2xl xs:shadow-0 xs:w-5/5 xs:absolute z-1 flex flex-col justify-between" style={{height:"100vh",maxHeight:"100%"}} >
  <img className="md:invisible visible absolute left-[85%] top-4 z-1" src="https://i.ibb.co/d0dgRNS/close.png" onClick={hide}/>
 
<ul className="text-[#6d6d6d] " >
<li  className="text-lg md:text-xl xs:text-2xl font-bold flex items-center justify-center text-[black]" >project<span className="text-[#26dec6]">path </span><img className="w-1/5 max-w-12 pl-1" src="https://i.ibb.co/FX9QzQ8/logo-g.png" alt="" srcset="" /></li>
<Link to="/dashboard"> <li className=" p-3 flex items-center"> <img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" srcset="" className="w-3 mr-3"/> Dashboard</li></Link>
<Link to="">  <li className="p-3 flex items-center"><img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" srcset="" className="w-3 mr-3"/> Students</li></Link>
<Link to=""><li className="p-3 flex items-center"><img src="https://i.ibb.co/W073rqm/four-squares-button-of-view-options.png" alt="" srcset="" className="w-3 mr-3"/> Projects</li></Link>
</ul>
<Link to="/"><div  className="p-3 flex items-center font-bold"><img src="https://i.ibb.co/mNdC4gK/logout.png" alt="" srcset="" className="w-4 mr-3"/>Log Out</div></Link>
  </nav>
  </>
}

export default Nav;