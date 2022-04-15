import {abi_PonyEgg,adrPonyEgg} from '../abi/abis';
import web3 from './getWeb3';

 export const ponyMint = async function (amount) {
     console.log(amount);
     const w3 = await web3;
     console.log(w3);
     const acc = await w3.eth.getAccounts();
     const adr = acc[0];

     const contractPonyEggs = new w3.eth.Contract(abi_PonyEgg, adrPonyEgg);

     let reqLeave = await contractPonyEggs.methods
         .mint(amount)
         .send({
             value: w3.utils.toWei(amount.toString()) * 12,
             from: adr,
         }).then(function (receipt) {
             console.log(receipt)
         });
     console.log(reqLeave)
 }
export default ponyMint;