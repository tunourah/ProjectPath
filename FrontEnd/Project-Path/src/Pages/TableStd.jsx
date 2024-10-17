import React, { useEffect } from "react";
import Nav from "../Component/Nav";

import Deletestd from "../Component/Deletestd";
import { useNavigate } from "react-router-dom";

const TableStd = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!userData) {
      navigate("/signup");
    } else if (userData.firstName !== "admin") {
      navigate("/dashboardstd");
    }
  });
  return (
    <div className="flex flex-col md:flex-row">
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />
      <main className="flex-1 container mx-auto p-6 xl:mt-0 mt-12">
        <div className="w-full max-w-5xl">
          <div className="w-full">
            <Deletestd headers={["Student Name"]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableStd;
