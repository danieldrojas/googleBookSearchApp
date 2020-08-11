import React, { useState } from 'react';
import API from '../../utils/API'
import axios from 'axios'

const SearchForm = () => {
    const [book, setBook] = useState("")
    const [foundBooks, setFoundBooks] = useState([])
    // const [saveBooks, setSaveBooks] = useState([])
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
                const { volumeInfo, id } = book
                volumeInfo.id = id
                return bookArray.push(volumeInfo)

            })
            // console.log('this is my book array: ', bookArray)

            setFoundBooks(bookArray)
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleSavedBooks = (e, book) => {
        e.preventDefault()

        // console.log("you got ckicked")
        // console.log("this is may event: ", e.target.id)
        // console.log('this is our book to save', book)

        var newBook = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.smallThumbnail,
            link: book.infoLink,

        }
        console.log(newBook)
        axios.post("/api/books", newBook).then(function () {

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
                                    <div className="row" style={{ padding: "40px" }} key={book.id}>
                                        <div className="card-body" style={{
                                            backgroundColor: "#f8f9fa", padding: "40px"}}>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="card-title">{book.title}</h5>
                                                </div>
                                                <div className="col">
                                                    <a href={book.infoLink} target="_blanck">
                                                        <button className="btn btn-info"> View</button>
                                                    </a>
                                                    <button className="btn btn-info mx-2"
                                                        id={book.id}

                                                        onClick={(e) => { handleSavedBooks(e, book) }} >Save</button>

                                                    {/* </Link> */}

                                                </div>
                                            </div>
                                            {/* {console.log(book)} */}
                                            <h6 className="card-subtitle mb-2 text-muted" >Written by {book.authors}</h6>
                                            <div className="row">
                                                <div className="col-3 text-center">
                                                    <img alt="book" src={book.imageLinks.smallThumbnail}></img>
                                                </div>
                                                <div className="col">
                                                    <p className="card-text">{book.description}</p>
                                                </div>

                                            </div>

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