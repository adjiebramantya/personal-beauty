import React from "react";
import Product from "./Product";

type ListProductProps = {
  cols?: number;
};

export default function ListProduct({ cols = 4 }: ListProductProps) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-${cols} gap-4 place-items-center`}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
