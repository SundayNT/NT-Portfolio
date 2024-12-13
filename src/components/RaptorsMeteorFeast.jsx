import React from "react";
import { Link } from "react-router-dom";
import Homepage from "/ProjectImage/homePage.png";
import GameDetail from "/ProjectImage/gameDetail.png";
import HeroSection from "/ProjectImage/heroSection.png";
import CheckOut from "/ProjectImage/checkoutPage.png";
import Login from "/ProjectImage/Login.png";
import Register from "/ProjectImage/Register.png";
import NewsPage from "/ProjectImage/newsPage.png";
import Payment from "/ProjectImage/payment.png";
import ThankPurchase from "/ProjectImage/thankPurchase.png";
import { IoIosArrowBack } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaSlack } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

const RaptorsMeteorFeast = () => {
  return (
    <div id="raptormeteorfeast">
        <Link to="/" className="font-bold flex justify-start p-5">
            <button className=" text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-300 hover:scale-110">
                <IoIosArrowBack size={20} /> Go Back
            </button>
        </Link>
        <h1 className="text-4xl font-bold text-white text-center mt-3 mb-14"> Game E-commerce Web Development (Raptor Meteor Feast) </h1>
        {/* <div className="flex flex-col items-center mb-14 md:flex-row gap-20 justify-center">
            <div>
                <h2 className="mb-5 text-2xl font-bold text-white"> Team Collaborators </h2>
                <ul className="list-decimal list-inside text-xl text-white">
                    <li>Nuttanicha Techanoraraj</li>
                    <li>Nitipat Wongwaikunanant</li>
                    <li>Kulsaya Seenual</li>
                    <li>Siwakrit Pattaveesin</li>
                </ul>
            </div>
            <div>
                <h2 className="mb-5 text-2xl font-bold text-white"> Tech Stack Used </h2>
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
        </div> */}

            <div className="flex ">
                <div className="border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-white w-[30%] m-auto rounded-xl text-center py-10 px-10">
                    <h1 className="text-center text-2xl font-bold mb-4">Team Collaborators</h1>
                    <ul className="list-decimal list-inside text-xl text-white">
                        <li>Nuttanicha Techanoraraj</li>
                        <li>Nitipat Wongwaikunanant</li>
                        <li>Kulsaya Seenual</li>
                        <li>Siwakrit Pattaveesin</li>
                    </ul>
                </div>
                <div className="card border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] text-neutral-content w-[500px]">
                    <div className="card-body items-center text-center mb-5">
                        <h2 className="card-title mb-5 text-white text-2xl font-semibold">Tools I Use</h2>
                        <div className="card-actions flex justify-center">
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><VscVscodeInsiders size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><RiTailwindCssFill size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><FaSlack size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><IoLogoVercel size={30} /></button>
                        <button className="btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-500 hover:scale-110"><SiDaisyui size={30} /></button>
                    </div>
                </div>
            </div>
        </div>








      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img
              src={Homepage}
              alt="HomepageImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto">
            <img
              src={GameDetail}
              alt="GameDetailImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto">
            <img
              src={NewsPage}
              alt="NewsPageImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img
              src={Register}
              alt="RegisterImg"
              className="h-[700px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto">
            <img
              src={Login}
              alt="LoginImg"
              className="h-[700px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>

        <div className="md:w-[60%] h-auto">
          <img
            src={HeroSection}
            alt="HeroSectionImg"
            className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
          />
        </div>

        <div className="md:w-[60%] h-auto">
          <img src={CheckOut} alt="CheckOutImg" className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img src={Payment} alt="PaymentImg" className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />
          </div>
          <div className="w-[500px] h-auto">
            <img src={ThankPurchase} alt="ThankPurchaseImg" className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaptorsMeteorFeast;
