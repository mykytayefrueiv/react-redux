import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from '../../../../node_modules/lodash';

require('./cart.scss');

class CartListElement extends Component {
    calculateOrderedItemCost(itemToQuantity) {
        return itemToQuantity.quantity * itemToQuantity.item.cost;
    }

    render() {
        return (
            <div className="cart-list-element">
                <span>{this.props.itemToQuantity.item.name}</span>
                <img src={this.props.itemToQuantity.item.thumbnail} alt={this.props.itemToQuantity.item.name} />
                <span>{this.props.itemToQuantity.item.cost}</span>
                <span>{this.props.itemToQuantity.quantity}</span>
                <span>{this.calculateOrderedItemCost(this.props.itemToQuantity)}</span>
            </div>
        );
    }
}

CartListElement.propTypes = {
    itemToQuantity: PropTypes.object
}

export default CartListElement;
