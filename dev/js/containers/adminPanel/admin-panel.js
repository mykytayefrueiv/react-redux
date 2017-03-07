import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link, Switch} from 'react-router-dom';

import Categories from './categories';
import Items from './items';
import Item from './item';
import {addCategory, removeCategory} from '../../actions/index'
import * as _ from '../../../../node_modules/lodash';

require('./admin-panel.scss');

class AdminPanel extends Component {
    addCategory() {
        let newCategory = this.refs.newCategoryTitle.value;
        if(newCategory) {
            this.props.addCategory(newCategory);
            this.refs.newCategoryTitle.value = "";
        }
    }

    expandItem(id) {
        console.log(this.refs[`itemContainer${id}`]);
        this.refs[`itemContainer${id}`].classList.add('expanded');
    }

    render() {
        return (
           <div>
                <div>
                    <Link to={`/panel/categories`}><span className="title">CATEGORIES</span></Link>
                    <br/>
                    <Link to={`/panel/items`}><span className="title">ITEMS</span></Link>
                </div>
                <Route exact path={`/panel/categories`} component={Categories}/>
                <Route exact path={`/panel/items`} component={Items}/>
                <Route path={`/panel/items/edit/:id`} component={Item}/>
                <Route exact path={`/panel/items/new`} component={Item}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items, 
        categories: state.categories
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(
        {
            addCategory,
            removeCategory: removeCategory
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
