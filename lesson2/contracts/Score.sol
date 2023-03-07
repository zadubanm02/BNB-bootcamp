// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Score {
    uint256 public score;
    address owner;

    modifier onlyOwner {
        if(msg.sender == owner) {
            _;
        }
    }

    constructor() {
        score = 5;
        owner = msg.sender;
    }

    // using  uint256 public score; SAVES GAS
    //  function getScore() public view returns (uint256) {
    //     return score;
    //  }

     function setScore(uint256 _newScore) public onlyOwner{
        score = _newScore;
     }
}