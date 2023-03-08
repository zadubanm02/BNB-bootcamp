// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Score {
    // all the state variables can be find 
    // dont expose confidentional information
    uint256 public score;
    address owner;

    // events can work like return statements 
    // if u want to inform caller about something
    // events are only visible outside of the contract
    event ScoreSet(uint256);

    // its like a map in javascript
    mapping (address => uint256) scoreTable;

    modifier onlyOwner {
        require(msg.sender == owner, "Not allowed");
        _;
    }

    constructor() {
        score = 5;
        emit ScoreSet(5);
        owner = msg.sender;
    }

    // using  uint256 public score; SAVES GAS
    //  function getScore() public view returns (uint256) {
    //     return score;
    //  }

     function setScore(uint256 _newScore) public onlyOwner{
        score = _newScore;
        emit ScoreSet(_newScore);
     }

     function setPlayerScore(address player, uint256 value) public {
        scoreTable[player] = value;
     }

     function getPlayersScore(address player) public view returns (uint256) {
        return scoreTable[player];
     }
}