import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Card from './Card';

const Cards = SortableContainer(({ items }) => {
    return (
        <div className="Showcase__style__list Showcase__style__stylizedList">
            {items.map((value, index) => (
                <Card className="Showcase__style__item Showcase__style__stylizedItem" key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

export default Cards;