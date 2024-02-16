import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="grid md:grid-cols-4 gap-10 px-[15%] pt-[5%] pb-[10%]">
        <div>
          <h3 className="font-bold text-xl text-white mb-3">Contact Us</h3>
          <p className="text-white font-extralight text-sm">
            Open from Monday to Saturday
            <br /> 09.00 WIB – 17.00 WIB
            <br /> (0331) 339999
            <br /> Jl. Kalimantan No.64, Kec. Sumbersari,
            <br /> Kabupaten Jember,
            <br />
            Jawa Timur 68121
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-white mb-3">
            Customer Service
          </h3>
          <p className="text-white font-extralight text-sm">
            Open from Monday to Saturday
            <br /> 09.00 WIB – 17.00 WIB
            <br /> (0331) 339999
            <br /> Jl. Kalimantan No.64, Kec. Sumbersari,
            <br /> Kabupaten Jember,
            <br />
            Jawa Timur 68121
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-white mb-3">About</h3>
          <p className="text-white font-extralight text-sm">
            Open from Monday to Saturday
            <br /> 09.00 WIB – 17.00 WIB
            <br /> (0331) 339999
            <br /> Jl. Kalimantan No.64, Kec. Sumbersari,
            <br /> Kabupaten Jember,
            <br />
            Jawa Timur 68121
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-white mb-3">Social Media</h3>
          <p className="text-white font-extralight text-sm">
            Follow us on social media to find out the latest update for our
            progess.
          </p>
          <div className="flex mt-3">
            <Link href="/" className="me-3">
              <span>
                <IoLogoFacebook className="text-white text-3xl" />
              </span>
            </Link>
            <Link href="/" className="me-3">
              <span>
                <AiFillInstagram className="text-white text-3xl" />
              </span>
            </Link>
            <Link href="/" className="me-3">
              <span>
                <IoLogoTwitter className="text-white text-3xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="h-[1px] w-[75%] bg-white" />
      </div>
      <div className="text-center text-white text-sm font-thin p-4">
        &copy; 2023 personal beauty. All Right Reserved
      </div>
    </footer>
  );
}
