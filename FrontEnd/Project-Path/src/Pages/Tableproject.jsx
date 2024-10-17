import React, { useEffect } from "react";
import Nav from "../Component/Nav";
import Table from "../Component/Table";
import { useNavigate } from "react-router-dom";

const Tableproject = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userData) {
      navigate("/signup");
    } 
  });

  return (
    <div className="flex flex-col md:flex-row">
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />
      <main className="flex-1 container mx-auto p-6 xl:mt-0 mt-12">
        <div className="w-full max-w-5xl">
          <div className="w-full">
            {/* Set a max width for better readability */}
            <Table headers={["Student Name", "Project Name"]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tableproject;
