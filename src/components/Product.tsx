import React from "react";

export default function Product() {
  return (
    <div className="rounded-2xl inline w-fit p-5 hover:shadow-2xl">
      <img src="/product.png" className="rounded md:h-60 md:w-60" alt="" />
      <div className="md:flex md:justify-between mt-4">
        <div>
          <div className="text-primary font-medium text-xs md:font-semibold md:text-base">
            Acne Series
          </div>
          <div className="text-third italic text-xs font-light md:text-base">
            Toner Acne Series
          </div>
        </div>
        <div>
          <div className="text-primary font-semibold text-xs md:text-base">
            Rp. 20.000
          </div>
        </div>
      </div>
    </div>
  );
}
