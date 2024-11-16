
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

export default function ToolsUse() {
    return (
    <div className="card border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-neutral-content w-[500px]">
        <div className="card-body items-center text-center mb-5">
            <h2 className="card-title mb-5 text-white text-2xl font-semibold">Tools I Use</h2>
            <div className="card-actions flex justify-center">
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><VscVscodeInsiders size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><RiTailwindCssFill size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaSlack size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><IoLogoVercel size={30} /></button>
            <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiDaisyui size={30} /></button>
            </div>
        </div>
    </div>
)
}
