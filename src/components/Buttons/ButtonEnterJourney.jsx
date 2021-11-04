import React from 'react';
import {sendTrainer} from '../../static/js/enterJourney'

export class ButtonEnterJourney extends React.Component {

    id;

    constructor(id) {
        super();
        this.id = id;
    }

    render() {
        return (<div>
                <input type='number' name='id' placeholder={'Id Trainer'}/>
                <button onClick={sendTrainer}>Enter Journey</button>
            </div>
        );
    }

}

