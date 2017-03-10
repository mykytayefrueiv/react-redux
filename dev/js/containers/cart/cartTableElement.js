import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from '../../../../node_modules/lodash';

require('./cart.scss');

class CartTableElement extends Component {
    calculateOrderedItemCost(itemToQuantity) {
        return itemToQuantity.quantity * itemToQuantity.item.cost;
    }

    render() {
        return (
            <tr>
                <td>
                    <h5>{this.props.itemToQuantity.item.name}</h5>
                    <img src={this.props.itemToQuantity.item.thumbnail} alt={this.props.itemToQuantity.item.name} />
                </td>
                <td>
                    <h5>{this.props.itemToQuantity.item.cost}</h5>
                </td>
                <td>
                    <h5>{this.props.itemToQuantity.quantity}</h5>
                </td>
                <td>
                    <h5>{this.calculateOrderedItemCost(this.props.itemToQuantity)}</h5>
                </td>
            </tr>
        );
    }
}

CartTableElement.propTypes = {
    itemToQuantity: PropTypes.object
}

export default CartTableElement;
