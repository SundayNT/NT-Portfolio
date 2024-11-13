
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export default function ToolsUse() {
    return (
    <div className="card bg-slate-700 text-neutral-content w-[500px]">
        <div className="card-body items-center text-center mb-5">
            <h2 className="card-title mb-5 text-white text-2xl font-semibold">Tools I Use</h2>
            <div className="card-actions flex justify-center">
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><VscVscodeInsiders size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><RiTailwindCssFill size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><FaSlack size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><IoLogoVercel size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"><SiDaisyui size={30} /></button>
            </div>
        </div>
    </div>
)
}
