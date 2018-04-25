import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="namefilter" className="pull-left">Name:</label>
        <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="statusfilter" className="pull-left">Category:</label>
        <select name="statusfilter" className="inputBox" value={props.filterCategoryText ? props.filterCategoryText : ''} onChange={e => props.handleFilteration(e, 'category')}>
          <option value="">{'All'}</option>
          <option value="Burgers">{'Burgers'}</option>
          <option value="Sandwitches">{'Sandwitches'}</option>
          <option value="Pizzas">{'Pizzas'}</option>
          <option value="Drinks">{'Drinks'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="typefilter" className="pull-left">Rating:</label>
        <select name="typefilter" className="inputBox" value={props.filterRatingText ? props.filterRatingText : ''} onChange={e => props.handleFilteration(e, 'rating')}>
          <option value="">{'All'}</option>
          <option value="1">{'1 STAR'}</option>
          <option value="2">{'2 STAR'}</option>
          <option value="3">{'3 STAR'}</option>
          <option value="4">{'4 STAR'}</option>
          <option value="5">{'5 STAR'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="typefilter" className="pull-left">Price:</label>
        <select name="typefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'All'}</option>
          <option value="Tagged">{'Associated'}</option>
          <option value="Untagged">{'Unassociated'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
