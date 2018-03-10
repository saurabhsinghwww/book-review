import React from "react";
import { Link, Route } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";
import "./Login.css";
import "./App.css";


class BooksApp extends React.Component {
    MAX_RESULTS = 30;

    state = {
        books: [],
        searchBooks: [],
        userName: undefined
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        BooksAPI.getAll(this.state.userName).then((books) => {
            this.setState({books: books});
        });
    }

    getShelfBooks(shelfName){
        return (this.state.books)?this.state.books.filter((b) => b.shelf === shelfName): []
    }

    changeShelf = (book, newShelf) => {
        BooksAPI.updateShelf(book, newShelf, this.state.userName).then(() => {
            // Update the local copy of the book
            book.shelf = newShelf;

            // Filter out the book and append it to the end of the list
            // so it appears at the end of whatever shelf it was added to.
            this.setState(state => ({
                books: state.books.filter(b => b.isin !== book.isin).concat([ book ])
            }));
        });
    };

    updateQuery = (query) => {
        if(query){
            BooksAPI.search(query, this.MAX_RESULTS).then((books) => {
                // if the BookAPI.search worked properly, this would be unnecessary
                if(books.length){
                    books.forEach((book, index) => {
                        let myBook = this.state.books.find((b) => b.id === book.isin);
                        book.shelf = myBook ? myBook.shelf : 'none';
                        books[index] = book;
                    });

                    this.setState({
                        searchBooks: books
                    });
                }

            });
            } else {
            this.setState({
                searchBooks: []
            });
        }
    };

    updateUserName = event => {

        let userName = event.target.value;
        
        localStorage.setItem('userName', userName);

        this.setState({            
            userName
        });
    }

    addReview = (book, event, newShelf) => {
        
        let newReview = event.target.value;
        
        BooksAPI.updateReview(book, newReview, this.state.userName).then(() => {
            // Update the local copy of the book
            book.review = newReview;
            this.forceUpdate();
        });
    }

    render() {

        let userName = localStorage.getItem('userName');

        if (!userName) {

            return (
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="text" bsSize="large">
                        <ControlLabel>User Name: </ControlLabel>
                        <FormControl
                        autoFocus
                        type="text"
                        value={this.state.text}
                        onBlur={this.updateUserName}
                        />
                    </FormGroup>          
                    </form>
                </div>
            )
        } else {
            this.state.userName = userName;
        }

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h2>User: {this.state.userName}</h2>
                            <h1>Book Review</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelf
                                    title="Added"
                                    books={this.getShelfBooks("added")}
                                    changeShelf={this.changeShelf}
                                    addReview={this.addReview}
                                />
                                <Shelf
                                    title="Not added"
                                    books={this.getShelfBooks("notAdded")}
                                    changeShelf={this.changeShelf}
                                    addReview={this.addReview}
                                />
                            </div>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
