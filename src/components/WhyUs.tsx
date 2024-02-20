import Image from "next/image";
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
    <div className="grid md:grid-cols-3 gap-4 place-items-center md:mx-[5%]">
      {whyUs.map((item, index) => {
        return (
          <div className="text-center md:mx-[20%]" key={index}>
            <div className="mx-auto w-[50%] block relative">
              <Image src={item.image} fill={true} alt="" />
            </div>
            <p className="font-bold text-primary text-lg mb-3">{item.title}</p>
            <p className="font-light text-secondary">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
