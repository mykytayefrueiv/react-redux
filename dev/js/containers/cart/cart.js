import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as _ from '../../../../node_modules/lodash';
import {Link} from 'react-router-dom'

import CartList from './cartList';
require('./cart.scss');

class Cart extends Component {
    render() {
        return (
            <CartList orderedItems={this.props.cart} />
        );
    }
}

function mapStateToProps(state) {
    return {cart: state.cart};
}

export default connect(mapStateToProps)(Cart);
