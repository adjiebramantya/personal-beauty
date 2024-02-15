import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <img src="/brand_logo.png" />
    </Link>
  );
}
