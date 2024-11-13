

export default function NavBar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="navbar bg-base-100 sticky top-0 left-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl text-white">SUNDAY</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white text-base">
                    <li><a href="/" onClick={scrollToTop}>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a href="/#project">Project</a></li>
                    <li>
                        <details>
                            <summary>Contact</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 flex flex-col">
                                <li><a>Linkedin</a></li>
                                <li><a href="https://github.com/SundayNT" target="_blank">Github</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}