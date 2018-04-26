import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MenuItem = (props) => {
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                    <span className="card-title">{props.data.name}</span>
                    <br/>
                    <StarRatingComponent
                     name="ono-rating" 
                        starCount={5}
                        value={props.data.rating}
                    />
                    <br/>
                    <span className="card-price">{'Price - ₹' + props.data.price}</span>
                    <hr />
                    <span className="ingredients">{'Ingredients: ' + props.data.ingredients.toString()}</span>
                </div>
            </div>
            <button onClick={e => props.addToCart(props.data)}>ADD</button>
        </div>
    );
};

export default MenuItem;
