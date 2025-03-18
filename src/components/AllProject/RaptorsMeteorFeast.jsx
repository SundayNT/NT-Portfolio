import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiNextui } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import ProjectOverview from "./ProjectOverview";
import ProjectGallery from "./ProjectGallery";
import DemoProject from "./DemoProject";
import VideoEmbed from "./DemoProject";

const RaptorsMeteorFeast = () => {
    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <div id="raptormeteorfeast">
        <Link to="/" className="font-bold flex justify-start p-5">
            <button className=" text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-300 hover:scale-110">
                <IoIosArrowBack size={20} /> Go Back
            </button>
        </Link>
        <h1 className="text-4xl font-bold text-white text-center mt-3 mb-28"> Game E-commerce Web Development (Raptor Meteor Feast) </h1>
        <div className="flex flex-col items-center mb-28 md:flex-row gap-20 justify-center">
            <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white w-[30%] rounded-xl text-center py-10 px-10">
                <h2 className="mb-5 text-2xl font-bold text-white"> Team Collaborators </h2>
                <ul className="list-decimal list-inside text-xl text-white">
                    <li>Nuttanicha Techanoraraj</li>
                    <li>Nitipat Wongwaikunanant</li>
                    <li>Kulsaya Seenual</li>
                    <li>Siwakrit Pattaveesin</li>
                </ul>
            </div>
            <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white w-[30%] rounded-xl text-center py-10 px-10">
                <h2 className="mb-5 text-2xl font-bold text-white"> Tech Stack Used </h2>
                <div className="card-actions flex justify-center">
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaReact size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><TbBrandVite size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiNextui size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaNodeJs size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><RiTailwindCssFill size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaSlack size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaTrello size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaFigma size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiMongodb size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiCloudinary size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><IoLogoVercel size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiRender size={30} /></button>
                </div>
            </div>
        </div>
        <ProjectOverview />
        <DemoProject />
        {/* <VideoEmbed /> */}
        <ProjectGallery />
        <div className="font-bold flex justify-end p-5">
            <button onClick={handleToTop} className="text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"> <IoIosArrowUp size={20} /> To the Top</button>
        </div>
    </div>
  );
};

export default RaptorsMeteorFeast;
