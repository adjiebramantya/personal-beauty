import React from "react";

const whyUs = [
  {
    title: "Legalitas Resmi Personal Beauty",
    description:
      "Personal Beauty telah bersertifikasi BPOM dan Halal MUI. Memiliki izin resmi klinik dan surat izin praktek dokter dan apoteker.",
    image: "/whyUs/legalitas.png",
  },
  {
    title: "Reseller Tersebar Seluruh Indonesia",
    description:
      "Produk mudah didapat dan permintaan pasar yang besar. Dengan pelayanan online yang responsif.",
    image: "/whyUs/reseller.png",
  },
  {
    title: "Sesuai Dengan Standar Protokol",
    description:
      "Menjaga Kebersihan dan Mematuhi Protokol Kesehatan sebagai salah satau bentuk pencegahan covid-19.",
    image: "/whyUs/protokol.png",
  },
];

export default function WhyUs() {
  return (
    <div className="grid grid-cols-3 gap-4 place-items-center mx-80">
      {whyUs.map((item) => {
        return (
          <div className="text-center mx-[20%]">
            <img src={item.image} className="mx-auto w-[50%] block" alt="" />
            <p className="font-bold text-primary text-lg mb-3">{item.title}</p>
            <p className="font-light text-secondary">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
