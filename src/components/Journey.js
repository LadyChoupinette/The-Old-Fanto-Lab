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
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SideBarHelp from "./SidebarHelp";
import {RefreshOutlined} from "@mui/icons-material";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {Fab, Tooltip} from "@mui/material";
export default function Journey() {
    const [adr, setAdr] = useState(null)
    const [trainers, setTrainers] = useState(null);
    const [trainersIdle, setTrainersIdle] = useState(null);
    const [trainersHR, setTrainersHR] = useState(null);
    const [trainersJourney, setTrainersJourney] = useState(null);
    // let amount = 1

    const [amount, setAmount] = useState(1);

    const help = `Remove your trainers from any Healing Rift or Arena, so they are 'Watching Anime'. Their number is the number of idle trainer. Click Journey
    to send them on a journey. If nothing happens or if the transaction is very overpriced, make sure you haven't done any journey for the past 12h, 
    and refresh the page. 
    Once all trainers sent, click the refresh button, or press F5, your trainers will now be counter as "Journey Trainer", and their status will be "Lost".
     You can immediately leave the journey to win 1 courage. There is currently no benefits to stay on a journey.
    `



        const init = async () => {
            setTrainersIdle(null)
            setTrainersJourney(null)
            try {
                await window.ethereum.enable()
            } catch{}

            let acc = await web3.eth.getAccounts();
            let adr = acc[0]

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

            console.log(trainersIdle)
            setTrainers(trainerList);
            setTrainersIdle(trainersIdle);
            setTrainersHR(trainersHR);
            setTrainersJourney(trainersJourney);
            setAdr(adr);
        };
    useEffect(() => {
        init();

    }, []);
    // const { children, fullMenu } = this.props;
  return (
    <section id="journey">
      <div className="inner">
          <div id="top-trainers">
          <p  id="trainerLists" >
              {/*<React.Fragment>*/}
                  <h3>Trainer list</h3>
                  {/*<span>All trainers : {trainers ? trainers.toString() : 'loading trainers...'}</span><br/>*/}
                  <span>Idle trainers : {trainersIdle ? trainersIdle.length.toString() : 'loading trainers...'}</span><br/>
                  {/*<span>Healing trainers : {trainersHR ? trainersHR.length.toString() : 'loading trainers...'}</span><br/>*/}
                  <span>Journey trainers : {trainersJourney ? trainersJourney.length.toString() : 'loading trainers...'}</span><br/>
              {/*</React.Fragment>*/}
              {/*<span>{trainers ? trainers.r : 'Loading Trainers...'}</span>*/}
          </p>
          <p className='div-icon'>
              <Tooltip title={help} placement="right">
                  <HelpOutlineOutlinedIcon fontSize="large" className="trainer-icon-help" />
              </Tooltip>
              <br/>
              <Fab size="small" disableTouchRipple="true" className="trainer-icon-refresh" aria-label="refresh" onClick={init}>
              <RefreshOutlined fontSize="large" />
              </Fab>



          </p>
          </div>
          <br/>
          <p>
              You can send your trainers on a journey around the old lab. Who knows, they might find something interesting about this place ! Be careful though,
              with the melting of snow, you can hear more wild creatures than ever before...
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
