import React, { useEffect, useState } from 'react';
import NumericInput from "react-numeric-input";
// import loadable from "@loadable/component";
import ponyMint, {totalEggMints} from "../../static/js/PonyEggsUtils";
// const ponyMint = loadable(() => import('../../static/js/PonyEggsUtils'));

export default class PonyEggs extends React.Component {

    // totalMintsRes=0;
    // amount = 1;


    constructor() {
        super()
        this.state = {
            amount: 1,
            totalMintsRes:0
        };
    }

    myFormat(num) {
        return num + ' Pony Egg (12 $FTM each)';
    }

    ponyMintParent;
    getTotalMints;


    async componentDidMount() {
        this.ponyMintParent = async function (e) {
            let f = await ponyMint(e);
            console.log(f);
        }
        this.getTotalMints = async function () {
            let res = await totalEggMints();
            return res

        }
        this.setState({
            amount: this.state.amount,
            totalMintsRes: await this.getTotalMints()
        })
        // this.getTotalMints();
        // this.forceUpdate();
    }

//     useEffect(() =>
// {
//         const function init = async() => {
//             this.state.totalMintsRes = this.getTotalMints()
//     }
// })

    amountChange(e) {
        // this.forceUpdate();
        console.log(e);
        this.state = {
            amount: e,
        }
    }

    // useEffect(() => {
    //
    // })


    render() {
        return (
            <div id="wrapperFields">
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
                    onClick={() => this.ponyMintParent(this.state.amount)}

                >
                    Mint !!!
                </button>
                <p style={{textShadow: ' 1px 1px 1px #ff8613',
                fontSize:"xxx-large"}}
                >

                    Total Mint : {this.state.totalMintsRes} / 668
                </p>

            </div>

        )
    }
}


