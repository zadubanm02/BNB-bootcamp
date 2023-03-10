import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("DogCoin.sol tests", async () => {
  const contractFixture = async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    const contract = await ethers.getContractFactory("DogCoin");

    return { contract, owner, otherAccount };
  };

  describe("Deplyment tests", () => {
    it("State variables set correctly", async () => {
      const { owner } = await loadFixture(contractFixture);
      const balance = await owner.getBalance();
      expect(balance).equal(2000000);
    });
  });
});
