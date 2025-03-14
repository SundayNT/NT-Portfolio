import PigGameDice from "/Image/PigGameDice.png";
import { Link } from "react-router-dom";

function Project3() {
    const handlePageChange = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <>
      <div className="card bg-base-100 w-96 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] h-full">
        <figure>
          <img src={PigGameDice} alt="#" className="h-[18rem] object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Project 3</h2>
          <p className="text-white">Pig Game Dice</p>
          <button className="transition transform bg-teal-600 hover:-translate-y-1 hover:bg-teal-700 duration-200 active:bg-teal-800 py-3 px-4 rounded-xl my-3 text-white font-bold ">
            <Link to="/piggamedice" onClick={handlePageChange}>
              Click Me
            </Link>
          </button>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-orange-400">HTML</div>
            <div className="badge badge-outline text-[#F7DF1E]">JavaScript</div>
            <div className="badge badge-outline text-sky-400">CSS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project3;
