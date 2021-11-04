import React from 'react';
import {batchEnterJourney} from "../../static/js/batchJourney";

export class ButtonBatchJourney extends React.Component {

    amount = 0.1;
    trainers = [];


    constructor(trainers, amount) {
        super();
        this.trainers = trainers
        this.amount = amount
        // this.state={
        //     amount:0.1,
        //     trainers:[]
        // }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    amountChange(event) {
        // this.amount=event.target.value
        console.log(event.target.value)
        console.log(this)
        this.amount = event.target.value
        // this.setState({amount: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.amount)
        console.log(this.trainers)
        this.batchJourney(this.trainers, this.amount)
        event.preventDefault();
    }

    /*constructor(amount, trainers) {
        super()
        this.amount = amount;
        this.trainers = trainers;
    }*/


    render() {
        return (
            <div>
                <label>
                    Tip (for Dev)
                    <input type='number' id='amount' name='amount' value={this.props.amount}/>
                </label>
                <button onClick={() => batchEnterJourney(this.props.adr, this.props.trainers, this.props.amount)}>Enter
                    Journey
                </button>
            </div>
        )
    }
}


