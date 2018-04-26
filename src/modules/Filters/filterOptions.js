import React from 'react';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="namefilter" className="pull-left">Name:</label>
        <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="categoryfilter" className="pull-left">Category:</label>
        <select name="categoryfilter" className="inputBox" value={props.filterCategoryText ? props.filterCategoryText : ''} onChange={e => props.handleFilteration(e, 'category')}>
          <option value="">{'All'}</option>
          <option value="Burgers">{'Burgers'}</option>
          <option value="Sandwitches">{'Sandwitches'}</option>
          <option value="Pizzas">{'Pizzas'}</option>
          <option value="Drinks">{'Drinks'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="ratingfilter" className="pull-left">Rating:</label>
        <select name="ratingfilter" className="inputBox" value={props.filterRatingText ? props.filterRatingText : ''} onChange={e => props.handleFilteration(e, 'rating')}>
          <option value="">{'All'}</option>
          <option value="1">{'★'}</option>
          <option value="2">{'★★'}</option>
          <option value="3">{'★★★'}</option>
          <option value="4">{'★★★★'}</option>
          <option value="5">{'★★★★★'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="pricefilter" className="pull-left">Price:</label>
        <select name="pricefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'All'}</option>
          <option value="0,100">{'₹0 - ₹100'}</option>
          <option value="100,125">{'₹100 - ₹125'}</option>
          <option value="125,150">{'₹125 - ₹150'}</option>
          <option value="150,175">{'₹150 - ₹175'}</option>
          <option value="175,">{'₹175+'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
