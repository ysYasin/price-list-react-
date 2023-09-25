import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-slate-300 flex flex-col rounded-md p-3">
      <h2 className="text-center my-5">
        <span className="text-6xl font-extrabold text-rose-500">
          {price.price}
        </span>
        <span className="italic">/month</span>
      </h2>
      <h1 className="text-4xl text-center font-semibold">
        {price.membership_type}
      </h1>
      <div id="features" className="my-7 text-left">
        <p className="mb-2">
          <b>Features: </b>
        </p>
        <ul className=" list-disc px-4">
          {price.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <button className="w-full mt-auto text-white hover:bg-rose-700 transition-all bg-rose-500 rounded-md py-2 border">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
