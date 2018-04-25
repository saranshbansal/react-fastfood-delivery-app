import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cart extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let total = 0.0;
        let summaryJsx = this.props.selectedItems && this.props.selectedItems.map((item) => {
            total += item.price;
            return(
                <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>{' X '}</td>
                    <td>
                        {item.price}
                    </td>
                    <td>{' = '}</td>
                    <td>
                        <b>
                            {'$' + item.price}
                        </b>
                    </td>
                </tr>
            );
        });
        return (
            <div className="cart-container">
                <div className="card-title hr">
                    {'Order Summary (' + this.props.selectedItems.length + ')'}
                </div>
                <br/>
                <table class="table">
                    {summaryJsx}
                </table>
                <br/>
                <div className="cart-total">
                    {'Total: $' + total}
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