import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import LogIn from "../assets/Login-img.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorBorder, setErrorBorder] = useState("");

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/signup")
  //     .then(function (response) {
  //       setUsers(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const handleSubmit = async (e) => {
    if (email === "" || password === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    console.log(email,password)

    // const user = users.find((data) => data.email === email);
    // if (!user) {
    //   errorLog("Email or password is wrong!");
    //   return;
    // }

    // if (user.password !== password) {
    //   errorLog("Email or password is wrong!");
    //   return;
    // }
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/login', {
            email,
            password,
        });
        localStorage.setItem('user',  JSON.stringify({
          firstName: response.data.user.firstName,
          secondName: response.data.user.secondName,
          email: response.data.user.email,
          token:response.data.token,
          isAdmin:response.data.isAdmin
        })); // Save token to local storage
        // Redirect or update UI after successful login
        setEmail("");
        setPassword("");
        console.log(response.data);
    
        if (response.data.user.isAdmin === false) {
          navigate("/dashboardstd");
        }
    
        if (response.data.user.isAdmin === true) {
          navigate("/dashboard");
        }
    } catch (err) {
        
    }
};
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({
    //     firstName: user.firstName,
    //     secondName: user.secondName,
    //     email: user.email,
    //   })
    // );

    app.get("/students",(req,res)=>{
      User.find({isAdmin:false}).then(result=>{
       res.send(result)
      }).catch(error => {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal Server Error' }); // Handle errors
      });
     })
    
     app.delete("/students/:id", (req, res) => {
      const { id } = req.params;
    
      User.findByIdAndDelete(id)
          .then(result => {
              if (!result) {
                  return res.status(404).send({ message: 'User not found' });
              }
              res.send({ message: 'User deleted successfully', user: result });
          })
          .catch(error => {
              console.error('Error deleting user:', error);
              res.status(500).send({ message: 'Server error' });
          });
    });
    
    
     app.patch("/ideas/:id",(req,res)=>{
      const {id}=req.params
      Idea.findByIdAndUpdate(id,{$set:{ideaStatus:req.body.ideaStatus}},{new:true,runValidators:true}).then(result=>{
         res.send(result)
     })
    })
 

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
              <Link to="/" className="p-2">
                <IoIosArrowBack />
              </Link>
            </div>
          </div>

          <h1 className="font-medium text-4xl">Hello!</h1>

          <div className="flex flex-col gap-2">
            <p className="text-[#737D7F] text-sm">
              Please enter your Email and Password below <br /> to have access
              to projectpath
            </p>
          </div>

          <div className="w-full md:px-4 flex flex-col gap-4">
            <p className="text-[#FF6565] text-sm text-start">{errorMessage}</p>

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
            Don't have an Account?{" "}
            <span className="text-[#0AC6F2] hover:underline">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>

          <div className="font-bold text-base">
            <button
              onClick={handleSubmit}
              className="border-2 border-black rounded-full px-8 py-2 hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center justify-center gap-2"
            >
              Login{" "}
              <span className="text-xl mt-1">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>

        <div className="absolute md:bottom-40 md:right-40 bottom-32 right-4">
          <img src={LogIn} className="h-[50px]" />
        </div>

        <div className="rounded-full bg-[#97C4C7] p-2 absolute md:top-52 md:left-60 top-52 left-4"></div>

        <div className="p-4 rounded-full border border-[#002933] absolute md:top-60 md:left-52 top-52 left-4"></div>

        <div className="p-4 rounded-full border border-[#002933] absolute md:bottom-40 md:left-60 bottom-40 left-20"></div>

        <div className="bg-[#97C4C7] p-4 rounded-full absolute md:top-40 md:right-60 top-32 right-20"></div>

        <div className="bg-[#97C4C7] p-2 rounded-full absolute md:bottom-52 md:left-40 bottom-60 right-20 w-fit"></div>
      </div>
    </div>
  );
}

export default Login;
