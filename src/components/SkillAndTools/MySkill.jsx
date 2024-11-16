import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";


export default function MySkill() {
    return (
        <div className="card border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-neutral-content w-[500px]">
            <div className="card-body items-center text-center mb-5">
                <h2 className="card-title mb-5 text-white text-2xl font-semibold">My Skills</h2>
                <div className="card-actions flex justify-center">
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaHtml5 size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaCss3Alt size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiJavascript size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaReact size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><BiLogoGit  size={30} /></button>
                </div>
            </div>
        </div>
    )
}
