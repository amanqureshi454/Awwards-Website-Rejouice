"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const menuContainer = useRef(null);
  const menuContainerMobile = useRef(null);
  const videoScale = useRef(null);
  const menuItemsText = useRef([]);
  const menuItemsTextMobile = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenuHandler = () => {
    setMenuOpen((open) => !open);
  };
  const menuItems = ["home", "work", "services & models", "about", "contact"];

  const animateMenu = (isOpen) => {
    if (isOpen) {
      gsap.from(menuContainer.current, {
        height: 0,
        duration: 1.2,
        ease: "power",
      });
      gsap.from(menuContainerMobile.current, {
        height: 0,
        duration: 1.2,
        ease: "power",
      });
      gsap.from(videoScale.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power1",
      });
      gsap.from(
        menuItemsText.current.map((element) => element),
        {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.2,
          ease: "back",
        }
      );
      gsap.from(
        menuItemsTextMobile.current.map((element) => element),
        {
          opacity: 0,
          // y: 100,
          delay: 0.7,
          duration: 2,
          stagger: 0.3,
          ease: "ease",
        }
      );
    }
  };

  useEffect(() => {
    animateMenu(menuOpen);
  }, [menuOpen]);

  return (
    <>
      <nav className=" lg:px-16 lg:py-10 px-6 py-8 bg-transparent absolute inset-0 z-10 ">
        <div className=" flex justify-between items-center">
          <div className="logo">
            <h5 className=" text-white lg:text-[1.5vw] md:text-[3vw] md:p-2 text-xl font-[rejoice-body] capitalize">
              the venture agency
            </h5>
          </div>
          <div className="menu-btn">
            <a
              onClick={openMenuHandler}
              className="centro text-white lg:text-[1.5vw] md:text-[3vw] md:p-2 text-xl font-[rejoice-body] capitalize"
            >
              menu
            </a>
          </div>
        </div>
      </nav>

      {/* menu code  */}
      {menuOpen && (
        <div
          ref={menuContainer}
          className="menu px-16 pt-11 overflow-y-hidden lg:block md:block sm:hidden bg-orange-600 w-full lg:h-[70%]  absolute z-20 top-0 left-0"
        >
          <div className="flex justify-between items-start">
            <div>
              <h6 className=" text-black font-[rejoice-body] mb-2 lg:text-[1.6vw] md:text-[2vw] capitalize">
                rejoiuce
              </h6>
              <div
                className=" lg:w-[400px] lg:h-[250px] md:w-[300px] md:h-[200px] object-cover"
                ref={videoScale}
              >
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source src="/imgs/home-video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex justify-between items-center mt-3">
                <h6 className=" text-black font-[rejoice-body] mb-2 lg:text-[1.2vw] md:text-[2vw] capitalize">
                  play reel
                </h6>
                <h6 className=" text-black font-[rejoice-body] mb-2 lg:text-[1.2vw] md:text-[2vw] capitalize">
                  -1:18
                </h6>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex justify-center flex-col items-start overflow-y-hidden">
                <div class="back color-1 overflow-y-hidden">
                  <div class="row columns ">
                    <ul class="menu expanded SMN_effect-31">
                      <li className="overflow-y-hidden h-auto">
                        {menuItems.map((item, index) => (
                          <a
                            data-hover={item}
                            key={index}
                            href=""
                            className="text-black menu-text font-[rejoice-body] text-[3.3vw]  capitalize cursor-pointer "
                            ref={(element) =>
                              (menuItemsText.current[index] = element)
                            }
                          >
                            <span>{item}</span>
                          </a>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <button className=" bg-transparent border border-black px-7 mt-4 lg:ml-6  py-3 rounded-sm text-black font-[rejoice-body] lg:text-[1vw] md:text-[1.5vw] capitalize hover:">
                  take a seat
                </button>
              </div>
              <div className="close">
                <a
                  onClick={openMenuHandler}
                  className=" centro text-black font-[rejoice-body]  lg:text-[1.6vw] md:text-[2.2vw] capitalize "
                >
                  close
                </a>
              </div>
            </div>
          </div>
          <div className=" border-t pt-3 border-black mt-8 flex justify-between items-center ">
            <div className=" mt-4">
              <h6 className="text-black font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] capitalize">
                tomorrow's brands, today TM
              </h6>
            </div>
            <div className=" flex justify-center items-center gap-6 mt-4">
              <h6 className=" text-black font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] capitalize">
                x
              </h6>
              <h6 className=" text-black font-[rejoice-body] lg:text-[1.2vw] md:text-[2vw] capitalize">
                instagram
              </h6>
              <h6 className=" text-black font-[rejoice-body]  lg:text-[1.2vw] md:text-[2vw] capitalize">
                linkedin
              </h6>
            </div>
          </div>
        </div>
      )}

      {/* {mobile navbar code} */}
      <div className="mobile__navbar lg:hidden md:hidden">
        {menuOpen && (
          <div
            ref={menuContainerMobile}
            className="menu px-4 py-6 overflow-y-hidden bg-orange-600 w-full h-full absolute z-20 top-0 left-0 flex justify-between items-start flex-col"
          >
            <div className="mobile__header w-full flex justify-between items-center overflow-y-hidden">
              <div className="logo text-2xl">rejoiuce</div>
              <div
                onClick={openMenuHandler}
                className="close__icon border border-black flex justify-center  font-light items-center rounded-full w-14 text-2xl text-center h-14"
              >
                &times;
              </div>
            </div>
            <div className="mobile__links w-full flex justify-start items-start flex-col overflow-y-hidden ">
              {menuItems.map((item, index) => (
                <a
                  data-hover={item}
                  key={index}
                  href=""
                  className="text-black menu-text font-[rejoice-body] lg:text-[3.3vw] p-1 text-5xl capitalize cursor-pointer"
                  ref={(element) =>
                    (menuItemsTextMobile.current[index] = element)
                  }
                >
                  <span>{item}</span>
                </a>
              ))}
            </div>
            <div className="social-links w-full flex justify-start items-start flex-col overflow-y-hidden">
              <li className="text-black font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none">
                x
              </li>
              <li className="text-black font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none">
                instagram
              </li>{" "}
              <li className="text-black font-[rejoice-body] lg:text-[1.2vw] text-xl capitalize list-none decoration-none">
                linkedin
              </li>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
