"use-client";
import { useContract } from "@/hooks/useContract";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const { contract, connect } = useContract();

  const getBalance = async () => {
    connect();
    console.log("Contract trough hook", contract);
    if (contract) {
      const decimals = contract
        .decimals()
        .then((decimals) => console.log(decimals));
      console.log("Decimals", decimals);
      return decimals;
    }
    console.log("Dont have contract");
  };

  const getSymbol = async () => {
    connect();
    console.log("Contract trough hook", contract);
    if (contract) {
      const decimals = await contract.symbol();
      console.log("Symbol", decimals);
      return decimals;
    }
    console.log("Dont have contract");
  };

  return (
    <>
      <main className="h-screen flex flex-col justify-center items-center align-middle bg-[#1A1C1F]">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            Financial freedom
          </h2>
          <h1 className="text-white sm:text-3xl text-2xl font-medium title-font mb-4">
            Badger Coin
          </h1>
          <p className="text-gray-400 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div
          className="w-96 h-96 rounded-lg backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/40 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl "
        ></div>
      </main>
    </>
  );
}
