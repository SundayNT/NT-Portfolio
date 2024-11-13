import { TypeAnimation } from 'react-type-animation';

export default function AboutMe() {
    return (
    <div className="flex flex-col justify-center items-center p-[100px] ">
        {/* <div className="hero-overlay bg-gray-800 bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello</h1>
            <p className="mb-5 text-3xl text-white font-semibold">
                My name is Nuttanicha Techanoraraj.
            </p>
            <p className="mb-5 text-3xl text-white font-semibold">
                Junior Software Developer
            </p>
            <button className="btn bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-gray-50 ">Resume</button>
            </div>
        </div> */}

        <div>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello',
                1000, // wait 1s before replacing
                'My name is Nuttanicha Techanoraraj.',
                1000,
                'Junior Software Developer.',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '50px', display: 'inline-block', color: 'white'}}
            repeat={Infinity}
            />
        </div>
        <button className="btn bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-gray-50 my-10">Resume</button>
    </div>
    )
}
