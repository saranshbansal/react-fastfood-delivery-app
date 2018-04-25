import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './action.js';
import MenuItemList from '../Menu/menuItemList';
import Cart from '../Cart/cart';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        api.getAllItems()
        .then((response) => {
            const items = response.data;
            this.props.loadFoodItems(items.menu);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <div className="col col-md-9 col-xs-7">
                    <MenuItemList />
                </div>
                <div className="col col-md-3 col-xs-5">
                    <Cart />
                </div>
            </div>
        );
    }
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadFoodItems: actions.loadFoodItems
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);