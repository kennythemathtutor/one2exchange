import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";

function App() {
  return (
    <div className="App">
      <Symfoni autoInit={true}>
        <div className="min-h-screen bg-gradient-to-bl from-yellow-200 via-yellow-400 to-yellow-700">
          <div className="border-none max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="text-black text-6xl pt-28 pb-10">
              One 2 Exchange 
            </div>
            <Swap
              tokenA="0x0F0D09DE61A2FDb2aF13DD5d2E8465C2849C313C"
              tokenB="0xDF47095bCB61953CE9De559bDA5CC77D20B6e294"
            ></Swap>
          </div>
        </div>
      </Symfoni>
    </div>
  );
}

export default App;
