import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-[203px] h-[41px]">
        <Image src="/brand_logo.png" sizes="300" fill={true} alt="" />
      </div>
    </Link>
  );
}
