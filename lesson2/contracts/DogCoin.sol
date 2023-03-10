// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

contract DogCoin {
    uint256 totalSupply;
    address owner;
    mapping(address => uint256) public balances;
    mapping(address => Payment[]) payments;

    struct Payment {
        uint256 amount;
        address toAddress;
    }

    constructor() {
        totalSupply = 2000000;
        owner = msg.sender;
        balances[owner] = totalSupply;
        totalSupply = 0;
    }

    event SupplyChanged(uint256);
    event TokenTransfer(address, address, uint256);

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // return totalSupply 
    // made external to be only called outside of the contract to save gas
    function getTotalSupply() external view returns (uint256) {
        return totalSupply;
    }

    function increaseSupply() public onlyOwner {
        totalSupply += 1000; 
        emit SupplyChanged(totalSupply);
    }

    // msg.sender would be sender address thats why we dont need it as a param
    // if we would provide that as a paramter user should provide their own address
    // not ux friendly approach ?
    function transfer(uint256 value, address toAddress) public payable {
        balances[msg.sender] -= value;
        balances[toAddress] += value; 
        payments[msg.sender].push(Payment({amount: value, toAddress:toAddress}));
        emit TokenTransfer(msg.sender, toAddress, value);
    }

    // function to get all the transactions for address
    function getTransactions() public view returns (Payment[] memory) {
        return payments[msg.sender];
    }
}