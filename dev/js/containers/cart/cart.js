import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from '../../../../node_modules/lodash';
import { Link } from 'react-router-dom'
import { checkoutCart } from '../../actions/index';
import CartTable from './cartTable';
require('./cart.scss');

class Cart extends Component {
    componentWillMount() {
        if (_.isEmpty(this.props.cart)) {
            this.state = { timer: 5 };
            this.state.intervalId = setInterval(() => {
                this.setState({ timer: this.state.timer -= 1 });
                if (this.state.timer === 0) {
                    history.back();
                }
            }, 1000);
        }
    }

    componentWillUnmount() {
        if (this.state && this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    render() {
        if (_.isEmpty(this.props.cart)) {
            return (
                <h5>Oops, cart is empty. Go back in {this.state.timer} secs..</h5>
            );
        }
        return (
            <div className="cart">
                <div className="middle-container">
                    <CartTable orderedItems={this.props.cart} />
                    <button onClick={() => { this.props.checkoutCart(); } }>
                        CHECKOUT
                    </button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            checkoutCart,
        }, dispatch);
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
