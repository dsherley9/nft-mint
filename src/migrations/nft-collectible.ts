import deploymentFactory from './deployment-factory';

async function NFTCollectible (
    deployer: Truffle.Deployer,
    network : Truffle.Network,
    accounts: string[]
) {
    const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";
    const NFTCollectible = artifacts.require("NFTCollectible");

    await deployer.deploy(NFTCollectible, baseTokenURI);

    const nft = await NFTCollectible.deployed();
    console.log(
      `NFTCollectible deployed at ${nft.address} in network: ${network}.`
    );
};

const nftCollectible = deploymentFactory(NFTCollectible);
export default nftCollectible;
export { nftCollectible };