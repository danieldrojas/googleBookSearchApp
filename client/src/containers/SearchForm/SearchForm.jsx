import React, { useState } from 'react';
import API from '../../utils/API'

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
                return bookArray.push(book.volumeInfo)
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
                                    <label htmlFor="text"><h1>Book Search</h1></label>
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


                </div>
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h5>Results</h5>


                            {/* {console.log("this is the foundBooks", foundBooks.foundBooks)} */}
                            {foundBooks.length ? (
                                foundBooks.map((book) => (
                                    <div style={{ padding: "40px" }} className="row">
                                        <div style={{ backgroundColor: "grey", padding: "40px" }} className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="card-title">{book.title}</h5>
                                                </div>
                                                <div className="col">
                                                    <button>View</button>
                                                </div>
                                            </div>
                                            {console.log(book)}
                                            <h6 className="card-subtitle mb-2 text-muted">Written by {book.authors}</h6>
                                            <div className="row">
                                                <div className="col-3 text-center">
                                                    <img atl="book" src={book.imageLinks.smallThumbnail}></img>
                                                </div>
                                                <div className="col">
                                                    <p className="card-text">{book.description}</p>
                                                </div>

                                            </div>
                                            <a href="/" className="card-link">Card link</a>
                                            <a href="/" className="card-link">Another link</a>
                                        </div>
                                    </div>

                                ))

                            ) : (<h3>No book found</h3>
                                )}




                        </div>
                    </div>



                </div>





            </div>
        </div >
    );
};

export default SearchForm;