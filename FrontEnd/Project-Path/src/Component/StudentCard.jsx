import { Link } from "react-router-dom";

export default function StudentCard(props) {
  return <>
  
  <div className="w-[330px] h-[180px] rounded-md border-solid border-2 border-[#26dec6] pr-5 flex justify-center items-center flex-col ">
      <p className="border-l-4 border-black w-4/5 pl-3 flex flex-col leading-[-1] justify-end font-semibold">
       {props.descrptn}
      </p>
      <div className="flex items-center justify-left mt-5">
      <img src={props.img} alt="" srcset="" className='w-1/5 relative left-[35px] z-10'/>
      <h2 className='  text-[24px] font-semibold bg-[#dff1f1] w-5/6 p-3  rounded-full text-center relative right-[26px]'>{props.title}</h2>
      </div>
   
    </div>
  </>
}