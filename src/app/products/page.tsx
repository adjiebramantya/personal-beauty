"use client";
import FilterProduct from "@/components/FilterProduct";
import ListProduct from "@/components/ListProduct";
import { ScrollShadow } from "@nextui-org/react";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

export default function Product() {
  const [filter, setFilter] = useState(false);

  return (
    <div className="md:m-12 m-2">
      <div className="flex justify-between relative overflow-auto">
        <div className="w-[30%] hidden md:inline sticky top-0 p-10">
          <FilterProduct />
        </div>
        <ScrollShadow hideScrollBar className="flex-1 h-dvh pb-28">
          <ListProduct cols={3} />
        </ScrollShadow>
        <div
          className="md:hidden fixed bottom-8 right-8 shadow-large bg-primary p-3 text-white rounded-full z-20"
          onClick={(e) => setFilter(!filter)}
        >
          {filter === true ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <IoFilter className="h-6 w-6" />
          )}
        </div>
        {filter && (
          <div className="w-[100%] h-screen left-0 overflow-auto fixed z-10 bg-white">
            <FilterProduct />
          </div>
        )}
      </div>
    </div>
  );
}
