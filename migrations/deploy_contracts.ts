type Network = "development" | "kovan" | "mainnet";

module.exports = (artifacts: Truffle.Artifacts, web3: Web3) => {
  return async (
    deployer: Truffle.Deployer,
    network: Network,
    accounts: string[]
  ) => {
    const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";
    const NFTCollectible = artifacts.require("NFTCollectible");

    await deployer.deploy(NFTCollectible, baseTokenURI);

    const nft = await NFTCollectible.deployed();
    console.log(
      `Metacoin deployed at ${nft.address} in network: ${network}.`
    );
  };
};