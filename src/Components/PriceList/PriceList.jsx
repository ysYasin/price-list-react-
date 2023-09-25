import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    async function loadData() {
      const res = await fetch("/prices.json");
      const data = await res.json();
      setPrices(data);
    }
    loadData();
  }, []);
  return (
    <div className="flex items-center flex-col my-7">
      <h1 className="inline-block mx-auto text-4xl mt-2 p-7 rounded-md text-center text-black font-bold uppercase bg-emerald-200">
        Affordable price list
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mt-6 w-10/12 mx-auto">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
