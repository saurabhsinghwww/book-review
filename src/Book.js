import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

class Book extends Component{

    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired,
        addReview: PropTypes.func.isRequired,
    };

    updateState(e) {
        this.setState({review: e.target.value});
    }

    render(){

        const { book, addReview } = this.props;
        const review = book.review;
        return(
            <div className="book" id={book.isin}>
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <ShelfChanger
                        book={book}
                        changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">ISIN: {book.isin}</div>
                <div className="book-authors">{book.authors}</div>
                { (book.shelf === 'added')?
                <div className="book-reivew">Review: <textarea name="body" value={review} ref="bookReview" onChange = {this.updateState} onBlur={(event) => addReview(book, event)} /></div>
                : null}
            </div>
        )
    }
}

export default Book;
