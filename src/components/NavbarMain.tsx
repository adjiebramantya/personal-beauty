"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Cart from "./Cart";

const menu = [
  { menu: "Home", href: "/" },
  { menu: "Product", href: "/products" },
  { menu: "About Us", href: "/about-us" },
];

export default function NavbarMain() {
  const pathName = usePathname();

  return (
    <Navbar isBordered className="drop-shadow-md">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((item, index) => {
          const isActive = pathName === item.href;
          let inputProps;
          if (isActive) {
            inputProps = {
              isActive: true,
            };
          }

          return (
            <NavbarItem {...inputProps} key={index}>
              <Link
                color={isActive ? undefined : "foreground"}
                href={item.href}
              >
                {item.menu}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Cart />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
