import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("DogCoin");
  const dogCoin = await factory.deploy();

  await dogCoin.deployed();

  console.log(`DogCoin with totalSupply deployed to ${dogCoin.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
