import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Save = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        axios
            .get("/api/books")
            .then((res) => {
                // console.log("this is the save page: ", res)
                setBooks(res.data.data)
            })
    }

    const handleDetele = (e) => {
        e.preventDefault();
        console.log("got clicked id: ", e.target.id)
        axios
            .delete("/api/books/" + e.target.id)
            .then((res) => {
                console.log("this was deleted from database: ", res)
                loadBooks();


            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            books.map((book) => (
                                <div className="row" style={{ padding: "40px" }} key={book._id} >
                                    <div className="card-body" key={book.id} style={{ backgroundColor: "grey", padding: "40px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-title">{book.title} </h5>
                                            </div>
                                            <div className="col">
                                                <a href={book.link} target="_blanck">
                                                    <button className="btn btn-info mx-2" > View</button>
                                                </a>

                                                <button className="btn btn-info mx-2" id={book._id} onClick={(e) => { handleDetele(e) }} > Delete</button>

                                            </div>
                                        </div>
                                        <h6 className="card-subtitle mb-2 text-muted" style={{ color: "black" }}>Written by {book.authors}</h6>
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
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Save;