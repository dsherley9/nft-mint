export default function deploymentFactory(fn: Function) {
    return (artifacts: Truffle.Artifacts, web3: Web3) => {
        return fn;
    }
}