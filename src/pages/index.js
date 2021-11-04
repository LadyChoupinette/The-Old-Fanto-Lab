import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import '../styles/index.css';
import {ButtonEnterJourney} from "../components/Buttons/ButtonEnterJourney"
import {ButtonBatchJourney} from "../components/Buttons/ButtonBatchJourney"
import {abi_Main, adrMain} from "../static/abi/abis";
import {ButtonLeaveJourney} from "../components/Buttons/ButtonLeaveJourney";
// import Web3 from 'web3'
import {web3} from "../static/js/getWeb3";

function Index() {

    const [adr, setAdr] = useState(null)
    const [trainers, setTrainers] = useState(null);
    const [trainersIdle, setTrainersIdle] = useState(null);
    const [trainersHR, setTrainersHR] = useState(null);
    const [trainersJourney, setTrainersJourney] = useState(null);
    const [walletAddress, setWallet] = useState("");

    let amount = 1


    useEffect(() => {
        const init = async () => {

            await window.ethereum.enable()

            // let web3 = new Web3(window.ethereum)
            let acc = await web3.eth.getAccounts();
            let adr = acc[0]
            console.log(adr)

            const contractMain = new web3.eth.Contract(abi_Main, adrMain);

            const num = await contractMain.methods.balanceOf(adr).call();
            let trainerList = []
            let trainer;
            let trainersIdle = []
            let trainersJourney = []
            let trainersHR = []
            for (let i = 0; i < num; i++) {
                trainer = await contractMain.methods.tokenOfOwnerByIndex(adr, i).call()
                trainerList.push(trainer)
                let status = await contractMain.methods.getStatus(trainer).call()
                switch (status) {
                    case '0':
                        trainersIdle.push(trainer)
                        break;
                    case '3':
                        trainersHR.push(trainer)
                        break;
                    case '4':
                        trainersJourney.push(trainer)

                }
            }

            console.log(trainerList)
            setTrainers(trainerList);
            setTrainersIdle(trainersIdle);
            setTrainersHR(trainersHR);
            setTrainersJourney(trainersJourney);
            setAdr(adr);
        };
        init();

    }, []);


    return (
        <main>
            <Helmet>
                <title>The Old Fanto Lab</title>
            </Helmet>
            <h1>The Old Fanto Lab</h1>
            <p>
                <React.Fragment>
                    <span>Available trainer list :</span><br/>
                        All trainers : {trainers ? trainers.toString() : 'loading trainers...'}<br/>
                        Idle trainers : {trainersIdle ? trainersIdle.toString() : 'loading trainers...'}<br/>
                        Healing trainers : {trainersHR ? trainersHR.toString() : 'loading trainers...'}<br/>
                        Journey trainers : {trainersJourney ? trainersJourney.toString() : 'loading trainers...'}<br/>
                </React.Fragment>
                {/*<span>{trainers ? trainers.r : 'Loading Trainers...'}</span>*/}
            </p>
            <br/>
            <ButtonBatchJourney adr={adr} trainers={trainers} amount={amount}/>
            <br/>
            <br/>
            {/*<ButtonEnterJourney/>*/}
            {/*<ButtonLeaveJourney/>*/}
            {/*<h2>The date according to Node.js (TypeScript) is:</h2>*/}
            {/*<p>{date ? date : 'Loading date...'}</p>*/}
        </main>
    );
}

export default Index;
