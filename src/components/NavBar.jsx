
export default function NavBar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    function scrollToElement() {
        const element = document.getElementById('aboutme');
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
    function scrollToElementContact() {
        const element = document.getElementById('contact');
        element.scrollIntoView({
            behavior: 'smooth',
        });
    }

    function scrollToElementProject() {
        const element = document.getElementById('project');
        element.scrollIntoView({
            behavior: 'smooth',
        })
    }


    

    return (
        <div className="navbar bg-[#1b2631] sticky top-0 left-0 z-50">
            <div className="flex-1">
                <a className="hidden md:block text-white text-2xl font-semibold ml-5">SUNDAY</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white text-base mr-5 font-semibold">
                    <li><a href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a></li>
                    <li><a href="/#aboutme" onClick={(e) => { e.preventDefault(); scrollToElement(); }}>About Me</a></li>
                    <li><a href="/#project" onClick={(e) => { e.preventDefault(); scrollToElementProject();}}>Project</a></li>
                    <li>
                        <details>
                            <summary>Contact</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 flex flex-col w-[130px]">
                                <li><a href="https://www.linkedin.com/in/nuttanicha-techanoraraj/" target="_blank">Linkedin</a></li>
                                <li><a href="https://github.com/SundayNT" target="_blank">Github</a></li>
                                <li><a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToElementContact(); }}>My Contact</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}