import React, { Component } from 'react';
import Cards from './Cards';

export default class CardContainer extends Component {
    render() {
        return (
            <div className="Showcase__Content__root">
                <Cards className="Showcase__style__list Showcase__style__stylizedList" items={this.props.items} onSortEnd={this.props.onSortEnd} useDragHandle={false} />
            </div>
        );
    }
}