import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cart extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let summaryJsx = this.props.selectedItems && this.props.selectedItems.map((item) => {
            return(
                <table class="table">
                    <tr class="col col-md-8 col-xs-10">
                        {item.name + " X $" + item.price + ' = '}
                    </tr>
                    <tr class="col col-md-4 col-xs-2">
                        <b>
                            {'$' + item.price}
                        </b>
                    </tr>
                </table>
            );
        });
        return (
            <div className="cart-container">
                <div className="card-title hr">
                    {'Order Summary (' + this.props.selectedItems.length + ')'}
                </div>
                <br/>
                {summaryJsx}
                <br/>
                <div>
                    {'Total: $'}
                </div>
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
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);