import React, { useEffect, useState } from 'react';
// import loadable from "@loadable/component";
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import NumericInput from 'react-numeric-input';
import web3 from '../../static/js/getWeb3';
import { abi_PonyPost, adrPonyPost } from '../../static/abi/abis';
import { ponyPostMail } from '../../static/js/PonyEggsUtils';

export default function PonyPost() {
  const [amountGift, setAmountGift] = useState(1);
  const [tot, setTot] = useState(0);
  const [price, setPrice] = useState(0);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sent, setSent] = useState('');

  const handleLine1 = (event) => {
    const result = event.target.value.replace(/[<>&]/gi, '');

    setLine1(result);
  };
  const handleLine2 = (event) => {
    const result = event.target.value.replace(/[<>&]/gi, '');

    setLine2(result);
  };
  const handleLine3 = (event) => {
    const result = event.target.value.replace(/[<>&]/gi, '');

    setLine3(result);
  };

  useEffect(() => {
    const initialize = async () => {
      const w3 = await web3;
      // const acc = await w3.eth.getAccounts();
      // const adr = acc[0];
      // console.log(adr);

      const contractPonyPost = new w3.eth.Contract(abi_PonyPost, adrPonyPost);

      let tot = 0;
      try {
        tot = await contractPonyPost.methods.totalSupply().call();
        setTot(Number.parseInt(tot) + 1);
      } catch (e) {
        console.log(e.toString());
      }
    };
    initialize();
  });

  function myFormat(num) {
    return num + ' FTM';
  }

  async function ponyPostMint(r, l1, l2, l3, g) {
    console.log(r);
    console.log(l1);
    console.log(l2);
    console.log(l3);
    console.log(g);

    setSent('On its way...');
    let req;
    try {
      req = await ponyPostMail(r, l1, l2, l3, g);
      console.log('req on its way');
      console.log('req is ', req);
    } catch (err) {
      console.log('err is ', err);
      setSent('Error :( bad Ponies !');
    } finally {
      console.log('req is ', req);
    }
    setSent("Sent ! Thanks for using the PonyPost'");
  }

  return (
    <React.Fragment>
      <div className="ponypost">
        <div className="ponypost-form">
          {/*<Box component="form" noValidate autoComplete="off">*/}
          <div>
            <span className="ponypost-t1">
              <strong>1 </strong>$FTM
              <br />
              minimum <br />
              as a <strong>gift</strong>
              <br />
              💖🦄💖
              <br />
            </span>
            <span className="ponypost-t2">Add a gift?</span>
            <span className="ponypost-t3">
              Hello ! I am{' '}
              <strong style={{ color: '#735221FF' }}>Mr Pony Postman</strong> !
              Enter your
              <strong> message</strong>
              <br />
              on the counter, a <strong>gift</strong> on the left, the
              <strong> recipient</strong>
              <br /> on the right then click on <strong>MAIL</strong> to send
              your message !
            </span>
            <FormControl id="ponypost-line1">
              <InputLabel htmlFor="ponypost-line1">Line 1</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={line1}
                // mask={[/[0-9a-zA-Z\s]*/]}
                inputProps={{ maxLength: 20 }}
                onChange={(e) => handleLine1(e)}
                label="Line 1"
              />
            </FormControl>
            <FormControl id="ponypost-line2">
              <InputLabel htmlFor="ponypost-line2">Line 2</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={line2}
                inputProps={{ maxLength: 20 }}
                onChange={(e) => handleLine2(e)}
                label="Line 2"
              />
            </FormControl>
            <FormControl id="ponypost-line3">
              <InputLabel htmlFor="ponypost-line3">Line 3</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={line3}
                inputProps={{ maxLength: 20 }}
                onChange={(e) => handleLine3(e)}
                label="Line 3"
              />
            </FormControl>
            <FormControl id="ponypost-recipient">
              <InputLabel htmlFor="ponypost-recipient">Recipient</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                label="Recipient"
              />
            </FormControl>
            {/*<TextField required id="ponypost-line1" label="Line 1" />*/}
            {/*<TextField id="ponypost-line2" label="line 2" />*/}
            {/*<TextField id="ponypost-line3" label="line 3" />*/}
            <NumericInput
              className="ponypost-gift"
              precision={0}
              value={amountGift}
              step={1}
              min={1}
              format={myFormat}
              onChange={(e) => setAmountGift(e)}
              style={{
                wrap: {
                  background: '#000000 ',
                  boxShadow: '0 0 1px 1px #ffffff inset, 1px 1px 5px -1px #000',
                  // padding: '2px 2px 2px 2px',
                  borderRadius: '6px 3px 3px 6px',
                  fontSize: '32',
                  width: '90px',
                  marginLeft: '1em',
                  marginRight: '1em',
                  top: '371px',
                  left: '129px',
                },
                input: {
                  fontSize: '15px',
                  borderRadius: '6px 3px 3px 6px',
                  color: '#ffffff',
                  // padding: '1ex 1ex !important',
                  border: '1px solid #fff',
                  marginRight: 4,
                  display: 'block !important',
                  fontWeight: 100,
                  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                },
                'input:focus': {
                  border: '2px solid #ff0000',
                  borderRadius: '6px 3px 3px 6px',
                  outline: 'none',
                },
                arrowUp: {
                  borderBottomColor: 'rgb(255,255,255)',
                },
                arrowDown: {
                  borderTopColor: 'rgb(255,255,255)',
                },
              }}
            />
            <button
              id="ponypost-mail"
              onClick={() =>
                ponyPostMint(recipient, line1, line2, line3, amountGift)
              }
            >
              MAIL !
            </button>
            <span id="ponypost-preview-header">PonyPost' #{tot}</span>
            <span id="ponypost-preview-line1">{line1}</span>
            <span id="ponypost-preview-line2">{line2}</span>
            <span id="ponypost-preview-line3">{line3}</span>
            <span id="ponypost-preview-gift">Gift : {amountGift} $FTM</span>
            <div id="ponypost-sent">{sent}</div>
          </div>
          {/*</Box>*/}
        </div>
      </div>
    </React.Fragment>
  );
  // }
}
