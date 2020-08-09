import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Cart/action';
import MenuItem from './MenuItem';

class MenuItemList extends Component {
    addToSelection = (data) => {
        const { addItemToSelection } = this.props;

        addItemToSelection([...this.props.selectedItems, data]);
    }

    render() {
        const { filteredItems } = this.props;

        let menuItemMarkup = filteredItems && filteredItems.map((menu, index) => {
            let itemsInMenu = menu && menu.items.map(data => <MenuItem
                data={data}
                key={data.id}
                addToCart={this.addToSelection}
            />
            );

            return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <h2 className="category">
                        {menu.categoryName}
                    </h2>
                    {itemsInMenu}
                </div>
            );
        });

        return (<Fragment>
            {menuItemMarkup}
        </Fragment>);
    }
}

function mapStateToProps(state) {
    return {
        filteredItems: state.DashboardReducer.filteredItems,
        selectedItems: state.CartReducer.selection
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addItemToSelection: actions.addItemToSelection
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemList);