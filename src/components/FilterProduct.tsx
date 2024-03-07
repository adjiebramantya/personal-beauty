"use client";
import currency from "@/utils/currency";
import {
  Checkbox,
  CheckboxGroup,
  Slider,
  SliderValue,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PropsCategoryList = string[];
type PropsCategory = string[];

export default function FilterProduct() {
  const [price, setPrice] = useState<SliderValue>([100000, 500000]);
  const [categoryList, setCategoryList] = useState<PropsCategoryList | null>(
    null
  );
  const [category, setCategory] = useState<PropsCategory>([]);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const Category = async () => {
    try {
      setLoadingCategory(true);
      const res = await fetch("https://fakestoreapi.com/products/categories", {
        next: {
          revalidate: 30,
        },
      });

      if (res) {
        const data = await res.json();
        if (data) setCategoryList(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCategory(false);
    }
  };

  useEffect(() => {
    Category();
  }, []);

  useEffect(() => {
    if (category.length !== 0) {
      const params = new URLSearchParams(searchParams);
      params.set("categories", category.toString());
      router.push(`${pathname}?${params.toString()}`);
    } else {
      router.push(`${pathname}`);
    }
  }, [category]);

  return (
    <div className="rounded-xl p-6 shadow-xl w-[100%] h-[100%]">
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg mb-3">Categories</p>
        <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-5 md:grid-cols-1 gap-1">
          {categoryList
            ? categoryList.map((item: string, key: number) => (
                <Checkbox
                  value={item}
                  key={key}
                  onChange={(e) => {
                    setCategory((item) =>
                      item.includes(e.target.value)
                        ? item.filter((item) => item !== e.target.value)
                        : [...item, e.target.value]
                    );
                  }}
                >
                  {item}
                </Checkbox>
              ))
            : "loading..."}
        </div>
      </div>
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg mb-3">Price</p>
        <Slider
          color="primary"
          step={1000}
          minValue={0}
          maxValue={1000000}
          defaultValue={[100000, 500000]}
          formatOptions={{ style: "currency", currency: "IDR" }}
          onChange={setPrice}
          value={price}
          className="max-w-md"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 my-5">
          {Array.isArray(price) &&
            price.map((b, index) => (
              <div
                className="bg-primary p-3 text-white font-semibold text-sm text-center"
                key={index}
              >
                {currency(b)}
              </div>
            ))}
          <Button
            typebutton="secondary"
            className="py-2 px-5 rounded-md font-semibold"
          >
            Filter
          </Button>
        </div>
      </div>
      {/* <div className="mb-10">
        <p className="text-secondary font-bold text-lg my-3">Type</p>
        <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-5 md:grid-cols-1 gap-1 mb-10">
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </div>
      </div> */}
    </div>
  );
}
