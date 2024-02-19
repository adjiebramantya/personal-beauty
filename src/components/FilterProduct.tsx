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
    <div className="rounded-xl p-6 shadow-xl">
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg mb-3">Series</p>
        <CheckboxGroup defaultValue={["buenos-aires", "london"]}>
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
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
        <div className="flex my-5">
          {Array.isArray(price) &&
            price.map((b, index) => (
              <span
                className="bg-primary p-3 text-white mx-2 font-semibold text-sm"
                key={index}
              >
                {currency(b)}
              </span>
            ))}
          <Button
            typebutton="secondary"
            className=" ms-auto py-2 px-5 rounded-md font-semibold"
          >
            Filter
          </Button>
        </div>
      </div>
      <div className="mb-10">
        <p className="text-secondary font-bold text-lg my-3">Type</p>
        <CheckboxGroup
          defaultValue={["buenos-aires", "london"]}
          className="mb-10"
        >
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
}
