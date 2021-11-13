import React, {useEffect, useState} from 'react';
import config from '../../config';
import {web3} from "../static/js/getWeb3";
import {abi_Main, adrMain} from "../static/abi/abis";
import {ButtonBatchJourney} from "./Buttons/ButtonBatchJourney";
import {OverlayTrigger,Popover,Button} from "react-bootstrap";
import Nav from "./Nav";
import NavHelp from "./NavHelp";
import {Link} from "gatsby";
import SideBar from "./Sidebar";
import SideBarHelp from "./SidebarHelp";
export default function Journey() {
    const [adr, setAdr] = useState(null)
    const [trainers, setTrainers] = useState(null);
    const [trainersIdle, setTrainersIdle] = useState(null);
    const [trainersHR, setTrainersHR] = useState(null);
    const [trainersJourney, setTrainersJourney] = useState(null);
    // let amount = 1

    const [amount, setAmount] = useState(1);


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
    // const { children, fullMenu } = this.props;
  return (
    <section id="journey">
      <div className="inner">
          <div id="top-trainers">
          <p  id="trainerLists" >
              <React.Fragment>
                  <span>Trainer list :</span><br/>
                  {/*<span>All trainers : {trainers ? trainers.toString() : 'loading trainers...'}</span><br/>*/}
                  <span>Idle trainers : {trainersIdle ? trainersIdle.length.toString() : 'loading trainers...'}</span><br/>
                  {/*<span>Healing trainers : {trainersHR ? trainersHR.length.toString() : 'loading trainers...'}</span><br/>*/}
                  <span>Journey trainers : {trainersJourney ? trainersJourney.length.toString() : 'loading trainers...'}</span><br/>
              </React.Fragment>
              {/*<span>{trainers ? trainers.r : 'Loading Trainers...'}</span>*/}
          </p>
          {/*<p className='col-6'>*/}
              {/*<SideBarHelp />*/}
          {/*</p>*/}
          </div>
          <br/>
          <p>
              You can send your trainer on a journey around the old lab. Who knows, they might find some answer about this place ! But be careful,
              the harsh weather and the lurking creatures are not to be taken lightly...
              {/*Click Enter Journey to send all your IDLE trainers on a Journey.*/}
              {/*If they have been on a journey less than 12h ago, the transaction will fail and can be rejected when*/}
              {/*asked.*/}
              {/*You can immediately leave by clicking the Leave button after the 'Enter' transaction succeeded.*/}

          </p>
          <ButtonBatchJourney adr={adr} trainers={trainers} amount={amount}/><br/>
      </div>
    </section>
  );
}
