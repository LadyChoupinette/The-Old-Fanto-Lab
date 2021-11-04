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
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

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
            for (let i = 0; i < num; i++) {
                trainerList.push(
                    await contractMain.methods.tokenOfOwnerByIndex(adr, i).call()
                )
            }

            console.log(trainerList)
            setTrainers(trainerList);
            setAdr(adr);
        };
        init();

    }, []);


    return (
        <main>
            <Helmet>
                <title>Gatsby + Node.js (TypeScript) API</title>
            </Helmet>
            <h1>Gatsby + Node.js (TypeScript) API</h1>
            <h2>
                Deployed with{' '}
                <a
                    href="https://vercel.com/docs"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Vercel
                </a>
                !
            </h2>
            <p>
                <a
                    href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    This project
                </a>{' '}
                is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
                directories, <code>/src</code> for static content and <code>/api</code>{' '}
                which contains a serverless{' '}
                <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
                .
            </p>
            <p>
                <React.Fragment>
                    <span>Available trainer list :</span><br/>
                        {trainers ? trainers.toString() : 'loading trainers'}
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
