import React from "react";

export default function currency(price: number) {
  let rupiah = new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "IDR",
  });

  return rupiah.format(price);
}
