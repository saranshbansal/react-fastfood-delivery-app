import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { arrayMove } from 'react-sortable-hoc';

export default class Dashboard extends Component {
    state = {
        items: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'],
    };
    
    render() {
        return (
            <div>
                {this.state.items}
            </div>
        );
    }
}