import React from 'react';
import {batchEnterJourney, batchLeaveJourney} from "../../static/js/batchJourney";

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

    amountChange(event) {

        // this.amount=event.target.value
        console.log(event.target.value)
        console.log(this)
        // window.amount = event.target.value
        this.setState({
            [event.target.name]: event.target.value
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

    /*constructor(amount, trainers) {
        super()
        this.amount = amount;
        this.trainers = trainers;
    }*/


    render() {
        const { items } = this.state;
        return (
            <div>
                <label>
                    Tip (for Dev)
                    <input type='number' id='amount' name='amount' value={this.state.amount} onChange={(e)=>this.amountChange(e)}/>
                </label>
                <button onClick={() => batchEnterJourney(this.props.adr, this.props.trainers, this.state.amount)}>Enter
                    Journey
                </button>
                <button onClick={() => batchLeaveJourney(this.props.adr, this.props.trainers, this.state.amount)}>Leave
                    Journey
                </button>
            </div>
        )
    }
}


