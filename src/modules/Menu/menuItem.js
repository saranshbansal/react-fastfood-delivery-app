import React from 'react';

const MenuItem = (props) => {
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                    <div>
                        <h3 className="card-title">{props.data.name}</h3>
                        <p>
                            {'Ratings: ' + props.data.rating}
                        </p>
                    </div>
                    <hr />
                    <p className="card-price">{'Price - $' + props.data.price}</p>
                    {'Options: ' + props.data.options.toString()}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
