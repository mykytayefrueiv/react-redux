import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as _ from '../../../../node_modules/lodash';

import CartListElement from './cartListElement';

require('./cart.scss');

class CartList extends Component {
    render() {
        return (
            <div className="cart-list">
                {_.map(_.values(this.props.orderedItems), (orderedItem) => (
                    <CartListElement key={orderedItem.item.id} itemToQuantity={orderedItem}/>
                ))}
            </div>
        );
    }
}

CartList.propTypes = {
    orderedItems: PropTypes.object
}

export default CartList;
