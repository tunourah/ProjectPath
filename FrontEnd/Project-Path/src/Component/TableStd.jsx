import { useEffect, useState } from "react";
import Modal from "react-modal";

import { MdComment } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TableStd = ({ headers }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [reason, setReason] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openActionModal = (action) => {
    setActionType(action);
    setModalOpen(true);
  };

  const openProjectDetailsModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setReason("");
    setSelectedProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Action: ${actionType}, Reason: ${reason}`);
    closeModal();
  };

  const projects = [
    {
      studentName: "Yousef",
      projectName: "AI Chatbot",
      status: "In Progress",
      desc: "An AI-powered chatbot to assist users.",
    },
    {
      studentName: "Ahmed",
      projectName: "E-commerce Website",
      status: "Accepted",
      desc: "A full-fledged e-commerce website for online shopping.",
    },
    {
      studentName: "Mada",
      projectName: "Portfolio Website",
      status: "Rejected",
      desc: "A personal portfolio showcasing skills and projects.",
    },
    {
      studentName: "Sam",
      projectName: "Task Manager",
      status: "In Progress",
      desc: "A task manager app to boost productivity.",
    },
    {
      studentName: "Huda",
      projectName: "Weather App",
      status: "Accepted",
      desc: "A weather forecasting app for users.",
    },
    {
      studentName: "John",
      projectName: "Blog Website",
      status: "Rejected",
      desc: "A blog site for sharing articles.",
    },
    {
      studentName: "Sara",
      projectName: "Recipe App",
      status: "In Progress",
      desc: "A recipe app with various dishes.",
    },
  ];

  // Filter and pagination logic
  const filteredProjects = projects.filter(
    (project) =>
      project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const actions = {
    "In Progress": [
      {
        label: <MdComment />,
        handler: () => openActionModal("In Progress"),
      },
    ],
    Accepted: [],
    Rejected: [
      {
        label: <MdComment />,
        handler: () => openActionModal("Rejected"),
      },
    ],
  };

  return (
    <div className="p-5 m-5 max-w-full">
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-6 px-4 bg-white">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/W6s9QWG/state-1.png"
            alt=""
            srcSet=""
            className="w-[48px]"
          />
          <h2 className="text-lg font-semibold text-gray-900">My Projects</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="table-search-users"
              value={searchTerm}
              onChange={handleSearchChange}
              className="input input-bordered focus-within:outline-none"
              placeholder="Search "
            />
          </div>
        </div>
      </div>
      <div className="relative px-2 overflow-x-auto shadow-md sm:rounded-lg">
        {/* Responsive table */}
        <div className="overflow-x-auto m-2 p-2">
          <table className="w-full hidden sm:inline-table text-sm text-left text-gray-500 border rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
                <th scope="col" className="px-8 py-3 text-right" colSpan={1}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => (
                <tr
                  key={index}
                  className="bg-white border-b  hover:bg-gray-50 "
                >
                  {headers.includes("Student Name") && (
                    <td className="px-6 py-4">{project.studentName}</td>
                  )}
                  {headers.includes("Project Name") && (
                    <td
                      className="px-6 py-4 cursor-pointer text-[#0AC6F2] hover:underline"
                      onClick={() => openProjectDetailsModal(project)}
                    >
                      {project.projectName}
                    </td>
                  )}
                  {headers.includes("Status") && (
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            project.status === "In Progress"
                              ? "bg-yellow-500"
                              : project.status === "Accepted"
                              ? "bg-green-500"
                              : "bg-red-500"
                          } mr-2`}
                        ></div>
                        {project.status}
                      </div>
                    </td>
                  )}
                  <td className="px-6 py-4 text-right">
                    {actions[project.status]?.length > 0 &&
                      actions[project.status].map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={() => action.handler(project)}
                          className="hover:underline ml-2"
                        >
                          {action.label}
                        </button>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="sm:flex hidden justify-center items-center mt-6 space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`py-2 px-4 border rounded-lg ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                onClick={() => handlePageClick(pageNumber + 1)}
                className={`py-2 px-4 border rounded-lg ${
                  currentPage === pageNumber + 1
                    ? "bg-[#0AC6F2] text-white"
                    : "bg-gray-100 hover:bg-gray-300"
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`py-2 px-4 border rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>

          {/* Modal for action */}
          <Modal
            isOpen={isModalOpen && !selectedProject}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                width: "500px",
                height: "300px",
                top: "50%",
                left: "60%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {/* Icon at the top */}
            <div className="mb-4">
              {actionType === "Rejected" && (
                <div
                  style={{
                    backgroundColor: "#f56565", // Red color for rejected
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    &#x2716; {/* Unicode for X symbol */}
                  </span>
                </div>
              )}
              {actionType === "In Progress" && (
                <div
                  style={{
                    backgroundColor: "#F2A356", // Green color for In Progress
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    &#x1F4DD; {/* Unicode for check symbol */}
                  </span>
                </div>
              )}
            </div>

            {/* Project name and message */}
            <h2 className="text-lg font-semibold mb-2">Project Name</h2>
            <p className="text-gray-500">
              {actionType === "Rejected" && "why is not Accepted"}
              {actionType === "In Progress" && "why is Edited"}
              {actionType !== "Rejected" &&
                actionType !== "In Progress" &&
                "Action Pending"}
            </p>

            <button onClick={closeModal} className="mt-4 text-red-600">
              Close
            </button>
          </Modal>

          {/* Modal for project details */}
          <Modal
            isOpen={isModalOpen && selectedProject}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                width: "90%",
                maxWidth: "500px",
                height: "auto",
                top: "50%",
                left: "60%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              },
            }}
          >
            {selectedProject ? (
              <>
                <h2 className="text-lg font-semibold mb-2">Project Details</h2>

                <p className="text-sm text-gray-700">
                  <strong>Description:</strong> {selectedProject.desc}
                </p>

                <button
                  onClick={closeModal}
                  className="mt-4 bg-[#EEF4FB] text-[#0AC6F2] py-2 px-4 rounded"
                >
                  Close
                </button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Modal>
          {/* Responsive cards for small screens */}
          <div className="block md:hidden space-y-4 p-4">
            {projects.length === 0 ? ( // Check if there are projects to display
              <div className="text-center text-gray-500">
                No projects available.
              </div>
            ) : (
              projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md rounded-lg overflow-hidden"
                >
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="text-base font-semibold">
                        {project.studentName}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <strong>Project:</strong> {project.projectName}
                  </div>
                  {headers.includes("Project Name") && (
                    <div
                      className="mt-2 cursor-pointer   text-[#0AC6F2] hover:underline font-medium"
                      onClick={() => openProjectDetailsModal(project)} // Open modal with project details
                    >
                      View Project Details
                    </div>
                  )}
                  <div className="text-sm">
                    <strong>Status:</strong> {project.status}
                  </div>
                  <div className="mt-2 flex justify-between">
                    {actions[project.status]?.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.handler(project)}
                        className={`${action.className} hover:underline mx-1`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableStd;
