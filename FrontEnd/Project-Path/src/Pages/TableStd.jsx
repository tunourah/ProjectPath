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
      <Nav />
      <main className="flex justify-center items-center w-full p-8">
        <div className="w-full max-w-5xl">
          <Deletestd headers={["Student Name"]} />
        </div>
      </main>
    </div>
  );
};

export default TableStd;
