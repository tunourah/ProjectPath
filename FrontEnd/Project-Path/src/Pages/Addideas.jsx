import { useState } from "react";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    document.getElementById("my_modal_1").showModal();
    console.log("Project created:", { title, type, description });
  };

  const handleDelete = () => {
    setTitle("");
    setType("");
    setDescription("");
  };

  return (
    <div>
      <div className=" flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
        <h2 className="text-xl self-start font-semibold mb-4">user name</h2>
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
            placeholder="Descripe your project..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
          <div className="absolute bottom-2 right-2 space-x-2 flex">
            <button
              className="btn bg-[#0AC6F2] hover:bg-[#0AC6F2] hover:bg-opacity-50 text-white mx-2"
              onClick={handleCreate}>
              Create
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-center flex flex-col items-center">
                <div className="mask mask-circle bg-green-500 text-white text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#ffffff">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <p className="py-4">Idea Successfully send!</p>
                <div className="modal-action className='flex justify-center border-2'">
                  <form method="dialog">
                    <button className="btn bg-[#0AC6F2] text-white">OK</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              className="btn bg-gray-100 text-[#0AC6F2]"
              onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
