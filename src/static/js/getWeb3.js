import Web3 from 'web3';

const web3Get = async function() {
  console.log('hey');
  return new Web3(window.ethereum);
};
const web3 = await web3Get();

export default web3;

// export const connectWallet = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       });
//       const obj = {
//         status: '👆🏽 Write a message in the text-field above.',
//         address: addressArray[0],
//       };
//       return obj;
//     } catch (err) {
//       return {
//         address: '',
//         status: '😥 ' + err.message,
//       };
//     }
//   } else {
//     return {
//       address: '',
//       status: (
//         <span>
//           <p>
//             {' '}
//             🦊{' '}
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href={`https://metamask.io/download.html`}
//             >
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       ),
//     };
//   }
// };
