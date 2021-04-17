import React, {useState, useEffect} from "react";
import bookSearch from "../utils/API"
import "../components/style.css"
import SavedTitle from "../components/SavedTitle.js"


function Saved() {
  const [books, setBooks] = useState(null);
  const retrieve = function () {
    bookSearch.getBooks().then(function(results) {
      setBooks(
        results.data
    )
  })
  }

  useEffect(() =>{
    if(!books){
      viewSavedBooks()
    }
  },[books])
  const viewSavedBooks = () => {
    bookSearch.getBooks().then((results) => {
      setBooks(results.data);
      // setGotBooks(true)
    });
  };
  const handleDelete = (id) =>{
    bookSearch.deleteBook(id).then(function (){
      retrieve();
    })
  
    
  }
  return (
    <div>
      <SavedTitle/>
    {
      books ?
    books.map(book => {
      return (
        <div className="bookResult" key={book.id}>
            <div className="row">
              <div className="col-md-9">
                <p className="title">{book.title}</p>
                <p className="author">{book.authors}</p>
              </div>

              <br />

              <div className="col-md-3">
                <button
                  className="btn saveBtn"
                  onClick={() =>
                    handleDelete(
                      book._id)
                  }
                >
                  <span className="btnSpan">Delete</span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={book.image}
                  alt={book.title}
                />
              </div>
              <div className="col-md-9">
                <p className="plot">{book.description}</p>
              </div>
            </div>
            <br />
            <br />
          </div>
      )
    })
    : 
    <h1>No saved books</h1>
  }
    </div>
  );
}

export default Saved;