

export default function NavBar() {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }
    // function scrollToElement() {
    //     const element = document.getElementById('aboutme');
    //     element.scrollIntoView({
    //         behavior: 'smooth',
    //     });
    // }
    // function scrollToElementContact() {
    //     const element = document.getElementById('contact');
    //     element.scrollIntoView({
    //         behavior: 'smooth',
    //     });
    // }

    // function scrollToElementProject() {
    //     const element = document.getElementById('project');
    //     element.scrollIntoView({
    //         behavior: 'smooth',
    //     })
    // }

    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800; // ระยะเวลาเลื่อน (มิลลิวินาที)
        let start = null;
    
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
    
        // ฟังก์ชัน easing สำหรับการเลื่อนแบบนุ่มนวล
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    
        requestAnimationFrame(animation);
    }

    const scrollToElement = () => {
        const element = document.getElementById('aboutme');
        const offset = 80; // ปรับค่าชดเชยที่เหมาะสม
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // ตำแหน่งของ element
        const offsetPosition = elementPosition - offset; // ลบ offset ออกจากตำแหน่งที่เลื่อนไป
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    const scrollToElement2 = () => {
        const element = document.getElementById('project');
        const offset = 80; // ปรับค่าชดเชยที่เหมาะสม
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // ตำแหน่งของ element
        const offsetPosition = elementPosition - offset; // ลบ offset ออกจากตำแหน่งที่เลื่อนไป
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };
    
    const scrollToElement3 = () => {
        const element = document.getElementById('contact');
        const offset = 80; // ปรับค่าชดเชยที่เหมาะสม
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // ตำแหน่งของ element
        const offsetPosition = elementPosition - offset; // ลบ offset ออกจากตำแหน่งที่เลื่อนไป
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    

    return (
        <div className="navbar bg-[#1b2631] sticky top-0 left-0 z-50">
            <div className="flex-1">
                <a className="hidden md:block text-white text-2xl font-semibold ml-5">SUNDAY</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white text-base mr-5 font-semibold">
                    {/* <li><a href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a></li>
                    <li><a href="/aboutme" onClick={(e) => { e.preventDefault(); scrollToElement(); }}>About Me</a></li>
                    <li><a href="/project" onClick={(e) => { e.preventDefault(); scrollToElementProject();}}>Project</a></li> */}
                    <li>
                        <a onClick={() => smoothScroll('top')}>Home</a>
                    </li>
                    <li>
                        <a onClick={scrollToElement}>About Me</a>
                    </li>
                    <li>
                        <a onClick={scrollToElement2}>Project</a>
                    </li>

                    <li>
                        <details>
                            <summary>Contact</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 flex flex-col w-[130px]">
                                <li><a href="https://www.linkedin.com/in/nuttanicha-techanoraraj/" target="_blank">Linkedin</a></li>
                                <li><a href="https://github.com/SundayNT" target="_blank">Github</a></li>
                                <li><a onClick={scrollToElement3}>My Contact</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}