import Web3 from "web3";

let web3 = null;

const isBrowser = typeof window !== "undefined"
if (isBrowser) {
    web3 = new Web3(window.ethereum);
} else {
    web3 = new Web3();
}

export default web3;