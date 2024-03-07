"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FilterProduct from "./FilterProduct";
import { IoFilter } from "react-icons/io5";

export default function FilterProductButton() {
  const [filter, setFilter] = useState(false);
  return (
    <div>
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
        <div
          className={`w-[100%] h-screen left-0 overflow-auto fixed z-10 bg-white`}
        >
          <FilterProduct />
        </div>
      )}
    </div>
  );
}
