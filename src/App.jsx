import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navebar from "./Components/Namvebar/Navebar";
import PriceList from "./Components/PriceList/PriceList";
import Recheart from "./Components/Recheart/Recheart";

function App() {
  return (
    <>
      <div>
        <Navebar></Navebar>
        <PriceList></PriceList>
        <Recheart></Recheart>
      </div>
    </>
  );
}

export default App;
