// import React from 'react';
import {adrTOFL, contractMain, contractTOFL} from "../abi/abis";
import web3 from "./getWeb3";
// import {sendTrainer} from "./enterJourney";
// import {leaveJourney} from "./leaveJourney";

export async function batchEnterJourney(adr, ids, amount) {

    console.log(ids)
    console.log(amount)
    console.log(web3)

    let batch = new web3.eth.BatchRequest();
    // batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
    // batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
    // batch.execute();

    // ids=['173','168']

    for (let trainer in ids) {
        console.log(parseInt(ids[trainer]))
        let status = await contractMain.methods.getStatus(parseInt(ids[trainer])).call();
        console.log(status)
        // if(status==='0') {
            let reqEnter = await contractMain.methods.enterJourney(parseInt(ids[trainer]), contractTOFL.options.address, []).send.request({from: adr},(err, res) => console.log(err, res))
            console.log(reqEnter)
            batch.add(reqEnter)
            // contractTOFL.setDefaultAccount(adrTOFL);
            let reqLeave = await contractTOFL.methods.leave(parseInt(ids[trainer])).send.request({
                value: amount,
                from: adr
            })
            console.log(reqLeave)
            batch.add(reqLeave)
        // }
    }
    console.log(batch)
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

    let batch = new web3.eth.BatchRequest();

    for (let trainer in ids) {
        console.log(parseInt(ids[trainer]))
        let reqLeave = await contractTOFL.methods.leave(amount).call.request({
            value: amount,
            from: adrTOFL
        })
        console.log(reqLeave)
        batch.add(reqLeave)
    }
    console.log(batch)
    batch.execute()


}