import { useState } from "react";
import Nav from "../Component/Nav";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    document.getElementById("my_modal_1").showModal();
    console.log("Project created:", { title, type, description });
  };

  return (
    <div className="flex h-screen">
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />

      <div className="flex-1 p-6 bg-base-100 rounded-lg shadow-lg mx-8 mt-16">
        <div className="text-xl font-semibold mb-4 flex">
          <span className="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0AC6F2">
              <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          </span>
          <span>Add Project</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Title</span>
            </label>
            <input
              type="text"
              placeholder="Project Name"
              className="input input-bordered"
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
              className="input input-bordered"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control w-full relative">
          <label className="label">
            <span className="label-text">Project Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-48 w-full resize-none pr-24"
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
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
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
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#ffffff"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <p className="py-4">Idea Successfully sent!</p>
                <div className="modal-action flex justify-center border-2">
                  <form method="dialog">
                    <button className="btn bg-[#0AC6F2] text-white">OK</button>
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
