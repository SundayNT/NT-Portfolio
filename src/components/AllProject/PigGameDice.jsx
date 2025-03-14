import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoGit } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function PigGameDice() {
  return (
    <>
      <div id="guessmynumber" className="min-h-screen">
        {/* เพิ่ม min-h-screen */}
        <Link to="/" className="font-bold flex justify-start p-5">
          <button className=" text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-300 hover:scale-110">
            <IoIosArrowBack size={20} /> Go Back
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-white text-center mt-3 mb-28">
          Pig Game Dice
        </h1>
        <div className="flex flex-col items-center mb-28 md:flex-row gap-20 justify-center">
          <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white w-[30%] rounded-xl text-center py-10 px-10">
            <h2 className="mb-5 text-2xl font-bold text-white">
              Tech Stack Used
            </h2>
            <div className="card-actions flex justify-center">
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <FaHtml5 size={30} />
              </button>
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <FaCss3Alt size={30} />
              </button>
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <SiJavascript size={30} />
              </button>
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <BiLogoGit size={30} />
              </button>
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <IoLogoGithub size={30} />
              </button>
              <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110">
                <IoLogoVercel size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white mb-28 w-[60%] mx-auto rounded-xl text-center py-10 px-10">
          <h1 className="text-center text-2xl font-bold mb-4">
            Project Overview
          </h1>
          <p className="text-lg font-semibold mb-4 text-slate-200">
            I cloned this Pig Game Dice project from learning resources on
            Udemy. This helped me learn various aspects of JavaScript. Feel free
            to check out my work through the link below. Thank you!
          </p>
          <a
            href="https://pig-game-dice-sd.vercel.app/"
            target="_blank"
            className="hover:text-teal-500 active:text-teal-600 text-lg font-bold flex justify-center items-center underline hover:decoration-yellow-500"
            style={{ textUnderlineOffset: "6px" }}
          >
            <MdKeyboardDoubleArrowRight size={30} /> CLICK TO VIEW OUR WORK
            <MdKeyboardDoubleArrowLeft size={30} />
          </a>
        </div>
      </div>
    </>
  );
}

export default PigGameDice;
