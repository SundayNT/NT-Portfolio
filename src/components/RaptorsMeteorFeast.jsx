import { Link } from "react-router-dom";
import Homepage from "/ProjectImage/homePage.png"
import GameDetail from "/ProjectImage/gameDetail.png"
import HeroSection from "/ProjectImage/heroSection.png"
import CheckOut from "/ProjectImage/checkoutPage.png"
import { IoIosArrowBack } from "react-icons/io";

export default function RaptorsMeteorFeast() {
  return (
    <div id="raptormeteorfeast">
      <Link to="/" className="font-bold flex justify-start p-5"><button className=" text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-300 hover:scale-110">
      <IoIosArrowBack size={20} /> Go Back </button></Link>
      <h1 className="text-4xl font-bold text-white text-center mt-3 mb-14">Game E-commerce Web Development (Raptor Meteor Feast)</h1>
      <div className="flex flex-col items-center mb-14 md:flex-row gap-20 justify-center">
        <div>
          <h2 className="mb-5 text-2xl font-bold text-white">Team Collaborators</h2>
          <ul className="list-decimal list-inside text-xl text-white">
            <li>Nuttanicha Techanoraraj</li>
            <li>Nitipat Wongwaikunanant</li>
            <li>Kulsaya Seenual</li>
            <li>Siwakrit Pattaveesin</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-2xl font-bold text-white">Tech Stack Used</h2>
          <ul className="list-decimal list-inside text-xl text-white">
            <li>React + Vite</li>
            <li>NextUI Library</li>
            <li>React icon</li>
            <li>Trello / Slack</li>
            <li>HTML, TailwindCSS</li>
            <li>Figma / Figjam</li>
            <li>Vercel</li>
            <li>Render</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
      <div className="w-[500px] h-auto">
        <img src={Homepage} alt="HomepageImg" />
      </div>
      <div className="w-[500px] h-auto">
        <img src={GameDetail} alt="GameDetailImg" />
      </div>
      <div className="md:w-1/2 h-auto">
        <img src={HeroSection} alt="HeroSectionImg" />
      </div>
      <div className="md:w-1/2 h-auto">
        <img src={CheckOut} alt="CheckOutImg" />
      </div>
      </div>
    </div>
  )
}
