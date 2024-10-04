import { useEffect, useState } from "react";
import chicken from "../../assets/img/hero.png";
import kfc_logo from "../../assets/img/kfc-logo.svg";
import logo_menu from "../../assets/img/logo-menu.svg";
import ExploreMenuComponents from "../../components/ExploreMenu/ExploreMenuComponents";
import FoodItemComponents from "../../components/FoodItem/FoodItemComponents";
import app_download from "../../assets/img/app-photo.png";
import appstore_logo from "../../assets/img/appstore_logo.png";
import playstore_logo from "../../assets/img/playstore_logo.png";
import NewsComponents from "../../components/News/NewsComponents";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [category, setCategory] = useState("Special");

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <section id="home" className="bg-hitam px-4 pb-8 pt-20 md:px-12 md:pt-28">
        <div className="container mx-auto grid grid-cols-1 items-center md:grid-cols-2">
          <div className="justify-self-start text-white md:justify-self-center">
            <h1 className="animate__animated animate__fadeInLeft animate__slow mb-8 max-w-full text-5xl md:max-w-lg lg:text-7xl">
              Your <span className="text-merah">Favorite</span> Food Delivered{" "}
              <span className="text-merah">Hot</span> & Fresh
            </h1>
            <p className="animate__animated animate__fadeInLeft mb-12 max-w-full font-poppins text-sm md:mb-14 md:max-w-xs lg:mb-20 lg:max-w-md">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & so you can cook
            </p>
            <a
              href="#menu"
              className="animate__animated animate__fadeIn animate__slow rounded-full bg-merah px-4 py-3 text-sm hover:bg-red-700 md:px-8 md:py-4"
            >
              Order Now <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
          <div className="mt-10 justify-self-center md:mt-0">
            <img
              src={chicken}
              className="animate__animated animate__fadeIn animate__slow w-full"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex items-end justify-between px-0 md:mt-10 md:items-center lg:mt-0 lg:px-8">
          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="https://www.instagram.com/fahmi_art17"
              className="text-xl text-white transition-all hover:text-merah md:text-2xl"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="#"
              className="text-xl text-white transition-all hover:text-merah md:text-2xl"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
            <a
              href="https://web.facebook.com/ppi.fahmi"
              className="text-xl text-white transition-all hover:text-merah md:text-2xl"
            >
              <i className="ri-facebook-line"></i>
            </a>
          </div>
          <div className="flex flex-col gap-1 font-poppins text-white md:gap-2">
            <p className="text-right text-xs text-merah md:text-sm">
              Our Contact
            </p>
            <p className="md:text-md text-xs">(+62)821-3422-0171</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-aboutImage bg-cover bg-center bg-no-repeat px-4 pb-20 pt-24 md:bg-contain md:px-12 md:pt-28">
        <div className="mb-14 flex justify-center">
          <img src={kfc_logo} className="w-28 lg:w-32" alt="" />
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-0 md:flex-row md:justify-between md:gap-14 md:px-12 lg:gap-32">
          <div className="w-full self-start md:w-1/2">
            <h3 className="mb-6 text-3xl font-black md:mb-10 md:text-xl lg:text-2xl">
              <span className="text-merah">K</span>entucky{" "}
              <span className="text-merah">F</span>ried{" "}
              <span className="text-merah">C</span>hicken
            </h3>
            <p className="text-base lg:text-xl">
              Our delivery service works for you every day from 10:00 to 22:00,
              Orders are accepted until 21:45
            </p>
          </div>
          <div className="hidden h-32 w-[3px] self-center justify-self-center bg-merah md:block"></div>
          <div className="w-full font-poppins text-sm font-semibold md:w-1/2 md:text-xs lg:text-sm">
            <span className="text-merah">Draw your attention to!</span> All
            trademarks belong to the {"KFS"} company and are used on this site
            solely to provide information about the manufacturer of the
            delivered products. The{" "}
            <span className="text-merah">{"KFS"} company</span> does not provide
            home delivery service everywhere. The prices for the delivered
            products presented on this website.{" "}
            <span className="text-merah">Include a fee for</span> the service of
            information processing, assembly and verification of the order,
            therefore, they differ from the prices for products in{" "}
            <span className="text-merah">the KFS restaurants</span>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 pb-20 pt-24 md:px-12 md:pt-28">
        <div className="conatainer relative mx-auto">
          <div className="flex items-center justify-center gap-2">
            <img src={logo_menu} className="w-24 md:w-32" alt="" />
            <h1 className="text-4xl md:text-5xl">Menu</h1>
          </div>
          <ExploreMenuComponents
            category={category}
            setCategory={setCategory}
          />
          <FoodItemComponents category={category} />
        </div>
      </section>

      {/* Appendix Section */}
      <section
        id="appendix"
        className="bg-aboutImage bg-cover bg-center bg-no-repeat px-4 pb-20 pt-24 md:bg-contain md:px-12 md:pt-28"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2">
            <img src={logo_menu} className="w-24 md:w-32" alt="" />
            <h1 className="text-4xl md:text-5xl">Appendix</h1>
          </div>
          <div className="mt-14 grid grid-cols-1 md:mt-24 md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h1 className="max-w-full text-5xl md:max-w-[550px] md:self-center lg:text-7xl">
                Order your food quick and simple
              </h1>
              <div className="flex items-center justify-center gap-4 md:ml-0 md:justify-normal lg:ml-5">
                <a href="#">
                  <img
                    className="h-14 w-36 lg:h-14 lg:w-40"
                    src={playstore_logo}
                    alt="Playstore"
                  />
                </a>
                <a href="#">
                  <img
                    className="h-14 w-36 lg:h-14 lg:w-40"
                    src={appstore_logo}
                    alt="Appstore"
                  />
                </a>
              </div>
            </div>
            <div className="mt-10 w-full md:mt-0">
              <img src={app_download} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="px-4 pb-20 pt-24 md:px-12 md:pt-28">
        <div className="conatainer relative mx-auto">
          <div className="flex items-center justify-center gap-2">
            <img src={logo_menu} className="w-24 md:w-32" alt="" />
            <h1 className="text-4xl md:text-5xl">News</h1>
          </div>
          <NewsComponents />
        </div>
      </section>
    </>
  );
};

export default HomePage;
