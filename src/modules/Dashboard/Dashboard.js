import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './action.js';
import MenuItemList from '../Menu/menuItemList';
import Cart from '../Cart/liveCart';
import Order from '../Order/order';

const initialstate = {
    showOrder: false,
};
class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = initialstate;
    }

    componentDidMount() {
        api.getAllItems()
        .then((response) => {
            console.log(response);
            const items = response.data;
            this.props.loadFoodItems(items.menu);
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleCheckout = () => {
        this.setState({showOrder: true});
    }

    render() {
        return (
            <div>
                <div className="col col-md-12 col-xs-12">
                    <MenuItemList />
                </div>
                <div className="col col-md-12 col-xs-12">
                    <Cart 
                        handleCheckout={this.handleCheckout}
                    />
                </div>
                {this.state.showOrder && (
                    <div className="col col-md-12 col-xs-12">
                        <Order />
                    </div>
                )}
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