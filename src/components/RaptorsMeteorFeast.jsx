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
// import Toastify from "/ProjectImage/toastify.png"
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function RaptorsMeteorFeast() {
  const Pagination = () => {
    const [activePage, setActivePage] = useState(1); // ใช้สถานะ activePage เพื่อจัดการปุ่มที่ถูกเลือก

    const handlePageClick = (pageNumber) => {
      setActivePage(pageNumber); // เปลี่ยนสถานะเมื่อคลิกปุ่ม
    };

    return (
      <div className="flex w-1/2 justify-center gap-2 py-2">
        <a
          href="#item1"
          onClick={() => handlePageClick(1)}
          className={`btn btn-xs hover:bg-white ${
            activePage === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          1
        </a>
        <a
          href="#item2"
          onClick={() => handlePageClick(2)}
          className={`btn btn-xs hover:bg-white ${
            activePage === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          2
        </a>
      </div>
    );
  };

  return (
    <div id="raptormeteorfeast">
      <Link to="/" className="font-bold flex justify-start p-5">
        <button className=" text-xl btn bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white transform transition duration-300 hover:scale-110">
          <IoIosArrowBack size={20} /> Go Back
        </button>
      </Link>
      <h1 className="text-4xl font-bold text-white text-center mt-3 mb-14">
        Game E-commerce Web Development (Raptor Meteor Feast)
      </h1>
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
      <div className="w-full mx-auto flex flex-col items-center">
        <div className="carousel w-1/2 mx-auto">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          </div>
        </div>
        {/* เรียกใช้ Pagination ที่นี่ */}
        <Pagination />
      </div>

      {/* <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img src={Homepage} alt="HomepageImg" className="h-[700px] object-cover" />
          </div>
          <div className="w-[500px] h-auto">
            <img src={GameDetail} alt="GameDetailImg" className="h-[700px] object-cover" />
          </div>
          <div className="w-[500px] h-auto">
            <img src={NewsPage} alt="NewsPageImg" className="h-[700px] object-cover" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img src={Register} alt="HomepageImg" className="h-[700px] object-cover" />
          </div>
          <div className="w-[500px] h-auto">
            <img src={Login} alt="GameDetailImg" className="h-[700px] object-cover" />
          </div>
        </div>
        <div className="md:w-[60%] h-auto">
          <img src={HeroSection} alt="HeroSectionImg" className="object-cover" />
        </div>
        <div className="md:w-[60%] h-auto">
          <img src={CheckOut} alt="CheckOutImg" className="object-cover" />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto">
            <img src={Payment} alt="PaymentImg" />
          </div>
          <div className="w-[500px] h-auto">
            <img src={ThankPurchase} alt="ThankPurchaseImg" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

