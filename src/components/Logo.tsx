import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-full h-full">
        <Image src="/brand_logo.png" fill={true} alt="" />
      </div>
    </Link>
  );
}
