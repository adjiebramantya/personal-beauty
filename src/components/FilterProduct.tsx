"use client";
import currency from "@/utils/currency";
import {
  Checkbox,
  CheckboxGroup,
  Slider,
  SliderValue,
} from "@nextui-org/react";
import React, { useState } from "react";
import Button from "./Button";

export default function FilterProduct() {
  const [price, setPrice] = useState<SliderValue>([100000, 500000]);

  return (
    <div className="rounded-xl p-6 shadow-xl w-[100%] h-[100%]">
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg mb-3">Series</p>
        <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-5 md:grid-cols-1 gap-1">
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
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
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg my-3">Type</p>
        <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-5 md:grid-cols-1 gap-1 mb-10">
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </div>
      </div>
    </div>
  );
}
