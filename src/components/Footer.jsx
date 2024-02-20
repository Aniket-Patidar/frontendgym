// components/Footer.js

import React from "react";
import { MdEmail } from "react-icons/md";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import {
  RiFacebookCircleFill,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">

      <div className="sub-footer  justify-between  w-full  max-w-screen-xl">
        {/* <div className="flex gap-[34px] flex-wrap"> */}
          <div className="part-1">
            <h1>Popular Locations</h1>
            <ul>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
            </ul>
          </div>
          <div className="part-2">
            <h1>About</h1>
            <ul>
              <li>Product</li>
              <li>Store Locations</li>
              <li>Join Distributor</li>
              <li>Contact Page</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="part-3">
            <h1>Links</h1>
            <ul>
              <li>Affiliate Member</li>
              <li>FAQ</li>
              <li>Market Place</li>
              <li>Gallery</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        {/* </div> */}
        <div className="part-4  relative right-0">
          <h1>Let's Talk</h1>
          <ul>
            <li className="flex items-center gap-1 ">
              <RiMapPinLine className="text-[#FAB207] cursor-pointer" /> Office
              Chowdhry Mohalla near Munazir Building
            </li>
            <li className="flex items-center gap-1 ">
              <MdEmail className="text-[#FAB207] cursor-pointer" />{" "}
              aniketpatidar76@gmail.com
            </li>
            <li className="flex items-center gap-1 ">
              <RiPhoneLine className="text-[#FAB207] cursor-pointer" />{" "}
              8100381856
            </li>
            <li className="flex items-center gap-1 ">
              <RiPhoneLine className="text-[#FAB207] cursor-pointer" />{" "}
              5656569896
            </li>
          </ul>
        </div>
      </div>
      </div>

      <div className="flex items-center justify-center bg-black">
        <footer className="text-white py-4  max-w-screen-xl ">
          <div className="flex w-full items-center justify-between   ">
            <div className="">
              <h1>© 2024 FoodoSnx -Chips</h1>
            </div>

            <div className="flex items-center gap-4">
              <RiFacebookCircleFill className="hover:text-[#FAB207] cursor-pointer" />
              <RiTwitterLine className="hover:text-[#FAB207] cursor-pointer" />
              <RiInstagramLine className="hover:text-[#FAB207] cursor-pointer" />
              <RiLinkedinFill className="hover:text-[#FAB207] cursor-pointer" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
