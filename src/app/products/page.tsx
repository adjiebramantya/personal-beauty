import FilterProduct from "@/components/FilterProduct";
import FilterProductButton from "@/components/FilterProductButton";
import ListProduct from "@/components/ListProduct";
import { ScrollShadow } from "@nextui-org/react";
import React from "react";

// type Props = {
//   searchParams?;
// };

export default function Product({
  searchParams,
}: {
  searchParams: { categories: string };
}) {
  const { categories } = searchParams;
  return (
    <div className="md:m-12 m-2">
      <div className="flex justify-between relative overflow-auto">
        <div className="w-[30%] hidden md:inline sticky top-0 p-10">
          <FilterProduct />
        </div>
        <ScrollShadow hideScrollBar className="flex-1 h-dvh pb-28">
          <ListProduct cols={3} category={categories} />
        </ScrollShadow>
        <FilterProductButton />
      </div>
    </div>
  );
}
