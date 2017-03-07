import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, BrowserRouter as Route} from 'react-router-dom';
import {selectItem} from '../../actions/index'
import Item from './item';
import * as _ from '../../../../node_modules/lodash';

require('./admin-panel.scss');

class Items extends Component {
    addCategory() {
        let newCategory = this.refs.newCategoryTitle.value;
        if (newCategory) {
            this
                .props
                .addCategory(newCategory);
            this.refs.newCategoryTitle.value = "";
        }
    }

    expandItem(id) {
        this
            .refs[`itemContainer${id}`]
            .classList
            .toggle('expanded');
        this
            .refs[`itemContent${id}`]
            .classList
            .toggle('hidden');
    }

    render() {
        return (
            <div className="items-panel-container">
                <div className="items list">
                    {_.map(this.props.items, (i, idx) => {
                        return (
                            <div key={idx}>
                                <div
                                    onClick={() => this.expandItem(idx)}
                                    ref={`itemContainer${idx}`}
                                    className="item-container">
                                    <div className="item-upper-part">
                                        <span className="title">{_.toUpper(i.name)}</span>
                                        <i className="material-icons">keyboard_arrow_down</i>
                                    </div>
                                    <div ref={`itemContent${idx}`} className="item-content hidden">
                                        <img className="item-image" src={i.thumbnail}></img>
                                        <span
                                            style={{
                                            display: 'flex',
                                            'justify-content': 'space-between'
                                        }}>
                                            {i.description}
                                            <Link to={`/panel/items/edit/${i.id}`}>
                                                <span className="title">
                                                    <i className="material-icons edit" onClick={() => this.props.selectItem(i)}>mode_edit</i>
                                                </span>
                                            </Link>
                                        </span>
                                        <span>{i.cost}$</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <div className="item-container">
                            <Link to={`/panel/items/new`}>
                                <div className="item-upper-part" onClick={() => this.props.selectItem({})}>
                                    <span className="title">NEW ITEM</span>
                                    <i className="material-icons add">add</i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {items: state.items, selectedItem: state.selectedItem};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);