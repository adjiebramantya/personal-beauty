import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSearchParams } from "next/navigation";

type ListProductProps = {
  cols?: number;
  limit?: number;
  category?: string;
};

type Props = {
  title: string;
  image: string;
  category: string;
  price: number;
};

export default async function ListProduct({
  cols = 4,
  limit,
  category,
}: ListProductProps) {
  let data: string[] = [];

  const categoryArray: string[] = category ? category.split(",") : [];

  if (categoryArray.length !== 0) {
    categoryArray.map(async (item) => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${item}`,
        {
          next: {
            revalidate: 30,
          },
        }
      );

      const dataRespond = await res.json();
      data = [...dataRespond];
    });
  } else {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: {
        revalidate: 30,
      },
    });

    data = await res.json();
  }

  console.log(data);
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-${cols} gap-4 place-items-center`}
    >
      {/* {data.map((item: Props, index: number) => (
        <Product
          name={item.title}
          price={item.price}
          image={item.image}
          category={item.category}
          key={index}
        />
      ))} */}
    </div>
  );
}
