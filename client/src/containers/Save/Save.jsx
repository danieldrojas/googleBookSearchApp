import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Save = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        axios
            .get("/api/books")
            .then((res) => {
                console.log("this is the save page: ", res)
                setBooks(res.data.data)
            })
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {books.length ? (
                            books.map((book) => (
                                <div className="row" style={{ padding: "40px" }} key={book.id}>
                                    <div className="card-body" style={{ backgroundColor: "grey", padding: "40px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title">{book.title}</h5>
                                            </div>
                                            <div className="col">
                                                <a href={book.infoLink}>
                                                    <button> View</button>
                                                </a>
                                                {/* <button
                                                    id={book.id}

                                                    onClick={(e) => { handleSavedBooks(e, book) }} >Save</button> */}

                                                {/* </Link> */}

                                            </div>
                                        </div>
                                        {/* {console.log(book)} */}
                                        <h6 className="card-subtitle mb-2 text-muted">Written by {book.authors}</h6>
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <img alt="book" src={book.image}></img>
                                            </div>
                                            <div className="col">
                                                <p className="card-text">{book.description}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            ))

                        ) : (<h3>No books saved</h3>
                            )}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Save;