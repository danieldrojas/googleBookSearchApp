import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import axios from 'axios'
// import { query } from 'express';

const SearchForm = () => {
    const [book, setBook] = useState("")
    const [foundBooks, setFoundBooks] = useState([])


    // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        loadBooks()
    }


    // console.log(book)
    const loadBooks = () => {

        API.getBook(book).then((res) => {
            // console.log(res.data.items[0].volumeInfo.title)
            const bookArray = [];
            res.data.items.map((book) => {
                bookArray.push(book.volumeInfo)
            })
            // console.log('this is my book array: ', bookArray)

            setFoundBooks(bookArray)
        }).catch((err) => {
            console.log(err)
        })
    }





    return (
        <div>
            <div className="container-sm">
                <div className="row">
                    <div className="col text-center">
                        <div className="jumbotron">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group" >
                                    <label htmlFor="text"><h1>Google Books</h1></label>
                                    <input
                                        placeholder="Search a new book"
                                        type="text" className="form-control" id="book"
                                        value={book}
                                        onChange={(e) => {
                                            setBook(e.target.value)
                                        }} />
                                </div>
                                {/* why onClick?? */}
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="jumbotron">
                            <h3>Books Found</h3>
                            <ol>
                                {console.log("this is the foundBooks", foundBooks.foundBooks)}
                                {foundBooks.length ? (
                                    foundBooks.map((book) => (
                                     
                                    <li>{book.title}</li>
                                        
                                    

                                     ))

                                ) : (<h3>No book found</h3>
                                    )}
                            </ol>



                        </div>



                    </div>

                </div>

                



            </div>
        </div >
    );
};

export default SearchForm;