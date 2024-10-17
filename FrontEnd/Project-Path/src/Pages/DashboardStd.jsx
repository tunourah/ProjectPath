import { useNavigate } from "react-router-dom";
import Nav from "../Component/Nav";
import StudentCard from "../Component/StudentCard";
import Card from "../Component/StudentCard";
import { useEffect } from "react";

function DashboardStd() {
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
    <>
      <section className="w-full flex">
        <Nav />
        <section className="p-8 md:w-4/5 xs:w-full xl:mt-0 mt-12">
          <h2 className=" text-2xl p-5">
            <span className="font-bold text-4xl">Welcome</span>{" "}
            {userData ? userData.firstName : ""}{" "}
            {userData ? userData.secondName : ""}
          </h2>
          <div className="flex justify-around flex-wrap gap-2">
            <StudentCard
              descrptn={"Track Your Idea"}
              title={" State Of Idea"}
              img={"https://i.ibb.co/W6s9QWG/state-1.png"}
              link={"/tablestate"}
            />
            <StudentCard
              descrptn={"Show All Idea"}
              title={"The Ideas"}
              img={"https://i.ibb.co/RDg2W4h/star.png"}
              link={"/ideas"}
            />
            <StudentCard
              descrptn={"Create Project"}
              img={"https://i.ibb.co/Dz8g0cp/add.png"}
              title={"Add Idea"}
              link={"/addideas"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default DashboardStd;
