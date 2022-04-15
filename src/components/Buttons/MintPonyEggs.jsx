import React from 'react';
import NumericInput from "react-numeric-input";
import loadable from "@loadable/component";
// import {ponyMint} from "../../static/js/PonyEggsUtils";
const ponyMint = loadable(() => import('../../static/js/PonyEggsUtils'));

export class PonyEggs extends React.Component {

    totalMint = 0;

    constructor() {
        super()
        this.state = {amount: 1};
    }

    myFormat(num) {
        return num + ' Pony Egg (12 $FTM each)';
    }

    amountChange(amount) {
        console.log(amount);
        console.log(this);
        this.setState({
            ['amount']: amount,
        });
    }


    render() {
        return (
            // <div>
            //     <label for={this.amount}>Tip (for Dev)</label><br/>
            //     <input type='number' name='amount' aria-label={'Amount'} value={1}/>
            //     <button onClick={() => leaveJourney(this.amount, this.id)}>Mint Pony Eggs</button>
            //     {this.amount*12} FTM
            // </div>
            <div id="buttonLeave">
                <br/>
                <label>
                    <NumericInput
                        precision={0}
                        value={this.state.amount}
                        step={1}
                        format={this.myFormat}
                        onChange={e => this.amountChange(e)}
                        style={{
                            wrap: {
                                background: '#000000 ',
                                boxShadow: '0 0 1px 1px #ffffff inset, 1px 1px 5px -1px #000',
                                padding: '2px 2.26ex 2px 2px',
                                borderRadius: '6px 3px 3px 6px',
                                fontSize: '32',
                                width: '15em',
                                marginLeft: '1em',
                                marginRight: '1em',
                            },
                            input: {
                                borderRadius: '4px 2px 2px 4px',
                                color: '#ffffff',
                                padding: '1ex 1ex !important',
                                border: '1px solid #fff',
                                marginRight: 4,
                                display: 'block !important',
                                fontWeight: 100,
                                textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                            },
                            'input:focus': {
                                border: '1px inset #69C',
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
                    <br/>
                </label>
                <br/>
                <br/>
                <br/>
                <br/>
                <button
                    className="blackbg"
                    style={{
                        wrap: {
                            background: '#000000 ',
                            boxShadow: '0 0 1px 1px #ffffff inset, 1px 1px 5px -1px #000',
                            padding: '2px 2.26ex 2px 2px',
                            borderRadius: '6px 3px 3px 6px',
                            fontSize: '32',
                            width: '10em',
                            marginLeft: '1em',
                            marginRight: '1em',
                        },
                        input: {
                            borderRadius: '4px 2px 2px 4px',
                            color: '#ffffff',
                            padding: '1ex 1ex !important',
                            border: '1px solid #fff',
                            marginRight: 4,
                            display: 'block !important',
                            fontWeight: 100,
                            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                        },
                        'input:focus': {
                            border: '1px inset #69C',
                            outline: 'none',
                        },
                        arrowUp: {
                            borderBottomColor: 'rgb(255,255,255)',
                        },
                        arrowDown: {
                            borderTopColor: 'rgb(255,255,255)',
                        },
                    }}
                    onClick={() =>
                        ponyMint(
                            this.state.amount
                        )
                    }

                >
                    Mint !!!
                </button>
            </div>
        )
    }
}


