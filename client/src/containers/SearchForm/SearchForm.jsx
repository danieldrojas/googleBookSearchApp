import React, { useState } from 'react';

const SearchForm = () => {

  const [book, setBook] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
}

    return (
        <div>
            <div className="container-sm">
                <div className="row">
                    <div className="col text-center">
                        <div className="jumbotron">
                            <form>
                              

                                <div className="form-group" >
                                    <label htmlFor="text"><h1>Google Books</h1></label>
                                    <input
                                        placeholder="Search a new book"
                                        type="text" className="form-control"  id="book"
                                        value={book}
                                        onChange={(e) => {
                                            setBook(e.target.value)
                                        }} />
                                </div>
                                {/* why onClick?? */}
                                <button onClick={handleSubmit}  type="submit" className="btn btn-primary">Search</button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;