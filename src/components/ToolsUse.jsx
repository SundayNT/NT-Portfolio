
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export default function ToolsUse() {
    return (
    <div className="card bg-neutral text-neutral-content w-96 m-auto mb-6">
            <div className="card-body items-center text-center mb-5">
                <h2 className="card-title mb-5">Tools I Use</h2>
                <div className="card-actions flex justify-center">
                <button className="btn btn-primary"><VscVscodeInsiders size={30} /></button>
                <button className="btn btn-primary"><RiTailwindCssFill size={30} /></button>
                <button className="btn btn-primary"><FaSlack size={30} /></button>
                <button className="btn btn-primary"><IoLogoVercel size={30} /></button>
                <button className="btn btn-primary"><SiDaisyui size={30} /></button>
                </div>
            </div>
        </div>
)
}
