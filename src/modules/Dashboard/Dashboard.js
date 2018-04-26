import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './action.js';
import * as filterActions from '../Filters/action';
import MenuItemList from '../Menu/menuItemList';
import Cart from '../Cart/cart';
import Filters from "../Filters/filterManager";
class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        api.getAllItems()
        .then((response) => {
            const items = response.data;
            this.props.loadFoodItems(items.menu);
            this.props.filterMenu(items.menu);
        })
        .catch(error => {
            console.log(error);
            this.props.loadFoodItems([]);
            this.props.filterMenu([]);
        });
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <div className="col col-md-12 col-xs-12 filter-container">
                    <Filters />
                </div>
                <div className="col col-md-9 col-xs-8 menu-container">
                    <MenuItemList />
                </div>
                <div className="col col-md-3 col-xs-4 summary-container">
                    <Cart />
                </div>
            </div>
        );
    }
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadFoodItems: actions.loadFoodItems,
        filterMenu: filterActions.filterMenu
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);