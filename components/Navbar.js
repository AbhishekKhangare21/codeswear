import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <Image src="/logo.png" alt="" width={200} height={40} />
      </div>
      <div className="nav">
        <ul className="flex">
          <li>Tshirts</li>
          <li>Hoodies</li>
          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
