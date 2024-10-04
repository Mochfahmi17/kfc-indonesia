import kfc_logo from "../../assets/img/kfc-logo.svg";
import logo_menu from "../../assets/img/logo-menu.svg";
import appstore_logo from "../../assets/img/appstore_logo.png";
import playstore_logo from "../../assets/img/playstore_logo.png";

const FooterComponents = () => {
  return (
    <footer className="relative bg-hitam px-4 py-24">
      <div className="container mx-auto flex flex-col items-start gap-12 md:flex-row md:justify-between lg:justify-around">
        <div className="flex flex-col">
          <div className="-mt-6 flex items-center gap-4">
            <img className="w-20" src={kfc_logo} alt="" />
            <img className="w-20" src={logo_menu} alt="" />
          </div>
          <div className="content mt-8 text-white">
            <h2 className="text-2xl md:text-xl lg:text-2xl">
              <span className="text-merah">K</span>entucky{" "}
              <span className="text-merah">F</span>ried{" "}
              <span className="text-merah">C</span>hicken
            </h2>
            <p className="mt-6 max-w-full font-poppins text-sm md:max-w-60 md:text-xs lg:text-sm">
              Our delivery service works for you every day from 10:00 to 22:00,
              Orders are accepted until 21:45
            </p>
          </div>
        </div>
        <div className="font-poppins">
          <h3 className="text-merah">Helpful Links</h3>
          <div className="h-[2px] w-3/4 bg-merah"></div>
          <div className="mt-8 flex items-center gap-14 text-sm text-white md:gap-6 md:text-xs lg:gap-8 lg:text-sm">
            <ul className="flex flex-col gap-6">
              <li className="transition-all hover:text-merah">
                <a href="/">
                  <i className="ri-arrow-right-s-fill text-merah"></i> Home
                </a>
              </li>
              <li className="hover:text-merah">
                <a href="#">
                  <i className="ri-arrow-right-s-fill text-merah"></i>{" "}
                  Promotions
                </a>
              </li>
              <li className="hover:text-merah">
                <a href="#menu">
                  <i className="ri-arrow-right-s-fill text-merah"></i> Chicken
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-6">
              <li className="hover:text-merah">
                <a href="#menu">
                  <i className="ri-arrow-right-s-fill text-merah"></i> Meals
                </a>
              </li>
              <li className="hover:text-merah">
                <a href="#">
                  <i className="ri-arrow-right-s-fill text-merah"></i> Fills up
                </a>
              </li>
              <li className="hover:text-merah">
                <a href="#menu">
                  <i className="ri-arrow-right-s-fill text-merah"></i> Drinks
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-poppins">
          <h3 className="text-merah">Contact</h3>
          <div className="h-[2px] w-3/4 bg-merah"></div>
          <div className="mt-8 text-sm md:text-xs lg:text-sm">
            <div className="flex flex-col gap-6 text-white">
              <div className="flex items-center gap-4">
                <i className="ri-phone-line"></i>
                <p>(+62)821-3422-0171</p>
              </div>
              <div className="flex items-center gap-4">
                <i className="ri-mail-line"></i>
                <p>mochammadfahmiks@gmail.com</p>
              </div>
              <div className="mt-2 flex items-center justify-around text-2xl md:text-xl lg:text-2xl">
                <a
                  href="https://www.instagram.com/fahmi_art17"
                  className="transition-all hover:text-merah"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="" className="transition-all hover:text-merah">
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a
                  href="https://web.facebook.com/ppi.fahmi"
                  className="transition-all hover:text-merah"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-merah px-4 py-4 md:justify-between lg:px-24">
        <p className="font-poppins text-xs text-white md:text-start">
          Copyright 2024 ©Mochammad Fahmi - All Right Reserved.
        </p>
        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          <a href="">
            <img src={playstore_logo} className="md:h-9 md:w-24" alt="" />
          </a>
          <a href="">
            <img src={appstore_logo} className="md:h-9 md:w-24" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
