import React from "react";
import BookResults from "./BookResults";
import "./style.css"

function SaveForm({ books, handleSave }) {
    

    return (
        <div className="bookscontainer">
            <h1>Results</h1>
            <BookResults books={books} handleSave={handleSave} />
        </div>
    );
}

export default SaveForm;