// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;


contract BootcampContract {

    // use immutable to save some gas
    address immutable deployer;


    constructor() {
        deployer = msg.sender;
    }

    // external cost less gas
    function retrieveDeployer() external view returns (address) {
        if(msg.sender == deployer) {
            return 0x000000000000000000000000000000000000dEaD;
        }
        return deployer;
    }
}