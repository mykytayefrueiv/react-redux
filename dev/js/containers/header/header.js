import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from '../../../../node_modules/lodash';
import { Link } from 'react-router-dom'

require('./header.scss');

class Header extends Component {
    getCartCount(cart) {
        return _.reduce(_.values(cart), (amount, item) => {
            amount = amount + item.quantity;
            return amount;
        }, 0);
    };

    renderCart() {
        if (this.getCartCount(this.props.cart)) {
            return (<Link to="/cart">
                <img
                    src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_black_24px.svg"></img>
                <span>{this.getCartCount(this.props.cart)}</span>
            </Link>)
        }
        return (
            <div>
                <img
                    src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_shopping_cart_black_24px.svg"></img>
                <span>{this.getCartCount(this.props.cart)}</span>
            </div>);
    }

    render() {
        return (
            <div className="header">
                <div className="menu-item">
                    <Link to="/items">ITEMS</Link>
                </div>
                <div className="menu-item">
                    <Link to="/panel">ADMIN PANEL</Link>
                </div>
                <div className="cart-icon">
                    {this.renderCart()}

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
