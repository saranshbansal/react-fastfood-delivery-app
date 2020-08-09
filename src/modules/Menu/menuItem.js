import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MenuItem = ({ data, addToCart }) => {
    const op = Number(data.price);
    const d = Number(data.discount);
    let finalPrice = op - (Number(op) * Number(d) / 100);
    data.discountPrice = finalPrice;
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                    <span className="card-title">{data.name}</span>
                    <br />
                    <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={Number(data.rating)}
                    />
                    <br />
                    {data.discount > 0 ? (
                        <div>
                            {'Price - '}<span className="card-price original-price">{'₹' + data.price}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="card-price discounted-price">{'₹' + finalPrice + ' (-' + data.discount + '%)'}</span>
                        </div>
                    ) : (
                            <span className="card-price">{'Price - ₹' + data.price}</span>
                        )}
                    <hr />
                    <span className="ingredients">{'Ingredients: ' + data.ingredients.toString()}</span>
                </div>
            </div>
            <button onClick={e => addToCart(data)}>ADD</button>
        </div>
    );
};

export default MenuItem;
