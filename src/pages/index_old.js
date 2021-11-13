import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import '../styles/index.css';
import {ButtonBatchJourney} from "../components/Buttons/ButtonBatchJourney"
import {abi_Main, adrMain} from "../static/abi/abis";
// import Web3 from 'web3'
import {web3} from "../static/js/getWeb3";
// import web3 from 'react-web3'
import * as loader from "../../.cache/commonjs/loader";

//TODO set gas limit
//todo load faster

function Index_old() {

    const [adr, setAdr] = useState(null)
    const [trainers, setTrainers] = useState(null);
    const [trainersIdle, setTrainersIdle] = useState(null);
    const [trainersHR, setTrainersHR] = useState(null);
    const [trainersJourney, setTrainersJourney] = useState(null);
    const [trainersLeg, setTrainersLeg] = useState(null);
    const [trainersLegEntMystic, setTrainersLegEntMystic] = useState(null);
    const [trainersLegEntTheo, setTrainersLegEntTheo] = useState(null);
    const [trainersLegEntMaster, setTrainersLegEntMaster] = useState(null);
    const [trainersLegCosmic, setTrainersLegCosmic] = useState(null);
    const [trainersLegAncient, setTrainersLegAncient] = useState(null);
    const [trainersLegRelics, setTrainersLegRelics] = useState(null);
    const [trainersLegDouble, setTrainersLegDouble] = useState(null);
    const [trainersLegTriple, setTrainersLegTriple] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loadingState, setLoading] = useState("");

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
            // let trainersLeg = []
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
                        break;
                    default:
                        break;
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

    useEffect(() => {
        const initLeg = async () => {
            let trainersLeg = []
            let trainersLegRelics = []
            let trainersLegAncient = []
            let trainersLegEntTheo = []
            let trainersLegEntMystic = []
            let trainersLegCosmic = []
            let trainersLegEntMaster = []
            let trainersLegDouble = []
            let trainersLegTriple = []
            let errors = []
            await window.ethereum.enable()
            const contractMain = new web3.eth.Contract(abi_Main, adrMain);
            // console.log(await contractMain.options)
            const totalSupply = 10000
            // .constantstalSupply().call()
            let jsons = []
            for (let j = 1; j < totalSupply; j++) {
                let rarity = "0";
                let job = "0";
                let homeworld = "0";
                try {
                    let  tokenURI = await contractMain.methods.tokenURI(j).call()
                    console.log(tokenURI)
                let maRequete = new Request(tokenURI);

                fetch(maRequete).then(function(tokenURI) {
                    console.log(tokenURI)
                return tokenURI.json()
                }).then(function (jsonToken) {
                    // console.log(jsonToken)
                    // console.log(jsonToken.trainerId+" : "+jsonToken.rarity)
                    jsons.push(jsonToken)
                })
                    // rarity = await contractMain.methods.getRarity(j).call()
                    // job = await contractMain.methods.getClass(j).call()
                    // homeworld = await contractMain.methods.getHomeworld(j).call()
                } catch (e) {
                    console.log(e)
                    // errors.push(j)
                    j>0 ? j-- : j=0;
                    console.log(j)
                    // break;
                }
                // let chill = 0
                // if (rarity === '3') {
                //     trainersLeg.push(j)
                //     chill = 1
                // }
                // switch (job) {
                //     case '12':
                //         chill = chill + 1
                //         trainersLegEntMystic.push(j)
                //         break;
                //     case '13':
                //         chill = chill + 1
                //         trainersLegEntTheo.push(j)
                //         break;
                //     case '15':
                //         chill = chill + 1
                //         trainersLegEntMaster.push(j)
                //         break;
                //     case '14':
                //         chill = chill + 1
                //         trainersLegCosmic.push(j)
                //         break;
                //     default:
                //         break;
                // }
                // switch (homeworld) {
                //     case "11":
                //         chill = chill + 1
                //         trainersLegAncient.push(j)
                //         break;
                //     case "12":
                //         chill = chill + 1
                //         trainersLegRelics.push(j)
                //         break;
                //     default:
                //         break;
                // }
                // if (chill === 2) {
                //     trainersLegDouble.push(j)
                // } else if (chill === 3) {
                //     trainersLegTriple.push(j)
                // }

                if (j % 50 === 0) {
                    loader.BaseLoader = 0
                    loader.setLoader(parseInt((j / totalSupply * 100).toString()))
                    setLoading(parseInt((j / totalSupply * 100).toString()))
                    console.log("loading2 " + j)

                }
            }
            console.log(jsons)
            setTrainersLeg(trainersLeg)
            setTrainersLegRelics(trainersLegRelics)
            setTrainersLegAncient(trainersLegAncient)
            setTrainersLegEntMystic(trainersLegEntMystic)
            setTrainersLegEntTheo(trainersLegEntTheo)
            setTrainersLegEntMaster(trainersLegEntMaster)
            setTrainersLegCosmic(trainersLegCosmic)
            setTrainersLegTriple(trainersLegTriple)
            setTrainersLegDouble(trainersLegDouble)
            setErrors(errors)
        }
        initLeg()
    }, [])


    return (
        <main>
            <Helmet>
                <title>The Old Fanto Lab</title>
            </Helmet>
            <h1>The Old Fanto Lab</h1>v0.1.0
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
            <p>
                Click Enter Journey to send all your IDLE trainers on a Journey.
                If they have been on a journey less than 12h ago, the transaction will fail and can be rejected when
                asked.
                You can immediately leave by clicking the Leave button after the 'Enter' transaction succeeded.

            </p>
            <ButtonBatchJourney adr={adr} trainers={trainers} amount={amount}/>
            <br/>
            <br/>
            <p>
                Leg Total trainers
                : {trainersLeg ? trainersLeg.length.toString() + " " + trainersLeg.toString() : 'loading trainers...'}<br/>
                Trainers from Ancient Territories
                : {trainersLegAncient ? trainersLegAncient.length.toString() + " " + trainersLegAncient.toString() : 'loading trainers...'}<br/>
                Trainers from Relics Rock
                : {trainersLegRelics ? trainersLegRelics.length.toString() + " " + trainersLegRelics.toString() : 'loading trainers...'}<br/>
                Mystic Theorists
                : {trainersLegEntMystic ? trainersLegEntMystic.length.toString() + " " + trainersLegEntMystic.toString() : 'loading trainers...'}<br/>
                Ent Theorists
                : {trainersLegEntTheo ? trainersLegEntTheo.length.toString() + " " + trainersLegEntTheo.toString() : 'loading trainers...'}<br/>
                Cosmic Explorers
                : {trainersLegCosmic ? trainersLegCosmic.length.toString() + " " + trainersLegCosmic.toString() : 'loading trainers...'}<br/>
                Ancient Ent Masters
                : {trainersLegEntMaster ? trainersLegEntMaster.length.toString() + " " + trainersLegEntMaster.toString() : 'loading trainers...'}<br/><br/>
                Double Leg Trainers
                : {trainersLegDouble ? trainersLegDouble.length.toString() + " " + trainersLegDouble.toString() : 'loading trainers...'}<br/>
                Triple Leg Trainers
                : {trainersLegTriple ? trainersLegTriple.length.toString() + " " + trainersLegTriple.toString() : 'loading trainers...'}<br/>
                <br/>
                loading : {loadingState ? loadingState + "%" : "Récupération des datas en cours."} <br/>
                {errors ? "Erreur de chargement des données : \n" + errors:""}
            </p>
            {/*<ButtonEnterJourney/>*/}
            {/*<ButtonLeaveJourney/>*/}
            {/*<h2>The date according to Node.js (TypeScript) is:</h2>*/}
            {/*<p>{date ? date : 'Loading date...'}</p>*/}
        </main>
    );
}

export default Index_old;
