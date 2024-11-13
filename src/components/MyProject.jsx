

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
                    <h2 className="card-title">
                    Project 1
                    </h2>
                    <p>E-commerce project</p>
                    <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3 px-4 rounded-xl my-3">Click Me</button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">HTML</div>
                    <div className="badge badge-outline">JS</div>
                    <div className="badge badge-outline">React+Vite</div>
                    <div className="badge badge-outline">TailwindCSS</div>
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
                    <h2 className="card-title">
                    Project 2
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3 px-4 rounded-xl my-3">Click Me</button>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">HTML</div>
                    <div className="badge badge-outline">TailwindCSS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
