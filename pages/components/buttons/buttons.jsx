import Link from "next/link";
import React from "react";

function Button() {
  return (
    <>
      <Link
        className="text-black text-center font-normal rounded-full bg-primary-color px-2 md:px-8 py-2 md:px-8"
        href={"#"}
      >
        Request Early Access
      </Link>
    </>
  );
}

export default Button;
