import { Link } from "react-router-dom";

export default function StudentCard({ descrptn, img, link, title }) {
  return (
    <>
      <Link to={link}>
        <div className="w-[330px] h-[180px] rounded-md border-solid border-2 border-[#26dec6] pr-5 flex justify-center items-center flex-col ">
          <p className="border-l-4  border-black w-4/5 pl-3 flex flex-col leading-[-1] justify-end font-semibold">
            {descrptn}
          </p>
          <div className="flex items-center justify-left mt-5">
            <img
              src={img}
              alt=""
              srcset=""
              className="w-[61px] relative left-[35px] z-10"
            />
            <h2 className="  text-[24px] font-semibold bg-[#dff1f1] w-[300px] p-3 pl-[40px] rounded-full text-center relative right-[26px]">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
