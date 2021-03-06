import {
  abi_PFPony,
  abi_PonyEgg,
  abi_PonyPost,
  adrPFPony,
  adrPonyEgg,
  adrPonyPost,
} from '../abi/abis';
import web3 from './getWeb3';

export async function totalEggMints() {
  const w3 = await web3;
  console.log(w3);
  const acc = await w3.eth.getAccounts();
  const adr = acc[0];

  const contractPonyEggs = new w3.eth.Contract(abi_PonyEgg, adrPonyEgg);

  let reqLeave = await contractPonyEggs.methods.totalSupply().call();
  return reqLeave;
}

export default async function ponyMint(amount) {
  console.log(amount);
  const w3 = await web3;
  console.log(w3);
  const acc = await w3.eth.getAccounts();
  const adr = acc[0];

  const contractPonyEggs = new w3.eth.Contract(abi_PonyEgg, adrPonyEgg);

  let reqLeave = await contractPonyEggs.methods
    .mint(amount)
    .send({
      value: w3.utils.toWei(amount.toString()) * 25,
      from: adr,
    })
    .then(function (receipt) {
      console.log(receipt);
    });
  console.log(reqLeave);
}

export async function ponyPostMail(g, t1, t2, t3, r) {
  const w3 = await web3;
  console.log(w3);
  console.log(g, t1, t2, t3, r);
  const acc = await w3.eth.getAccounts();
  const adr = acc[0];

  let p = 5;
  const contractPFPony = new w3.eth.Contract(abi_PFPony, adrPFPony);
  const contractPonyPost = new w3.eth.Contract(abi_PonyPost, adrPonyPost);
  console.log(contractPFPony.methods.balanceOf(adr).call());
  if ((await contractPFPony.methods.balanceOf(adr).call()) > 0) {
    p = 2;
  } else {
    p = 5;
  }
  if (adr == '0x5EAE6c797ac561cb68Cd7a972963069122138157') {
    p = 0;
  }
  let reqMail = await contractPonyPost.methods
    .mint(r, t1, t2, t3, g)
    .send({
      value: w3.utils.toWei((g + p).toString()),
      from: adr,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null,
    })
    .then(function (receipt) {
      console.log(receipt);
    });
  console.log(reqMail);
}

// export default PonyUtils;
