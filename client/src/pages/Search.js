import React, { useState} from "react";
import BookResults from "../components/BookResults";
import Saveform from "../components/Saveform";
import bookSearch from "../utils/API"
import Header from "../components/Header.js"




function Search () {
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
            setBooks({
                ...books,
                bookList: results.data.items,
            });
        });
    
    }

    return (
        <div>
        <Header/>
        <BookResults handleSubmit={handleSubmit} handleTyping={handleTyping}/>
        <br />
        {books.bookList.length > 0 ? (<Saveform books={books.bookList} handleSave={handleSave}/>) : ("")}
        </div>
    );
}

export default Search;