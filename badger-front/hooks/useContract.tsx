import { ethers } from "ethers";
import { useState, useEffect, useMemo } from "react";

export const useContract = () => {
  const [eth, setEth] = useState<any>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      setEth(window.ethereum);
      console.log(window.ethereum);
    }
  }, []);

  useEffect(() => {
    if (eth) {
      const factory = getContract(eth);
      setContract(factory);
      console.log(factory);
    }
  }, [eth]);

  const connect = () => {
    eth.request({ method: "eth_requestAccounts" }).then((accounts) => {
      setConnected(true);
    });
  };

  return { contract, connect };
};

const getContract = (eth: any) => {
  let abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];
  let address = "0x7f070975d6a1E619dC6AF00EebdBB0F4936aEB47";
  let provider = new ethers.providers.Web3Provider(eth);
  let signer = provider.getSigner();
  return new ethers.Contract(address, abi, signer);
};
