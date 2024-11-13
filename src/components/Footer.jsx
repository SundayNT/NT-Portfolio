import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
    return (
    <div>
        <footer className="footer bg-neutral text-neutral-content items-center px-7 py-4 flex justify-center md:justify-between gap-10">
            <aside>
                <p className="font-semibold">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="flex">
                <a href="https://github.com/SundayNT" target="_blank">
                    <IoLogoGithub size={25} />
                </a>
                <a href="#">
                    <IoLogoLinkedin size={25}/>
                </a>
            </nav>
        </footer>
    </div>
    )
}
