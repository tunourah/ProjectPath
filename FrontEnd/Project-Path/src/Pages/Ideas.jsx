<<<<<<< HEAD
import { useState } from "react";

=======
>>>>>>> mada
const Card = ({ title, date, description }) => (
  <div className="card border rounded-xl shadow-md p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="divider"></div>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="mt-4 flex items-center text-red-500">
      <span className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E05959">
<<<<<<< HEAD
          <path d="..."/>
=======
          <path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Zm320-80Zm0-640Z"/>
>>>>>>> mada
        </svg>
      </span>
      <span className="text-sm font-medium">{date}</span>
    </div>
  </div>
);

function Ideas() {
  const cardsData = [
<<<<<<< HEAD
    { title: "Adoddle 1", date: "05 April 2023", description: "Description 1" },
    { title: "Adoddle 2", date: "06 April 2023", description: "Description 2" },
    { title: "Adoddle 3", date: "07 April 2023", description: "Description 3" },
    { title: "Adoddle 4", date: "08 April 2023", description: "Description 4" },
    { title: "Adoddle 5", date: "09 April 2023", description: "Description 5" },
    { title: "Adoddle 6", date: "10 April 2023", description: "Description 6" },
    { title: "Adoddle 7", date: "10 April 2023", description: "Description 7" },
    { title: "Adoddle 8", date: "10 April 2023", description: "Description 8" },
    { title: "Adoddle 9", date: "10 April 2023", description: "Description 9" },

  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  const startIndex = currentPage * cardsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * cardsPerPage < cardsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-start">
        <div className="text-4xl font-bold mt-2 flex">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0AC6F2">
              <path d="..."/>
            </svg>
          </span>
          <span>Idea</span>
        </div>
      </div>

      {/* Card Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
        {currentCards.map((card, index) => (
=======
    { title: "Adoddle", date: "05 April 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi." },
    { title: "Adoddle", date: "05 April 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi." },
    { title: "Adoddle", date: "05 April 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi." },
    { title: "Adoddle", date: "05 April 2023", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae odio ea veniam quas debitis quis tenetur reiciendis laboriosam, sapiente aspernatur fuga corrupti delectus, culpa ipsam voluptatibus veritatis incidunt sequi." },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-start">
        {/* <h1 className="text-2xl font-bold">user name</h1>  */}
        <div className="text-4xl font-bold mt-2 flex">
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0AC6F2"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg>
           </span> 
           <span>Idea</span> 
       </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
        {cardsData.map((card, index) => (
>>>>>>> mada
          <Card key={index} title={card.title} date={card.date} description={card.description} />
        ))}
      </div>

<<<<<<< HEAD
      {/* Pagination Buttons */}
      <div className="join w-32">
        <button 
          onClick={handlePrevious} 
          disabled={currentPage === 0}
          className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60"
        >
          Previous page
        </button>
        <button 
          onClick={handleNext} 
          disabled={(currentPage + 1) * cardsPerPage >= cardsData.length}
          className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60"
        >
          Next
        </button>
=======
      {/* Pagination */}
      <div className="join w-32">
        <button className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60">Previous page</button>
        <button className="join-item btn btn-outline text-xs hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] bg-[#fefefe] hover:opacity-60">Next</button>
>>>>>>> mada
      </div>
    </div>
  );
}

export default Ideas;
