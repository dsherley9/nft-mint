"use strict";
module.exports = (artifacts, web3) => {
    return async (deployer, network, accounts) => {
        const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";
        const NFTCollectible = artifacts.require("NFTCollectible");
        await deployer.deploy(NFTCollectible, baseTokenURI);
        const nft = await NFTCollectible.deployed();
        console.log(`Metacoin deployed at ${nft.address} in network: ${network}.`);
    };
};
