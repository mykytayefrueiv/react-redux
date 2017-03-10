import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as _ from '../../../../node_modules/lodash';

import CartTableElement from './cartTableElement';

require('./cart.scss');

class CartTable extends Component {
    calculateSum() {
        return _.reduce(_.values(this.props.orderedItems), (sum, orderedItem) => {
            sum += orderedItem.quantity * orderedItem.item.cost;
            return sum;
        }, 0);
    }
    render() {
        return (
            <table className="cart-table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Final cost</th>
                    </tr>
                </thead>
                <tbody>
                     {_.map(_.values(this.props.orderedItems), (orderedItem) => (
                        <CartTableElement key={orderedItem.item.id} itemToQuantity={orderedItem}/>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"><h5>Sum</h5></td>
                        <td>{this.calculateSum()}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

CartTable.propTypes = {
    orderedItems: PropTypes.object
}

export default CartTable;
