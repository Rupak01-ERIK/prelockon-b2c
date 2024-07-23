import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="bg-section-background-color py-16 relative">
        <img
          className="pointer-events-none absolute top-0 opacity-10 h-full	w-full"
          src="./expires-banner.png"
          alt=""
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="md:flex gap-8 mb-12">
            <div className="md:w-3/4 w-full">
              <h6 className="text-white text-lg font-bold mb-3">
                We are safeguarding consumers while empowering entrepreneurs,
                producers and creators. Every preorder in our platform will be
                Transferable,Tradable and Verifiable before it expires.
              </h6>
              <p className="text-sm text-gray-400">
                Copyright © 2024. All Rights Reserved.
              </p>
            </div>
            <div className="md:w-1/4 w-full">
              <ul className="md:text-right md:mt-0 mt-10 text-center">
                <li className="mb-3">
                  <Link
                    href={"#"}
                    className="font-normal text-white text-sm hover:underline"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href={"#"}
                    className="font-normal text-white text-sm flex md:justify-end justify-center hover:underline"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_818_2193)">
                        <path
                          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                          fill="#039BE5"
                        />
                        <path
                          d="M4.57584 9.78338L14.2175 6.06588C14.665 5.90422 15.0558 6.17505 14.9108 6.85172L14.9117 6.85088L13.27 14.5851C13.1483 15.1334 12.8225 15.2667 12.3667 15.0084L9.86667 13.1659L8.66084 14.3276C8.5275 14.4609 8.415 14.5734 8.15667 14.5734L8.33417 12.0292L12.9675 7.84338C13.1692 7.66588 12.9225 7.56588 12.6567 7.74255L6.93084 11.3476L4.46251 10.5776C3.92667 10.4076 3.91501 10.0417 4.57584 9.78338Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_818_2193">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Join Telegram
                    <svg
                      className="ml-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1667 5C13.9167 5 13.75 5.08333 13.5833 5.25L5.25 13.5833C4.91667 13.9167 4.91667 14.4167 5.25 14.75C5.58333 15.0833 6.08333 15.0833 6.41667 14.75L14.75 6.41667C15.0833 6.08333 15.0833 5.58333 14.75 5.25C14.5833 5.08333 14.4167 5 14.1667 5Z"
                        fill="white"
                      />
                      <path
                        d="M14.1663 5.00008H6.66634C6.16634 5.00008 5.83301 5.33341 5.83301 5.83341C5.83301 6.33341 6.16634 6.66675 6.66634 6.66675H13.333V13.3334C13.333 13.8334 13.6663 14.1667 14.1663 14.1667C14.6663 14.1667 14.9997 13.8334 14.9997 13.3334V5.83341C14.9997 5.33341 14.6663 5.00008 14.1663 5.00008Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href={"#"}
                    className="font-normal text-white text-sm hover:underline"
                  >
                    Launch Your Preorder
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-normal text-white text-sm hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </dl>
          <div className="w-full">
            <img
              width={"100%"}
              height={"auto"}
              src="./footer-logo.png"
              alt=""
            />
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION */}
    </>
  );
}

export default Footer;
