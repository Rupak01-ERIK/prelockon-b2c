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
              <ul className="text-right">
                <li className="mb-3">
                  <Link href={"#"} className="font-normal text-white text-sm hover:underline">
                    Roadmap
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href={"#"}
                    className="font-normal text-white text-sm flex justify-end hover:underline"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_460_2908)">
                        <path
                          d="M16.9309 3.64138C15.6561 3.05649 14.2892 2.62556 12.8599 2.37872C12.8339 2.37396 12.8079 2.38587 12.7945 2.40966C12.6187 2.72235 12.4239 3.13024 12.2876 3.45087C10.7504 3.22071 9.22098 3.22071 7.71527 3.45087C7.57887 3.12314 7.37707 2.72235 7.20047 2.40966C7.18707 2.38665 7.16105 2.37474 7.13504 2.37872C5.7066 2.62474 4.33965 3.05567 3.0641 3.64138C3.05305 3.64614 3.04359 3.65407 3.0373 3.66439C0.444491 7.53802 -0.265821 11.3165 0.0826161 15.048C0.0841786 15.0663 0.094452 15.0837 0.108632 15.0949C1.8193 16.3511 3.47641 17.1138 5.10269 17.6193C5.12871 17.6273 5.15629 17.6178 5.17285 17.5963C5.55754 17.071 5.90047 16.517 6.19449 15.9345C6.21183 15.9004 6.19527 15.8599 6.1598 15.8464C5.61586 15.6401 5.09793 15.3885 4.59969 15.1028C4.56027 15.0798 4.55711 15.0234 4.5934 14.9965C4.69824 14.9179 4.80312 14.8361 4.90324 14.7536C4.92137 14.7385 4.9466 14.7354 4.96789 14.7449C8.24102 16.2393 11.7846 16.2393 15.0191 14.7449C15.0404 14.7345 15.0656 14.7377 15.0845 14.7528C15.1846 14.8353 15.2895 14.9179 15.3951 14.9964C15.4314 15.0234 15.429 15.0798 15.3896 15.1028C14.8914 15.394 14.3734 15.64 13.8287 15.8456C13.7932 15.8591 13.7775 15.9004 13.7948 15.9345C14.0952 16.5162 14.4381 17.0701 14.8157 17.5955C14.8315 17.6177 14.8598 17.6273 14.8859 17.6193C16.52 17.1138 18.1771 16.3511 19.8878 15.0948C19.9028 15.0837 19.9123 15.067 19.9138 15.0488C20.3309 10.7347 19.2154 6.98724 16.9568 3.66517C16.9513 3.65407 16.9419 3.64614 16.9309 3.64138ZM6.68336 12.7759C5.69793 12.7759 4.88594 11.8712 4.88594 10.7601C4.88594 9.64903 5.68215 8.74431 6.68336 8.74431C7.69238 8.74431 8.49652 9.65696 8.48074 10.7601C8.48074 11.8712 7.68449 12.7759 6.68336 12.7759ZM13.3289 12.7759C12.3436 12.7759 11.5316 11.8712 11.5316 10.7601C11.5316 9.64903 12.3278 8.74431 13.3289 8.74431C14.338 8.74431 15.1421 9.65696 15.1264 10.7601C15.1264 11.8712 14.338 12.7759 13.3289 12.7759Z"
                          fill="#5865F2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_2908">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Join Discord{" "}
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
                  <Link href={"#"} className="font-normal text-white text-sm hover:underline">
                    Request Early Access
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="font-normal text-white text-sm hover:underline">
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
