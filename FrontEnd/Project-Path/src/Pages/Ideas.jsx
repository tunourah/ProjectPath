import { useState } from "react";

const Card = ({ title, date, description }) => (
  <div className="card border rounded-xl shadow-md p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="divider"></div>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="mt-4 flex items-center text-red-500">
      <span className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E05959">
          <path d="..."/>
        </svg>
      </span>
      <span className="text-sm font-medium">{date}</span>
    </div>
  </div>
);

function Ideas() {
  const cardsData = [
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
          <Card key={index} title={card.title} date={card.date} description={card.description} />
        ))}
      </div>

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
      </div>
    </div>
  );
}

export default Ideas;
