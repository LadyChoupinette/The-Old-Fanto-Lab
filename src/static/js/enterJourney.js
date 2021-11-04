import {contractMain, contractTOFL} from "../abi/abis";

export async function sendTrainer(id) {

    //contractTOFL.setDefaultAccount(adr_TOFL);
    console.log(id)
    console.log(contractTOFL)

    console.log(id)
    await contractMain.methods.enterJourney(id, contractTOFL.options.address, []).send({from: '0xcb65e182A9f298De0BDf97D25a3Aa840CAD7E267'}).then(function () {
        console.log("Trainer sent !");
    });
}