import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action.js';
import MenuItem from './menuItem';

class MenuItemList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    addToSelection = (data) => {
        const arr = [...this.props.selectedItems];
        arr.push(data);
        this.props.addItemToSelection(arr);
    }

    render() {
        let menuItemMarkup = this.props.items && this.props.items.map((menu, index) => {

            let itemsInMenu = menu && menu.items.map((data) => {
                return (<MenuItem
                    data={data}
                    key={data.id}
                    addToCart={this.addToSelection}
                />);
            });

            return (
                <div key={index} className="col-md-3 col-sm-4 col-xs-6">
                    <h2 className="category">
                        {menu.categoryName}
                    </h2>
                    {itemsInMenu}
                </div>
            );
        });
        return (
            <div>
                {menuItemMarkup}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.MenuReducer.items,
        selectedItems: state.OrderReducer.selection
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItemToSelection: actions.addItemToSelection
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);