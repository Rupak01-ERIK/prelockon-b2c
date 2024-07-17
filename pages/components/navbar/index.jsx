"use client";

import React, { useEffect, useState } from "react";
import Button from "../buttons/buttons";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 p-4 duration-300 ${scrolled ? "fixed-top" : "fixed top-0 w-full z-50 p-4 duration-300"}`}>
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
              <div className="sm:ml-6 sm:block">
                <div className="flex align-middle space-x-4 items-center">
                  <Link
                    href="/product"
                    className="font-normal mr-2 sm:mr-8 text-white hover:text-whitfontOutfit text-base"
                  >
                    Roadmap
                  </Link>
                  <a
                    href="#"
                    className="flex items-center font-normal mr-2 sm:mr-8 text-white hover:text-white text-base"
                  >
                    <svg className="me-2"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_2110)">
                        <path
                          d="M16.9309 4.14138C15.6562 3.55649 14.2892 3.12556 12.86 2.87872C12.8339 2.87396 12.8079 2.88587 12.7945 2.90966C12.6187 3.22235 12.424 3.63024 12.2876 3.95087C10.7504 3.72071 9.22101 3.72071 7.7153 3.95087C7.5789 3.62314 7.3771 3.22235 7.2005 2.90966C7.1871 2.88665 7.16108 2.87474 7.13507 2.87872C5.70663 3.12474 4.33968 3.55567 3.06413 4.14138C3.05308 4.14614 3.04362 4.15407 3.03733 4.16439C0.444522 8.03802 -0.265791 11.8165 0.0826466 15.548C0.0842091 15.5663 0.0944826 15.5837 0.108662 15.5949C1.81933 16.8511 3.47644 17.6138 5.10273 18.1193C5.12874 18.1273 5.15632 18.1178 5.17288 18.0963C5.55757 17.571 5.9005 17.017 6.19452 16.4345C6.21187 16.4004 6.1953 16.3599 6.15983 16.3464C5.61589 16.1401 5.09796 15.8885 4.59972 15.6028C4.5603 15.5798 4.55714 15.5234 4.59343 15.4965C4.69827 15.4179 4.80315 15.3361 4.90327 15.2536C4.9214 15.2385 4.94663 15.2354 4.96792 15.2449C8.24105 16.7393 11.7846 16.7393 15.0191 15.2449C15.0404 15.2345 15.0656 15.2377 15.0845 15.2528C15.1847 15.3353 15.2895 15.4179 15.3951 15.4964C15.4314 15.5234 15.429 15.5798 15.3896 15.6028C14.8914 15.894 14.3735 16.14 13.8287 16.3456C13.7933 16.3591 13.7775 16.4004 13.7949 16.4345C14.0952 17.0162 14.4382 17.5701 14.8157 18.0955C14.8315 18.1177 14.8599 18.1273 14.8859 18.1193C16.5201 17.6138 18.1772 16.8511 19.8878 15.5948C19.9028 15.5837 19.9123 15.567 19.9139 15.5488C20.3309 11.2347 19.2154 7.48724 16.9568 4.16517C16.9514 4.15407 16.9419 4.14614 16.9309 4.14138ZM6.68339 13.2759C5.69796 13.2759 4.88597 12.3712 4.88597 11.2601C4.88597 10.149 5.68218 9.24431 6.68339 9.24431C7.69241 9.24431 8.49655 10.157 8.48077 11.2601C8.48077 12.3712 7.68452 13.2759 6.68339 13.2759ZM13.329 13.2759C12.3436 13.2759 11.5316 12.3712 11.5316 11.2601C11.5316 10.149 12.3278 9.24431 13.329 9.24431C14.338 9.24431 15.1421 10.157 15.1264 11.2601C15.1264 12.3712 14.3381 13.2759 13.329 13.2759Z"
                          fill="#5865F2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_2110">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Join Discord
                    <svg className="ms-2"
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
                  </a>
                  <Button />
                </div>
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
