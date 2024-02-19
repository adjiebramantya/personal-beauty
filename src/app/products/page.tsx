import FilterProduct from "@/components/FilterProduct";
import ListProduct from "@/components/ListProduct";
import { ScrollShadow } from "@nextui-org/react";
import React from "react";

export default function Product() {
  return (
    <div className="m-12">
      <div className="flex justify-between relative overflow-auto">
        <div className="w-[30%] sticky top-0 p-10">
          <FilterProduct />
        </div>
        <ScrollShadow hideScrollBar className="flex-1 h-dvh pb-28">
          <ListProduct cols={3} />
        </ScrollShadow>
      </div>
    </div>
  );
}
