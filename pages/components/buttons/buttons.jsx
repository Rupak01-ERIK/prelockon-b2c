import Link from "next/link";
import React from "react";

function Button() {
  return (
    <>
      <Link
        className="text-black ms-0 hover:bg-white hover:text-black text-center font-normal rounded-full bg-primary-color px-2 md:px-8 py-2 md:px-8"
        href={"#"}
      >
        Launch Your Preorder
      </Link>
    </>
  );
}

export default Button;
