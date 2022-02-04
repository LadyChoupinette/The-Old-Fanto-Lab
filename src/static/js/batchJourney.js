import { abi_Main, abi_TOFL, adrMain, adrTOFL } from '../abi/abis';
import web3 from './getWeb3';

export async function batchEnterJourney(adr, ids, amount) {
  console.log(ids);
  console.log(amount);
  const w3 = await web3;
  console.log(w3);

  let batch = new w3.eth.BatchRequest();
  const contractMain = new w3.eth.Contract(abi_Main, adrMain);
  const contractTOFL = new w3.eth.Contract(abi_TOFL, adrTOFL);

  for (let trainer in ids) {
    console.log(parseInt(ids[trainer]));
    let status = await contractMain.methods
      .getStatus(parseInt(ids[trainer]))
      .call();
    console.log(status);
    if (status === '0') {
      let reqEnter = await contractMain.methods
        .enterJourney(parseInt(ids[trainer]), contractTOFL.options.address, [])
        .send.request({ from: adr, gasLimit: 100000 }, (err, res) =>
          console.log(err, res)
        );
      console.log(reqEnter);
      batch.add(reqEnter);
      // contractTOFL.setDefaultAccount(adrTOFL);
    }
  }
  console.log(batch);
  // console.log(batch.execute())
  batch.execute();

  //contractTOFL.setDefaultAccount(adr_TOFL);
  // console.log(id)
  // console.log(contractTOFL)
  // await contractTOFL.methods.leave(id).send({
  //     value: amount,
  //     from: '0xcb65e182A9f298De0BDf97D25a3Aa840CAD7E267'
  // }).then(function () {
  //     console.log('trainer returned')
  // });
}

export async function batchLeaveJourney(adr, ids, amount) {
  const w3 = await web3;
  let batch = new w3.eth.BatchRequest();
  const contractMain = new w3.eth.Contract(abi_Main, adrMain);
  const contractTOFL = new w3.eth.Contract(abi_TOFL, adrTOFL);

  for (let trainer in ids) {
    console.log(parseInt(ids[trainer]));
    let status = await contractMain.methods
      .getStatus(parseInt(ids[trainer]))
      .call();
    console.log(status);
    if (status === '4') {
      let reqLeave = await contractTOFL.methods
        .leave(parseInt(ids[trainer]))
        .send.request({
          gasLimit: 100000,
          value: w3.utils.toWei(amount.toString()),
          from: adr,
        });
      console.log(reqLeave);
      batch.add(reqLeave);
    }
  }
  console.log(batch);
  batch.execute();
}
