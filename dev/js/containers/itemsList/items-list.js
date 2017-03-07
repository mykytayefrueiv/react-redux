import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../../actions/index'
require('./items-list-styles.scss');

class ItemList extends Component {
    renderList() {
        return this.props.items.map((item) => {
            return (
                <div className="item" key={item.id}>
                  <img  className="item-image" src={item.thumbnail}/>
                  <span className="title">{item.name}</span>
                  <span className="description">{item.description}</span>
                  <span className="action-button buy" onClick={() => this.props.addToCart(item)}>
                      <img src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_add_shopping_cart_black_24px.svg" alt=""/>
                      ADD TO CART</span>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="items-container">
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToCart: addToCart}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
