import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <div className="Showcase__style__handle"></div>); // This can be any component you want

const SortableItem = SortableElement(({ value }) =>
    <div className="Showcase__style__item Showcase__style__stylizedItem">
        <DragHandle />
        {value}
    </div>
);

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className="Showcase__style__list Showcase__style__stylizedList">
            {items.map((value, index) => (
                <SortableItem className="Showcase__style__item Showcase__style__stylizedItem" key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

export default class SortableComponent extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return (
            <div className="Showcase__Content__root">
                <SortableList className="Showcase__style__list Showcase__style__stylizedList" items={this.state.items} onSortEnd={this.onSortEnd} useDragHandle={false} />
            </div>
        );
    }
}

render(<SortableComponent />, document.getElementById('root'));