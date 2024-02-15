import React from "react";
import Product from "./Product";

export default function ListProduct() {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-center">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
