// import codeImg1 from "/Image/code-img-1.webp"
// import codeImg2 from "/Image/code-img-2.webp"
// import homeImg from "/Image/HomeImg.png"
// import { Link } from "react-router-dom"
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export default function MyProject() {
    // const handlePageChange = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <div id="project" className="w-full flex flex-col items-center md:flex-row gap-32 justify-center mb-32">
            <Project1 />
            <Project2 />
            <Project3 />
            {/* <div className="card bg-base-100 w-96 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <figure>
                    <img
                    src={homeImg}
                    alt="#" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Project 1</h2>
                    <p className="text-white">Game E-commerce project</p>
                    <button className="transition transform bg-teal-600 hover:-translate-y-1 hover:bg-teal-700 duration-200 active:bg-teal-800 py-3 px-4 rounded-xl my-3 text-white font-bold ">
                        <Link to="/raptormeteorfeast" onClick={handlePageChange}>Click Me</Link>
                    </button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline text-orange-400">HTML</div>
                    <div className="badge badge-outline text-yellow-300">JS</div>
                    <div className="badge badge-outline text-violet-400">React+Vite</div>
                    <div className="badge badge-outline text-sky-400">TailwindCSS</div>
                    </div>
                </div>
            </div> */}

            {/* <div className="card bg-base-100 w-96 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <figure>
                    <img
                    src={codeImg2}
                    alt="#" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Project 2</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="transition transform bg-teal-600 hover:-translate-y-1 hover:bg-teal-700 duration-200 active:bg-teal-800 py-3 px-4 rounded-xl my-3 text-white font-bold ">
                        <a>Click Me</a>
                    </button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline text-orange-400">HTML</div>
                    <div className="badge badge-outline text-sky-400">TailwindCSS</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
