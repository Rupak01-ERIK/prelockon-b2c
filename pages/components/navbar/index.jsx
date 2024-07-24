"use client";

import React, { useEffect, useState } from "react";
import Button from "../buttons/buttons";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isActivemenu, setIsActivemenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsActivemenu(!isActivemenu);
  };

  const closeHandleClick = () => {
    setIsActivemenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll top
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="return-top"
        className={`fixed z-40 cursor-pointer hover:-translate-y-1 duration-75 right-9 bottom-9 ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-up-filled"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#06FACE"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
            strokeWidth="0"
            fill="#06FACE"
          />
        </svg>
      </div>

      <nav
        className={`md:fixed relative top-0 w-full z-50 p-4 duration-300 ${
          scrolled ? "fixed-top" : "fixed top-0 w-full z-50 p-4 duration-300"
        }`}
      >
        <img
          className={`${
            scrolled
              ? "h-full w-full absolute top-0 w-auto hidden"
              : "h-full w-full absolute top-0 w-auto hidden"
          }`}
        />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="bg-navbar-1 rounded-full py-4 px-7 relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    className="h-8 w-auto"
                    src="/Logo.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div
                className={`sm:ml-6 md:block ${
                  isActivemenu ? "mobilemenu mobileActiveMenu" : "mobilemenu"
                }`}
              >
                <div className="inner-mobileActiveMenu flex align-middle space-x-4 items-center">
                  <div
                    className="md:hidden block ml-auto w-fit menuCloseMobile"
                    onClick={closeHandleClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="30"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#06FACE"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>
                  <Link
                    href="#"
                    className="font-normal text-white hover:text-white fontOutfit text-base hover:underline"
                  >
                    Roadmap
                  </Link>
                  <Link
                    href={"#"}
                    className="flex items-center font-normal text-white hover:text-white text-base hover:underline"
                  >
                    <svg className="me-2"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_805_2)">
                        <path
                          d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                          fill="#039BE5"
                        />
                        <path
                          d="M4.57581 10.2833L14.2175 6.56576C14.665 6.4041 15.0558 6.67493 14.9108 7.3516L14.9116 7.35076L13.27 15.0849C13.1483 15.6333 12.8225 15.7666 12.3666 15.5083L9.86664 13.6658L8.66081 14.8274C8.52747 14.9608 8.41497 15.0733 8.15664 15.0733L8.33414 12.5291L12.9675 8.34326C13.1691 8.16576 12.9225 8.06576 12.6566 8.24243L6.93081 11.8474L4.46247 11.0774C3.92664 10.9074 3.91497 10.5416 4.57581 10.2833Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_805_2">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Join Telegram
                    <svg
                      className="ms-2"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1667 5.5C13.9167 5.5 13.75 5.58333 13.5833 5.75L5.25 14.0833C4.91667 14.4167 4.91667 14.9167 5.25 15.25C5.58333 15.5833 6.08333 15.5833 6.41667 15.25L14.75 6.91667C15.0833 6.58333 15.0833 6.08333 14.75 5.75C14.5833 5.58333 14.4167 5.5 14.1667 5.5Z"
                        fill="white"
                      />
                      <path
                        d="M14.1663 5.50008H6.66634C6.16634 5.50008 5.83301 5.83341 5.83301 6.33341C5.83301 6.83341 6.16634 7.16675 6.66634 7.16675H13.333V13.8334C13.333 14.3334 13.6663 14.6667 14.1663 14.6667C14.6663 14.6667 14.9997 14.3334 14.9997 13.8334V6.33341C14.9997 5.83341 14.6663 5.50008 14.1663 5.50008Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Button />
                </div>
              </div>
              <div className="sm:ml-6 md:hidden block" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="30"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#00fcd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
