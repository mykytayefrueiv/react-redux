import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCategory, removeCategory} from '../../actions/index'
import * as _ from '../../../../node_modules/lodash';

require('./admin-panel.scss');

class Categories extends Component {
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
            <div className="panel-container">
               <div className="categories list">
                   {_.map(this.props.categories, (c, idx) => {
                       return (
                           <div key={idx} className="category-container">
                                <span className="title">{_.toUpper(c)}</span>
                                <i onClick={() => this.props.removeCategory(idx) } className="material-icons remove">clear</i>    
                           </div>)
                   })}
                   <div className="category-container">
                       <input ref="newCategoryTitle" type="text"/>
                       <i onClick={() => this.addCategory()} className="material-icons add">add</i>
                   </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);