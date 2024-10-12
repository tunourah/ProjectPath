import { Link } from "react-router-dom";

function Card({ title, imgSrc, link }) {
  return (
    <Link to={link}>
      <div className="w-[330px] h-[180px] rounded-md border-solid border-2 border-[#26dec6] pr-5 flex items-center justify-center">
        <img src={imgSrc} alt={title} className='w-1/5 pb-12' />
        <h2 className='font-bold text-4xl'>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
