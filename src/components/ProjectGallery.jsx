import Homepage from "/ProjectImage/homePage.png";
import GameDetail from "/ProjectImage/gameDetail.png";
import HeroSection from "/ProjectImage/heroSection.png";
import CheckOut from "/ProjectImage/checkoutPage.png";
import Login from "/ProjectImage/Login.png";
import Register from "/ProjectImage/Register.png";
import NewsPage from "/ProjectImage/newsPage.png";
import Payment from "/ProjectImage/payment.png";
import ThankPurchase from "/ProjectImage/thankPurchase.png";

export default function ProjectGallery() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center mt-3 mb-28">
        Project Gallery
      </h1>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={Homepage}
              alt="HomepageImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={GameDetail}
              alt="GameDetailImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={NewsPage}
              alt="NewsPageImg"
              className="h-[600px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={Register}
              alt="RegisterImg"
              className="h-[700px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={Login}
              alt="LoginImg"
              className="h-[700px] object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>

        <div className="md:w-[60%] h-auto mb-12 transform transition duration-500 hover:scale-105">
          <img
            src={HeroSection}
            alt="HeroSectionImg"
            className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
          />
        </div>

        <div className="md:w-[60%] h-auto mb-12 transform transition duration-500 hover:scale-105">
          <img
            src={CheckOut}
            alt="CheckOutImg"
            className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={Payment}
              alt="PaymentImg"
              className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
          <div className="w-[500px] h-auto transform transition duration-500 hover:scale-105">
            <img
              src={ThankPurchase}
              alt="ThankPurchaseImg"
              className="object-cover rounded-xl border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
