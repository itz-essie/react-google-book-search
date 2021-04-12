import React, {useState} from "react";
import Searchbar from "../components/Searchbar";
import bookSearch from "../utils/API";

function SearchForm(){
const [search, setSearch] = useState("");
const [books, setBooks] = useState([]);

const handleSubmit = () =>{
    bookSearch.googleSearch(search).then((results) => {
        setBooks(results.data.items)
    })
}
const handleTyping = (e) => {
setSearch(e.target.value)
}
    return (
        <div>
        <Searchbar handleSubmit = {handleSubmit} handleTyping = {handleTyping}/>
        {books.map((book) => {
          return(
              <p>
                  {book.volumeInfo.title}
                 <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbail of book"></img>
                  {console.log(book)}
              </p>
          )  
        })}

        </div>
    );
}

export default SearchForm;