import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ headers }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [reason, setReason] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [acceptedProjects, setAcceptedProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Items per page

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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

  const handleAccept = (project) => {
    toast.success(`Project ${project.projectName} accepted successfully!`);
    setAcceptedProjects((prevAccepted) => [
      ...prevAccepted,
      project.projectName,
    ]);
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

  // Filter projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const actions = [
    {
      label: "Accept",
      handler: (project) => handleAccept(project),
      className: "text-gray-600",
    },
    {
      label: "Reject",
      handler: (project) => openActionModal("reject"),
      className: "text-gray-600",
    },
    {
      label: "Edit",
      handler: (project) => openActionModal("edit"),
      className: "text-[#0AC6F2]",
    },
  ];

  return (
    <div className="md:p-5 md:m-5 max-w-full">
      <ToastContainer /> {/* Toast container to display notifications */}
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-6 px-4 bg-white">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/sF0S9qt/project.png"
            alt=""
            srcSet=""
            className="w-[48px]"
          />
          <h2 className="text-lg font-semibold text-gray-900">All Projects</h2>
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
          <div className="relative inline-block">
            <button
              id="dropdownActionButton"
              onClick={toggleDropdown}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none focus-within:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Sort by
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
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
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  {headers.includes("Student Name") && (
                    <td className="px-6 py-4">{project.studentName}</td>
                  )}
                  {headers.includes("Project Name") && (
                    <td
                      className="px-6 py-4 cursor-pointer text-[#0AC6F2] hover:underline"
                      onClick={() => openProjectDetailsModal(project)} // Open modal with project details
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
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.handler(project)}
                        className={`ml-2 ${action.className} ${
                          acceptedProjects.includes(project.projectName) &&
                          action.label !== "Accept"
                            ? "cursor-not-allowed text-gray-400"
                            : "hover:underline"
                        }`}
                        disabled={
                          acceptedProjects.includes(project.projectName) &&
                          action.label !== "Accept"
                        } // Disable the button
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
        </div>

        {/* Modal for accept/reject actions */}
        <Modal
          isOpen={isModalOpen && !selectedProject} // Show action modal only
          onRequestClose={closeModal}
          contentLabel="Action Modal"
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto w-full shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize">
              {actionType} Project
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="reason"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Reason for {actionType}:
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-[#EEF4FB] text-[#0AC6F2]  py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0AC6F2] text-white rounded-lg px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Modal for project details */}
        <Modal
          isOpen={isModalOpen && selectedProject} // Show project details modal only
          onRequestClose={closeModal}
          contentLabel="Project Details Modal"
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto w-full shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Project Details
            </h3>
            {selectedProject && (
              <>
                <p className="text-sm text-gray-700">
                  <strong>Project Name:</strong> {selectedProject.projectName}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Description:</strong> {selectedProject.desc}
                </p>
              </>
            )}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

        {/* Responsive cards for small screens */}
        <div className="block sm:hidden space-y-4 p-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              {/* Student Info */}
              <div className="flex items-center  space-x-2 mb-2">
                <div className="font-semibold text-lg text-gray-800">
                  {project.studentName}
                </div>
              </div>

              {/* Project Info */}
              <div className="text-sm text-gray-600">
                <strong>Project:</strong> {project.projectName}
              </div>

              {/* Modal Trigger for Project Details */}
              {headers.includes("Project Name") && (
                <div
                  className="mt-2 cursor-pointer text-[#0AC6F2] hover:underline font-medium"
                  onClick={() => openProjectDetailsModal(project)} // Open modal with project details
                >
                  View Project Details
                </div>
              )}

              {/* Action Buttons (Accept, Reject, Edit) */}
              <div className="mt-4 flex flex-row flex-wrap space-x-2">
                {" "}
                {/* Flex row and spacing between buttons */}
                {actions.map((action, actionIndex) => {
                  // Define button styles based on action type
                  const buttonStyles = {
                    Accept:
                      "border border-green-800 w-full mb-2 text-green-800 hover:bg-green-800 hover:text-white",
                    Reject:
                      "border border-red-800 text-red-800 hover:bg-red-800 hover:text-white",
                    Edit: "border border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white",
                  };

                  return (
                    <button
                      key={actionIndex}
                      onClick={() => action.handler(project)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                        acceptedProjects.includes(project.projectName) &&
                        action.label !== "Accept"
                          ? "cursor-not-allowed text-gray-400 border-gray-400"
                          : buttonStyles[action.label] // Use dynamic styles for the buttons
                      }`}
                      disabled={
                        acceptedProjects.includes(project.projectName) &&
                        action.label !== "Accept"
                      } // Disable buttons if project is accepted
                    >
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
