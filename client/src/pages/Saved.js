import React, {useState, useEffect} from "react";
import bookSearch from "../utils/API"
import "../components/style.css"


function Saved() {
  const [books, setBooks] = useState(null);
  // const [gotBooks, setGotBooks] = useState(false)
  useEffect(() =>{
    if(!books){
      viewSavedBooks()
    }
  },[books])
  const viewSavedBooks = () => {
    bookSearch.getBooks().then((results) => {
      console.log(results)
      setBooks(results.data);
      // setGotBooks(true)
    });
  };
  const handleDelete = () =>{

  }
  return (
    <div>
    {
      books ?
    books.map(book => {
      return (
        <div className="bookResult" key={book.volumeInfo.id}>
            <div className="row">
              <div className="col-md-9">
                <p className="title">{book.volumeInfo.title}</p>
                <p className="author">{book.volumeInfo.authors}</p>
              </div>

              <br />

              <div className="col-md-3">
                <a href={book.saleInfo.buyLink}>
                  <button className="btn viewBtn">
                    <span className="btnSpan">View</span>
                  </button>
                </a>
                <button
                  className="btn saveBtn"
                  onClick={() =>
                    handleDelete({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors.join(", "),
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.thumbnail,
                      link: book.saleInfo.buyLink,
                    })
                  }
                >
                  <span className="btnSpan">Delete</span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
              </div>
              <div className="col-md-9">
                <p className="plot">{book.volumeInfo.description}</p>
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