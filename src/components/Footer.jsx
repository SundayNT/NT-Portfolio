import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
    return (
    <div>
        <footer className="footer bg-neutral items-center px-7 py-4 flex flex-col text-white md:flex-row justify-between gap-10 ">
            <aside>
                <p className="font-semibold">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="flex items-center gap-4">
                <a href="https://github.com/SundayNT" target="_blank">
                    <IoLogoGithub size={30} />
                </a>
                <a href="#">
                    <IoLogoLinkedin size={30}/>
                </a>
                <div id="contact" className="ml-4">
                    <p className="font-semibold">086-8811209</p>
                    <p className="font-semibold">azterisk13@gmail.com</p>
                </div>
            </nav>
        </footer>
    </div>
    )
}
