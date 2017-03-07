import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { selectItem, createUpdateItem, removeItemSelection } from '../../actions/index'
import * as _ from '../../../../node_modules/lodash';

require('./admin-panel.scss');

class Item extends Component {
    constructor(props) {
        super(props);
        let defaultState = {
            id: 0,
            name: '',
            cost: 0,
            category: '',
            description: '',
            thumbnail: ''
        };

        this.state = _.isEmpty(this.props.selectedItem) ? defaultState : { ...this.props.selectedItem };
        this.handleChange = this.handleChange.bind(this);
    }

    saveForm() {
        let reducedNewItem = _.reduce(document.forms[0], (newItem, input) => {
            newItem[input.name] = input.value;
            return newItem;
        }, {});

        let itemToSave = {
            id: this.state.id,
            item: _.assign({}, this.state, reducedNewItem)
        };
        this.props.createUpdateItem(itemToSave);
        history.back();
    }

    componentWillUnmount() {
        this.props.removeItemSelection();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });      
    }

    render() {
        return (
            <form className="edit-form">
                <span>Name</span>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>

                <span>Cost</span>
                <input 
                    type="text" 
                    name="cost" 
                    value={this.state.cost} 
                    onChange={this.handleChange}/>

                <span>Category</span>
                <select name="category" value={this.state.category} onChange={this.handleChange}>
                    {_.map(this.props.categories, (c, id) => (
                        <option key={id} value={c}>{_.toUpper(c)}</option>   
                    ))}
                </select>

                <span>Description</span>
                <textarea
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}/>

                <span>Thumbnail</span>
                <input
                    type="text"
                    name="thumbnail"
                    value={this.state.thumbnail}
                    onChange={this.handleChange}/>

                <i className="material-icons done" onClick={() => this.saveForm()}>done</i>
            </form>
        );
    }
}

Item.propTypes = {
    selectedItem: PropTypes.object
}

function mapStateToProps(state) {
    return { 
        selectedItem: state.selectedItem,
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectItem,
        createUpdateItem,
        removeItemSelection
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);