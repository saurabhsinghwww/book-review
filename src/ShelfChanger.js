import React, { Component } from "react";
import PropTypes from "prop-types";


class ShelfChanger extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

    state = {
        currentShelf: this.props.book.shelf,
        updating: false
    };

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
        this.setState({
            currentShelf: event.target.value,
            updating: true
        });
    };

    componentWillReceiveProps(){
        // Remove the process indicator
        this.setState({
            updating: false
        });
    }

    render(){
        return(
            <div className="book-shelf-changer">
                <select
                    value={this.state.currentShelf}
                    onChange={this.changeShelf}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="added">Added</option>
                    <option value="notAdded">Not Added</option>
                </select>
                { this.state.updating && (<div className="cssload-spin-box"></div>)}
            </div>
        )
    }
}

export default ShelfChanger;
