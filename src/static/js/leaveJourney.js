import {contractTOFL} from "../abi/abis";

export async function leaveJourney(id, amount) {

    //contractTOFL.setDefaultAccount(adr_TOFL);
    console.log(id)
    console.log(contractTOFL)
    await contractTOFL.methods.leave(id).send({
        value: amount,
        from: '0xcb65e182A9f298De0BDf97D25a3Aa840CAD7E267'
    }).then(function () {
        console.log('trainer returned')
    });
}
