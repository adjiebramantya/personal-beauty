import Image from "next/image";
import React from "react";

type Props = {
  category: string;
  name: string;
  image: string;
  price: number;
};

const productNameLength = 20;

export default function Product({ category, name, price, image }: Props) {
  return (
    <div className="rounded-2xl inline md:w-80 p-5 hover:shadow-xl md:hover:shadow-2xl">
      <div className="w-32 h-32 md:w-60 md:h-60 relative block mx-auto">
        <Image
          src={image}
          fill={true}
          className="rounded object-fill"
          sizes="300"
          alt=""
          aria-label="true"
        />
      </div>
      <div className="md:flex md:justify-between mt-4">
        <div>
          <div className="text-primary font-medium text-xs md:font-semibold md:text-base">
            {category}
          </div>
          <div className="text-third italic text-xs font-light md:text-base">
            {name.slice(0, productNameLength) +
              (name.length > productNameLength ? "..." : "")}
          </div>
        </div>
        <div>
          <div className="text-primary font-semibold text-xs md:text-base">
            Rp. {price}
          </div>
        </div>
      </div>
    </div>
  );
}
