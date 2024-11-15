

export default function MyProject() {
    return (
        <div id="project" className="w-full flex flex-col items-center md:flex-row gap-10 justify-center mb-10">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="#" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Project 1</h2>
                    <p className="text-white">E-commerce project</p>
                    <button className="transition transform bg-teal-600 hover:-translate-y-1 hover:bg-teal-700 duration-200 active:bg-teal-800 py-3 px-4 rounded-xl my-3 text-white font-bold ">
                        <a>Click Me</a>
                    </button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline text-orange-400">HTML</div>
                    <div className="badge badge-outline text-yellow-300">JS</div>
                    <div className="badge badge-outline text-violet-400">React+Vite</div>
                    <div className="badge badge-outline text-sky-400">TailwindCSS</div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="#" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Project 2</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="transition transform bg-teal-600 hover:-translate-y-1 hover:bg-teal-700 duration-200 active:bg-teal-800 py-3 px-4 rounded-xl my-3 text-white font-bold ">
                        <a>Click Me</a>
                    </button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline text-orange-400">HTML</div>
                    <div className="badge badge-outline text-sky-400">TailwindCSS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
