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
        this.props.addItemToSelection(data);
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
                <div key={index} className="col-md-3 col-xs-3">
                    <h2>
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
        items: state.MenuReducer.items
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItemToSelection: actions.addItemToSelection
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);