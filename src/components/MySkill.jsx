import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";


export default function MySkill() {
    return (
        <div className="card bg-neutral text-neutral-content w-96 m-auto mb-6">
            <div className="card-body items-center text-center mb-5">
                <h2 className="card-title mb-5">My Skills</h2>
                <div className="card-actions flex justify-center">
                <button className="btn btn-primary"><FaHtml5 size={30} /></button>
                <button className="btn btn-primary"><FaCss3Alt size={30} /></button>
                
                <button className="btn btn-primary"><SiJavascript size={30} /></button>
                <button className="btn btn-primary"><FaReact size={30} /></button>
                <button className="btn btn-primary"><BiLogoGit  size={30} /></button>
                </div>
            </div>
        </div>
    )
}
