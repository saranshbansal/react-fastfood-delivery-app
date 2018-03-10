import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { arrayMove } from 'react-sortable-hoc';

export default class Dashboard extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
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