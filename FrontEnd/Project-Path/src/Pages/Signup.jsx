import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/Footer-logo.png";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

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

    setFirstName("");
    setSecondName("");
    setEmail("");
    setPassword("");
  };

  const errorLog = (message) => {
    setErrorMessage(message);
    setErrorBorder("border-[#FF6565]");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-3xl px-4 py-12 shadow-xl shadow-[#00293333] text-center flex flex-col items-center gap-4 md:gap-8 xl:w-2/5 md:w-9/12 w-full">
          <Link to="/">
            <img
              src={FooterLogo}
              className="h-[40px] object-cover rounded-full"
            />
          </Link>

          <h1 className="font-medium text-4xl">Sign up</h1>

          <div className="flex flex-col gap-2">
            <p className="text-[#737D7F] text-sm">
              Please enter your information below <br /> to have access
              to projectpath
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
      </div>
    </div>
  );
}

export default Signup;
