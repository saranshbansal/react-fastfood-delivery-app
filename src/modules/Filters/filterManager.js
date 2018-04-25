import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import FilterOptions from "./filterOptions";

const initialstate = {
    allItems: [],
    filteredItems: [],
    filterNameText: '',
    filterCategoryText: '',
    filterRatingText: '',
    filterPriceText: ''
};
class Filters extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = initialstate;
    }

    componentWillMount() {
        this.setState({
            ...initialstate,
            filteredItems: [...this.props.items],
            allItems: [...this.props.items]
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            this.setState({
                allItems: [...nextProps.items],
                filteredItems: [...nextProps.items]
            });
        }
    }

    handleFilteration = (event, ops) => {
        const filterText = event.target.value;
        let filterCategoryText = this.state.filterCategoryText;
        let filterRatingText = this.state.filterRatingText;
        let filterNameText = this.state.filterNameText;
        let filterPriceText = this.state.filterPriceText;
        let array = this.state.allItems || [];
        if (ops === 'category') {
            filterCategoryText = filterText;
            array = array.filter((obj) => {
                let ok = true;

                if (filterCategoryText !== '') {
                    ok = (obj.categoryName === filterCategoryText);
                }

                return ok;
            });
        } else if (ops === 'rating') {
            filterRatingText = filterText;
        } else if (ops === 'price') {
            filterRatingText = filterText;
        } else {
            filterNameText = filterText;
        }
        /* array = array.forEach((obj) => {
            let filteredItems = obj.items.filter((item) => {
                let ok = true;

                if (ok && filterRatingText !== '') {
                    ok = item.rating == filterRatingText;
                }

                if (ok && filterPriceText !== '') {
                    ok = (item.price > filterRatingText.split(",")[0] || (item.price < filterRatingText.split(",")[1]));
                }

                if (ok && filterNameText !== '') {
                    ok = (item.name.toLowerCase().search(filterNameText.toLowerCase()) > -1);
                }
                return ok;
            });
            obj.items = filteredItems;

        }); */
        // set State
        this.setState({ filterNameText, filterCategoryText, filterRatingText, filterPriceText, filteredItems: array });
        this.props.filterItems(array);
    };


    render() {
        return (
            <FilterOptions
                filterCategoryText={this.state.filterCategoryText}
                filterRatingText={this.state.filterRatingText}
                filterNameText={this.state.filterNameText}
                filterPriceText={this.filterPriceText}
                handleFilteration={this.handleFilteration}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.DashboardReducer.items,
        filteredItems: state.DashboardReducer.filteredItems
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterItems: actions.filterMenu
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);