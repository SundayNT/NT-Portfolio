import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";


export default function MySkill() {
    return (
        <div className="card bg-slate-700/80 text-neutral-content w-[500px]">
            <div className="card-body items-center text-center mb-5">
                <h2 className="card-title mb-5 text-white text-2xl font-semibold">My Skills</h2>
                <div className="card-actions flex justify-center">
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><FaHtml5 size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><FaCss3Alt size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><SiJavascript size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><FaReact size={30} /></button>
                <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><BiLogoGit  size={30} /></button>
                </div>
            </div>
        </div>
    )
}
