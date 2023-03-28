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
               [ p-4 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/40 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl "
        >
          <h2 className="text-center text-2xl font-bold">Transfer BC</h2>
          <div className="relative flex-grow w-full mt-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 "
            />
          </div>
          <div className="relative flex-grow w-full mt-5">
            <label htmlFor="email" className="leading-7  text-sm text-gray-600">
              Address To
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 "
            />
          </div>
          <button className="my-10 flex justify-self-center text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg">
            Send
          </button>
        </div>
      </main>
    </>
  );
}
