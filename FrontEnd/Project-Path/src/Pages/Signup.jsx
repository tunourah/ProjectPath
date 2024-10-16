import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import SignUp from "../assets/Signup-img.png";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

  const [signData, setSignData] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://670438ecab8a8f89273356ec.mockapi.io/testAPI")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    if (
      firstName === "" ||
      secondName === "" ||
      email === "" ||
      password === ""
    ) {
      errorLog("Please fill in all fields!");
      return;
    }

    if (firstName.length < 2 || secondName.length < 2) {
      errorLog("Name must be more than 2 characters!");
      return;
    }

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorLog("Write a valid email address!!");
      return;
    }

    if (!email.includes("@twaiq.edu.sa")) {
      errorLog("Your email must have a domain from Twaiq Academia!!");
      return;
    }

    if (password.length < 8) {
      errorLog("Password must be more than 8 characters!!");
      return;
    }

    const user = users.find((data) => data.email === email);
    if (user) {
      errorLog("Email is taken!");
      return;
    }

    axios
      .post("https://670438ecab8a8f89273356ec.mockapi.io/testAPI", {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            firstName: firstName,
            secondName: secondName,
            email: email,
          })
        );

        setFirstName("");
        setSecondName("");
        setEmail("");
        setPassword("");

        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const errorLog = (message) => {
    setErrorMessage(message);
    setErrorBorder("border-[#FF6565]");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-3xl px-4 pb-12 pt-6 shadow-xl bg-transparent z-10 shadow-[#00293333] text-center flex flex-col items-center gap-4 md:gap-8 xl:w-2/5 md:w-9/12 w-full">
          <div className="w-full h-0 text-2xl">
            <div className="w-fit rounded-full p-2">
              <Link to="/" className="h-fit p-2">
                <IoIosArrowBack />
              </Link>
            </div>
          </div>

          <h1 className="font-medium text-4xl">Sign up</h1>

          <div className="flex flex-col gap-2">
            <p className="text-[#737D7F] text-sm">
              Please enter your information below <br /> to have access to
              projectpath
            </p>
          </div>

          <div className="w-full">
            <p className="text-[#FF6565] text-sm text-start md:px-4 mb-2">
              {errorMessage}
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:px-4">
              <label
                className={`input input-bordered ${errorBorder} border-2 flex items-center gap-2 md:w-1/2 focus-within:outline-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </label>

              <label
                className={`input input-bordered ${errorBorder} border-2 flex items-center gap-2 md:w-1/2 focus-within:outline-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Second Name"
                  value={secondName}
                  onChange={(e) => {
                    setSecondName(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-start">
              Email <span className="text-[#EF3061]">*</span>
            </p>
            <label
              className={`input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="example@tuwaiq.edu.sa"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-start">
              Password <span className="text-[#EF3061]">*</span>
            </p>
            <label
              className={`input input-bordered border-2 ${errorBorder} flex items-center gap-2 focus-within:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>

          <p className="text-start w-full md:px-4 text-[#737D7F] text-sm">
            Already have an account?{" "}
            <span className="text-[#0AC6F2] hover:underline">
              <Link to="/login">Log in</Link>
            </span>
          </p>

          <div className="font-bold text-base">
            <button
              onClick={handleSubmit}
              className="border-2 border-black rounded-full px-8 py-2 hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center justify-center gap-2"
            >
              Signup{" "}
              <span className="text-xl mt-1">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>

        <div className="absolute md:bottom-40 md:right-40 bottom-32 right-4">
          <img src={SignUp} className="h-[50px]" />
        </div>

        <div className="p-4 rounded-full border border-[#002933] absolute md:top-60 md:left-52 top-40 left-4"></div>

        <div className="p-4 rounded-full border border-[#002933] absolute md:bottom-40 md:left-60 bottom-40 left-20"></div>

        <div className="bg-[#97C4C7] p-4 rounded-full absolute md:top-40 md:right-60 top-32 right-20"></div>

        <div className="bg-[#97C4C7] p-2 rounded-full absolute md:bottom-52 md:left-40 bottom-60 right-20 w-fit"></div>
      </div>
    </div>
  );
}

export default Signup;
