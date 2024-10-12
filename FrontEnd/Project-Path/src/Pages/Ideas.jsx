import { useState } from "react";
import Header from "../Component/Header";
import Nav from "../Component/Nav";

const Card = ({ title, date, description }) => (
  <div className="card border rounded-xl shadow-md p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="divider"></div>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="mt-4 flex items-center text-red-500">
      <span className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#E05959">
          <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Zm320-80Zm0-640Z" />
        </svg>
      </span>
      <span className="text-sm font-medium">{date}</span>
    </div>
  </div>
);

function Ideas() {
  const cardsData = [
    {
      title: "Adoddle",
      date: "05 April 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi.",
    },
    {
      title: "Adoddle",
      date: "05 April 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi.",
    },
    {
      title: "Adoddle",
      date: "05 April 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi.",
    },
    {
      title: "Adoddle",
      date: "05 April 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi.",
    },
    { title: "Additional Card", date: "06 April 2023", description: "lorem" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const currentCards = cardsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const hasNextPage = (currentPage + 1) * itemsPerPage < cardsData.length;
  const hasPreviousPage = currentPage > 0;

  const handleNextPage = () => {
    if (hasNextPage) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (hasPreviousPage) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
       <Header />
   
    <div className="flex h-screen">
      {/* Navigation (Left) */}
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />
  
      {/* Content (Right) */}
      <div className="flex-1 container mx-auto p-6">
        <div className="text-start">
          <div className="text-4xl font-bold mt-2 flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#0AC6F2"
              >
                <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
              </svg>
            </span>
            <span>Idea</span>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
          {currentCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              date={card.date}
              description={card.description}
            />
          ))}
        </div>
  
        <div className="join w-32">
          <button
            onClick={handlePreviousPage}
            disabled={!hasPreviousPage}
            className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60"
          >
            Previous page
          </button>
          <button
            onClick={handleNextPage}
            disabled={!hasNextPage}
            className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default Ideas;
