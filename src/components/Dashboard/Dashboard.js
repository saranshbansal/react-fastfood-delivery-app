import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { arrayMove } from 'react-sortable-hoc';

export default class Dashboard extends Component {
    state = {
        items: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'],
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        console.log('moving...');
        
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return <CardContainer
                items={this.state.items}
                onSortEnd={this.onSortEnd}
            />
    }
}