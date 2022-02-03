import React from 'react';
import {batchEnterJourney, batchLeaveJourney} from "../../static/js/batchJourney";
import NumericInput from "react-numeric-input"

export class ButtonBatchJourney extends React.Component {

    amount;

    constructor() {
        super();
        // this.setState({amount: amount});
        this.state={
            amount:1,
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    amountChange(amount) {

        // this.amount=event.target.value
        console.log(amount)
        console.log(this)
        // window.amount = event.target.value
        this.setState({
            ['amount']: amount
        });
        // this.state.amount = event.target.value;
    }
    onInputchange(event) {
        this.setState({
        });
    }

    handleSubmit(event) {
        console.log(this.amount)
        console.log(this.trainers)
        this.batchJourney(this.trainers, this.amount)
        event.preventDefault();
    }

    myFormat(num) {
        return num + ' $FTM';
    }

    /*constructor(amount, trainers) {
        super()
        this.amount = amount;
        this.trainers = trainers;
    }*/


    render() {
        const { items } = this.state;
        return (
            <div id='buttonsJourney'>
                <button className="button primary" onClick={() => batchEnterJourney(this.props.adr, this.props.trainers, this.state.amount)}>Enter
                    Journey
                </button><br/>
                <p>Once you get confirmation that you trainers arrived at their destination, you can order them to leave at once.
                    Better not stay too long around here...</p>
                <div id='buttonLeave'><br/>
                <label>
                    <span id='labelAmount'>
                    Tip (for Dev)
                        </span>
                    {/*<input type='number' id='amount' name='amount' value={this.state.amount} onChange={(e)=>this.amountChange(e)}/>*/}
                    {/**/}
                    <NumericInput precision={2} value={this.state.amount} step={0.1} format={this.myFormat} onChange={(e)=>this.amountChange(e)}
                                  style={{
                                      wrap: {
                                          background: '#000000',
                                          boxShadow: '0 0 1px 1px #ffffff inset, 1px 1px 5px -1px #000',
                                          padding: '2px 2.26ex 2px 2px',
                                          borderRadius: '6px 3px 3px 6px',
                                          fontSize: 16,
                                          width:'7em',
                                          marginLeft:'1em',
                                          marginRight: '1em',
                                      },
                                      input: {
                                          borderRadius: '4px 2px 2px 4px',
                                          color: '#ffffff',
                                          padding: '0.1ex 1ex',
                                          border: '1px solid #fff',
                                          marginRight: 4,
                                          display: 'block',
                                          fontWeight: 100,
                                          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
                                      },
                                      'input:focus' : {
                                          border: '1px inset #69C',
                                          outline: 'none'
                                      },
                                      arrowUp: {
                                          borderBottomColor: 'rgb(255,255,255)'
                                      },
                                      arrowDown: {
                                          borderTopColor: 'rgb(255,255,255)'
                                      }}}/>
                </label><br/>
                <button className="button primary" onClick={() => batchLeaveJourney(this.props.adr, this.props.trainers, this.state.amount)}>Leave
                    Journey
                </button>
                </div>
            </div>
        )
    }
}


