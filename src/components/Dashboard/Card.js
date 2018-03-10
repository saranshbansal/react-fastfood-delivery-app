import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <div className="Showcase__style__handle"></div>);

const Card = SortableElement(({ value }) =>
    <div className="Showcase__style__item Showcase__style__stylizedItem">
        <DragHandle />
        {value}
    </div>
);

export default Card;