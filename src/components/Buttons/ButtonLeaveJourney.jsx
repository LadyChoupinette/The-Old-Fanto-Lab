import React from 'react';
import {leaveJourney} from "../../static/js/leaveJourney";

export class ButtonLeaveJourney extends React.Component {

    amount = 0.1;
    id;

    constructor(amount, id) {
        super()
        this.amount = amount;
        this.id = id;
    }

    render() {
        return (
            <div>
                <label for={this.amount}>Tip (for Dev)</label>
                <input type='number' name='amount' aria-label={'Tips'} value={0.1}/>
                <button onClick={() => leaveJourney(this.amount, this.id)}>Leave Journey</button>
            </div>
        )
    }
}


