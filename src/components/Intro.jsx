import { TypeAnimation } from 'react-type-animation';
import SundayCV from "/CV/SundayCV-16-Jan-25.pdf";

export default function Intro() {
    return (
    <div id='top' className="flex flex-col justify-center items-center p-[100px] h-[870px]">
        <div className='text-center mb-20'>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello,',
                1000, // wait 1s before replacing
                'My name is Nuttanicha Techanoraraj.',
                1000,
                'Junior Software Developer.',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '50px', display: 'inline-block',background: 'linear-gradient(90deg, rgba(45,255,110,1) 16%, rgba(180,255,239,1) 77%)',fontWeight: 'bold',
                WebkitBackgroundClip: 'text', color: 'transparent'}}
            repeat={Infinity}
        />
        </div>
        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-lg font-semibold my-10 border-none w-[150px] h-[60px]"><a href={SundayCV} target='_blank'>Download CV</a></button>
    </div>
    )
}
