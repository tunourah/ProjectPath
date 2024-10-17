import { useNavigate } from "react-router-dom";
import Nav from "../Component/Nav";
import StudentCard from "../Component/StudentCard";
import { useEffect } from "react";
function Dashboard() {
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
    <>
      <section className="w-full flex ">
        <Nav />
        <section className="p-8 md:w-4/5 xs:w-full xl:mt-0 mt-12">
          <h2 className="text-2xl p-5">
            {" "}
            <span className="font-bold text-4xl">Welcome</span>{" "}
            {userData ? userData.firstName : ""}{" "}
            {userData ? userData.secondName : ""}
          </h2>
          <div className="flex flex-wrap gap-8">
            <StudentCard
              descrptn={""}
              title={"Projects"}
              img={"https://i.ibb.co/sF0S9qt/project.png"}
              link={"/tableproject"}
            />

            <StudentCard
              descrptn={""}
              title={"Students"}
              img={"https://i.ibb.co/rZN4dHG/student-1.png"}
              link={"/tablestd"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Dashboard;
