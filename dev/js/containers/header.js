import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as _ from '../../../node_modules/lodash';
require('./header.scss');

class Header extends Component {
    getCartCount(cart) {
        return _.reduce(_.values(cart), (amount, item) => {
            amount = amount + item.quantity
            return amount;
        }, 0);
    };

    render() {
        return (
            <div className="header">
                {_.map(['CATEGORIES', 'ITEMS', 'ADMIN PANEL'], (menu, idx) => {
                    return (<div className="menu-item" key={idx}>
                                {menu}
                            </div>)
                })}
                <div className="cart">
                    <img src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_black_24px.svg"></img>
                    <span>{this.getCartCount(this.props.cart)}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {cart: state.cart};
}

export default connect(mapStateToProps)(Header);