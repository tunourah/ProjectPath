import React, { useEffect } from "react";
import Nav from "../Component/Nav";
import TableStd from "../Component/TableStd";
import { useNavigate } from "react-router-dom";

const TableState = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!userData) {
      navigate("/signup");
    } else if (userData.firstName === "admin") {
      navigate("/dashboard");
    }
  });
  return (
    <div className="flex h-screen">
      <Nav className="w-1/4 bg-gray-800 text-white p-6" />
      <main className="flex-1 container mx-auto p-6 xl:mt-0 mt-12">
        <div className="w-full max-w-5xl">
          <div className="w-full">
            <TableStd headers={["Student Name", "Project Name", "Status"]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableState;
