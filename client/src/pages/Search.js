import React, { useState} from "react";
import BookResults from "../components/BookResults";
import Saveform from "../components/Saveform";
import bookSearch from "../utils/API"




function Search (props) {
    const [books, setBooks] = useState({
        bookList: [],
    })

    const [savedBooks, setSavedBooks] = useState({
        savedBooks: [],
    })

    const [typing, setTyping] = useState({
        searchTerm: "",
    })

    const handleSave = function handleSave(bookData) {
        bookSearch.savedBook(bookData);
            console.log("bookData ======>", bookData)
            console.log("button clicked");
            setSavedBooks({
                ...savedBooks,
                savedBooks: bookData
            });
    }

    const handleTyping = function handleTyping(event) {
        event.preventDefault();
        setTyping({
            ...typing,
            searchTerm: event.target.value
        })

    }
    
    const handleSubmit = function  handleSubmit() {
        bookSearch.googleSearch(typing.searchTerm).then(function (results) {
            console.log("results ========>", results.data.items)
            setBooks({
                ...books,
                bookList: results.data.items,
            });
        });
    
    }

    return (
        <div>
        <BookResults handleSubmit={handleSubmit} handleTyping={handleTyping}/>
        <br />
        {books.bookList.length > 0 ? (<Saveform books={books.bookList} handleSave={handleSave}/>) : ("")}
        </div>
    );
}

export default Search;