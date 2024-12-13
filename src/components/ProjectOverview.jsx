import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function ProjectOverview() {
    return (
        <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white mb-28 w-[60%] mx-auto rounded-xl text-center py-10 px-10">
            <h1 className="text-center text-2xl font-bold mb-4">Project Overview</h1>
            <p className="text-lg font-semibold mb-4 text-slate-200">The Game E-Commerce Platform is an online marketplace designed for gamers and gaming enthusiasts to purchase video games. 
            The platform offers an intuitive user experience, a vast product catalog, secure payment gateways, and personalized recommendations based on user preferences. 
            This project demonstrates a blend of front-end and back-end development, modern web technologies, and user-focused design.</p>
            <a href="https://project-group7-frontend.vercel.app/" target='_blank' className='hover:text-teal-500 active:text-teal-600 text-lg font-bold flex justify-center items-center underline hover:decoration-yellow-500' style={{ textUnderlineOffset: '6px' }} > 
            <MdKeyboardDoubleArrowRight size={30} /> CLICK TO VIEW OUR WORK <MdKeyboardDoubleArrowLeft size={30} /> </a>
        </div>
    )
}
