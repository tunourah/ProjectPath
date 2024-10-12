import { Link, useRouteError } from "react-router-dom";
import Landing from "../assets/Landing-img.png";
import LogIn from "../assets/Login-img.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="h-screen w-screen flex justify-evenly items-center">
        <div className="md:my-4 md:h-[350px]">
          <img
            src={Landing}
            className="object-cover h-auto md:h-full animation_spin"
          />
        </div>

        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-9xl">404</h1>

          <p className="text-3xl">It's seems you lost</p>

          <Link
            to="/"
            className=" w-fit font-bold text-base border-2 border-[#25DEC5] px-8 py-2 rounded-full hover:bg-[#25DEC5] hover:border-[#25DEC5] flex items-center hover:text-[#002933]"
          >
            Go home
          </Link>
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
