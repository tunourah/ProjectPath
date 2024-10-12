import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Table = ({ headers }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const [reason, setReason] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const openModal = (action) => {
    setActionType(action);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setReason("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Action: ${actionType}, Reason: ${reason}`);
    closeModal();
  };

  const projects = [
    { studentName: "Yousef", projectName: "AI Chatbot", status: "In Progress" },
    { studentName: "Ahmed", projectName: "E-commerce Website", status: "Accepted" },
    { studentName: "Mada", projectName: "Portfolio Website", status: "Rejected" },
    
  ];

  const actions = [
    {
      label: 'Accept',
      handler: (project) => alert(`Accepting ${project.projectName}`),
      className: 'text-gray-600',
    },
    {
      label: 'Reject',
      handler: (project) => openModal("reject"),
      className: 'text-gray-600',
    },
    {
      label: 'Edit',
      handler: (project) => openModal("edit"),
      className: 'text-blue-600',
    },
  ];

  return (
    <div className="p-4 m-5">
      <div className="relative px-2 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-6 px-4 bg-white dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">All Projects</h2>
          <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
            <input
                type="text"
                id="table-search-users"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
              />
            </div>
            <div className=" relative  inline-block ">
              <button
                id="dropdownActionButton"
                onClick={toggleDropdown}
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
              {/* Dropdown menu */}
              <div
                id="dropdownAction"
                className={`absolute left-0 z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      State
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      {headers.map((header, index) => (
        <th key={index} scope="col" className="px-6 py-3">{header}</th>
      ))}
      <th scope="col" className="px-8 py-3 text-right" colSpan={1}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {projects.map((project, index) => (
      <tr
        key={index}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        {headers.includes("Student Name") && (
          <td className="px-6 py-4">{project.studentName}</td>
        )}
        {headers.includes("Project Name") && (
          <td className="px-6 py-4">{project.projectName}</td>
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
              onClick={() => action.handler(project)} // Pass the current project to the action handler
              className={`${action.className} hover:underline ml-2`}
            >
              {action.label}
            </button>
          ))}
        </td>
      </tr>
    ))}
  </tbody>
</table>


        {/* Modal for actions */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              width: '500px',
              height: '400px',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: '30px',
              borderRadius: '8px',
              overflow: 'auto',
            },
          }}
        >
          <div className="p-10 w-full">
            <h2 className="text-lg font-semibold">Reason for {actionType}</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={`Enter reason for ${actionType}`}
                className="w-full h-24 p-2 border rounded-lg"
                required
              />
              <div className="mt-4 flex justify-end">
                <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 bg-cyan-200 rounded-lg text-white hover:bg-cyan-300 transition-colors duration-200">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200">Submit</button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Responsive cards for small screens */}
        {/* <div className="block md:hidden space-y-4 p-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-base font-semibold">{project.studentName}</div>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <strong>Project:</strong> {project.projectName}
              </div>
              <div className="text-sm">
                <strong>Status:</strong> {project.status}
              </div>
              <div className="mt-2">
                {actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    onClick={() => action.handler(project)} // Pass the current project to the action handler
                    className={`${action.className} hover:underline mx-1`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Table;