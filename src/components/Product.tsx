import React from "react";

export default function Product() {
  return (
    <div className="rounded-2xl inline w-fit p-5 hover:shadow-2xl">
      <img src="/product.png" className="rounded h-60 w-60" alt="" />
      <div className="flex justify-between mt-4">
        <div>
          <div className="text-primary font-semibold"> Acne Series</div>
          <div className="text-third italic font-light"> Toner Acne Series</div>
        </div>
        <div>
          <div className="text-primary font-semibold">Rp. 20.000</div>
        </div>
      </div>
    </div>
  );
}
