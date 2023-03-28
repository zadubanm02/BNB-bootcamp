// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BadgerNFT is ERC721URIStorage, Ownable {
    constructor() ERC721("Badger NFT", "BNFT") {
        _mint(msg.sender, 0);
        _setTokenURI(
            0,
            "bafkreifblaw2c2r3mmt23c3s67yfulm5uys64pmiuvastnz7q4j3b43fxy"
        );
    }
}
