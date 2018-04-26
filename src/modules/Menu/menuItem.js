import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MenuItem = (props) => {
    const op = Number(props.data.price);
    const d = Number(props.data.discount);
    let finalPrice = op - (Number(op) * Number(d) / 100);
    props.data.discountPrice = finalPrice;
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
                    {props.data.discount > 0 ? (
                        <div>
                            {'Price - '}<span className="card-price original-price">{'₹' + props.data.price}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="card-price discounted-price">{'₹' + finalPrice + ' (-'+ props.data.discount+'%)'}</span>
                        </div>
                    ) : (
                        <span className="card-price">{'Price - ₹' + props.data.price}</span>
                    )}
                    <hr />
                    <span className="ingredients">{'Ingredients: ' + props.data.ingredients.toString()}</span>
                </div>
            </div>
            <button onClick={e => props.addToCart(props.data)}>ADD</button>
        </div>
    );
};

export default MenuItem;
