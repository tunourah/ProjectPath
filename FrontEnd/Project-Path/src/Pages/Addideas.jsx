import { useEffect, useState } from "react";
import Nav from "../Component/Nav";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!userData) {
      navigate("/signup");
    } else if (userData.firstName === "admin") {
      navigate("/dashboard");
    }
  });

  const handleCreate = async () => {
    if (title === "" || type === "" || description === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/addIdea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          ideaType: type,
          ideaDescription: description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear the form after a successful submission
      setTitle("");
      setType("");
      setDescription("");
      setSuccess(true);
    } catch (error) {
      console.error("Failed to create idea:", error);
      setSuccess(false);
    }
  };

  const errorLog = (message) => {
    setErrorMessage(message);
    setErrorBorder("border-[#FF6565]");
  };

  return (
    <div className="flex h-screen">
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />

      <div className="flex-1 container mx-auto p-6 xl:mt-0 mt-12">
        <div className="text-start">
          <div className="text-4xl font-bold mb-4 flex">
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#0AC6F2"
              >
                <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
              </svg>
            </span>
            <span>Add Project</span>
          </div>
        </div>
        <p className="text-[#FF6565] text-sm text-start mb-2">{errorMessage}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Title</span>
            </label>
            <input
              type="text"
              placeholder="Project Name"
              className={`${errorBorder} input input-bordered focus-within:outline-none`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Type</span>
            </label>
            <input
              type="text"
              placeholder="Type"
              className={`${errorBorder} input input-bordered focus-within:outline-none`}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control w-full relative h-3/4">
          <label className="label">
            <span className="label-text">Project Description</span>
          </label>
          <textarea
            className={`${errorBorder} textarea textarea-bordered h-full w-full resize-none pr-24 focus-within:outline-none`}
            placeholder="Describe your project..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="absolute bottom-2 right-2 space-x-2 flex">
            <button
              className="btn bg-[#0AC6F2] hover:bg-[#0AC6F2] hover:bg-opacity-50 text-white mx-2"
              onClick={handleCreate}
            >
              Create
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </span>
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-center flex flex-col items-center">
                <div className="mask mask-circle bg-green-500 text-white text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="http://www.w3.org/2000/svg"
                    width="48px"
                    fill="#ffffff"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <p className="py-4">
                  {success ? "Idea Successfully sent!" : "Failed to send idea."}
                </p>
                <div className="modal-action flex justify-center border-2">
                  <form method="dialog">
                    <button className="btn bg-white hover:bg-[#0AC6F2] border-[#0AC6F2] text-[#0AC6F2] px-8 hover:text-white">
                      OK
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
