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
      <main className="h-screen flex flex-col justify-center items-center align-middle bg-gradient-to-r from-cyan-100 to-blue-100">
        <h1 className="text-3xl font-bold">BadgerCoin</h1>
        <input className="p-2 rounded-md" />
        <button
          onClick={() => getSymbol()}
          className="p-2 rounded-md bg-green-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 m-5"
        >
          Interact
        </button>
      </main>
    </>
  );
}
