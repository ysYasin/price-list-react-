import React, { useEffect, useState } from "react";
import axios from "axios";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Recheart = () => {
  const [Phons, setPhons] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const price = parseInt(phone.slug.split("-")[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhons(phoneData);
      });
  }, []);

  return (
    <div>
      <ResponsiveContainer width="90%" height={350}>
        <BarChart
          className="text-rose-600"
          width={150}
          height={40}
          data={Phons}
        >
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recheart;
