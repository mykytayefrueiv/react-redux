import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { selectItem, updateItem } from '../../actions/index'
import * as _ from '../../../../node_modules/lodash';

require('./admin-panel.scss');

class Item extends Component {
    saveForm() {
        let reducedNewItem = _.reduce(document.forms[0], (newItem, input) => {
            newItem[input.name] = input.value;
            return newItem;
        }, {});

        let itemToSave = {
            id: this.props.selectedItem.id,
            item: _.assign(this.props.selectedItem, reducedNewItem)
        };
        this.props.updateItem(itemToSave);
        history.back();
    }

    render() {
        return (
            <form className="edit-form">
                <span>Name</span>
                <input type="text" name="name" defaultValue={this.props.selectedItem.name}/>
                <span>Cost</span>
                <input type="text" name="cost" defaultValue={this.props.selectedItem.cost}/>
                <span>Category</span>
                <input
                    type="text"
                    name="category"
                    defaultValue={this.props.selectedItem.category}/>
                <span>Description</span>
                <textarea
                    type="text"
                    name="description"
                    defaultValue={this.props.selectedItem.description}/>
                <span>Thumbnail</span>
                <input
                    type="text"
                    name="thumbnail"
                    defaultValue={this.props.selectedItem.thumbnail}/>
                <i className="material-icons done" onClick={() => this.saveForm()}>done</i>
            </form>
        );
    }
}

Item.propTypes = {
    selectedItem: PropTypes.object
}

function mapStateToProps(state) {
    return {selectedItem: state.selectedItem, items: state.items};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectItem,
        updateItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);