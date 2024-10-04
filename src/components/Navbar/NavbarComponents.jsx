import { useContext, useEffect, useState } from "react";
import kfc_logo from "../../assets/img/logo.svg";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setMenu(false);
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <header
        className={`animate__animated animate__slideInDown font-poppins ${scroll ? "fixed md:animate-slideIn md:bg-hitam" : "fixed md:absolute"} z-50 flex w-full items-center bg-hitam p-4 duration-500 ease-in-out md:px-12`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-28 md:w-36">
            <Link to="/#home" onClick={() => setActive("home")}>
              <img src={kfc_logo} className="w-full" alt="KFC" />
            </Link>
          </div>
          <nav>
            <ul
              className={`absolute right-0 top-full flex min-h-screen w-3/4 items-center justify-center bg-hitam bg-opacity-80 backdrop-blur-md duration-300 ease-in-out md:w-max md:translate-x-0 md:bg-transparent md:backdrop-blur-0 ${menu ? "translate-x-0" : "translate-x-full"} flex-col gap-12 md:static md:flex md:min-h-0 md:flex-row`}
            >
              <li>
                <Link
                  onClick={() => setActive("home")}
                  className="group text-center text-xl font-medium text-white md:text-sm"
                  to="/#home"
                >
                  Home
                  <div
                    className={`h-[3px] w-full scale-0 bg-merah ${active == "home" ? "scale-100" : "scale-0"} rounded-full transition-all group-hover:scale-100`}
                  ></div>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActive("menu")}
                  className="group text-center text-xl font-medium text-white md:text-sm"
                  to="/#menu"
                >
                  Menu
                  <div
                    className={`h-[3px] w-full scale-0 bg-merah ${active == "menu" ? "scale-100" : "scale-0"} rounded-full transition-all group-hover:scale-100`}
                  ></div>
                </Link>
              </li>
              <li>
                <a
                  onClick={() => setActive("appendix")}
                  className="group text-center text-xl font-medium text-white md:text-sm"
                  href="#appendix"
                >
                  Appendix
                  <div
                    className={`h-[3px] w-full scale-0 bg-merah ${active == "appendix" ? "scale-100" : "scale-0"} rounded-full transition-all group-hover:scale-100`}
                  ></div>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setActive("news")}
                  className="group text-center text-xl font-medium text-white md:text-sm"
                  href="#news"
                >
                  News
                  <div
                    className={`h-[3px] w-full scale-0 bg-merah ${active == "news" ? "scale-100" : "scale-0"} rounded-full transition-all group-hover:scale-100`}
                  ></div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 md:ml-12 md:gap-8 lg:ml-32">
          <a
            href=""
            className="text-xl font-normal text-white transition-all hover:text-merah md:text-2xl"
          >
            <i className="ri-user-line"></i>
          </a>
          <Link
            to="/cart"
            onClick={() => setActive("cart")}
            className={`${active == "cart" ? "text-merah" : "text-white"} relative text-xl font-normal transition-all hover:text-merah md:text-2xl`}
          >
            {getTotalCartAmount() ? (
              <span className="animate__animated animate__bounceIn absolute right-0 top-0 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-merah"></span>
              </span>
            ) : (
              <></>
            )}
            <i className="ri-shopping-cart-line"></i>
          </Link>
          <div
            onClick={showMenu}
            className="navbar-extra flex h-4 w-5 flex-col justify-between md:hidden"
          >
            <div
              className={`h-[2px] w-1/2 origin-right duration-300 ease-linear ${menu ? "w-full -rotate-45 bg-merah" : "w-1/2 rotate-0 bg-white"} rounded-full`}
            ></div>
            <div
              className={`h-[2px] w-full duration-300 ease-linear ${menu ? "scale-0" : "scale-100"} rounded-full bg-white`}
            ></div>
            <div
              className={`h-[2px] w-1/2 origin-right duration-300 ease-linear ${menu ? "w-full rotate-45 bg-merah" : "w-1/2 rotate-0 bg-white"} self-end rounded-full`}
            ></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponents;
