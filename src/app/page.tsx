import Button from "@/components/Button";
import ListProduct from "@/components/ListProduct";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* Banner */}
      <div className="bg-slate-50 h-[70%] relative py-[10%] ps-[10%] shadow-[inset_0_20px_100px_40px_rgb(0,0,0,0.2)]">
        <div className="relative w-[75%] md:w-[40%] z-[1]">
          <h1 className="text-primary text-2xl md:text-5xl font-bold">
            YOUR PERSONAL BEAUTY CARE
          </h1>
          <p className="text-secondary mt-16">
            Personal Beauty merupakan klinik kecantikan yang aman dan
            terpercaya. Berdiri dari tahun 2012 dan tetap fokus dalam memberikan
            pelayanan terbaik bagi kepuasan anda hingga mampu mendapatkan hasil
            yang sempurna.
          </p>
          <Button typeButton="primary" className="font-medium text-xl mt-20">
            BELI SEKARANG
          </Button>
        </div>
        <img
          className="absolute right-0 bottom-0 w-[70%] md:w-[40%]"
          src="/banner/Healthcare.png"
          alt=""
        />
      </div>
      {/* Best Seller */}
      <div className="m-10 md:m-28">
        <div className="md:mx-20 mb-5">
          <p className="text-third font-semibold">On Review</p>
          <p className="text-primary font-bold text-xl md:text-3xl">
            Our Bestsellers.
          </p>
        </div>
        <ListProduct />
      </div>
      {/* Why Us */}
      <div className="m-10 md:m-28">
        <div className="text-center md:mb-10">
          <p className="text-third font-semibold text-lg">Why Us</p>
          <p className="text-primary font-bold text-xl md:text-4xl">
            Why People Choose Us
          </p>
        </div>
        <WhyUs />
      </div>
      {/* All Product */}
      <div className="m-10 md:m-28">
        <div className="md:mx-20 mb-10 flex justify-between items-center">
          <div>
            <p className="text-third font-semibold text-sm md:text-base">
              All Product
            </p>
            <p className="text-primary font-bold text-xl md:text-3xl">
              Product.
            </p>
          </div>
          <div>
            <p className="text-third font-semibold text-sm md:text-base">
              VIEW ALL {">"}
            </p>
          </div>
        </div>
        <ListProduct />
      </div>
    </main>
  );
}
