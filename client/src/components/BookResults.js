import React, { useState } from "react";
import Searchbar from "./Searchbar";
import bookSearch from "../utils/API";
import "./style.css";

function BookResults(props) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = () => {
    bookSearch.googleSearch(search).then((results) => {
      setBooks(results.data.items);
    });
  };
  const handleTyping = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} handleTyping={handleTyping} />
      {books.map((book) => {
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
                    this.handleSave({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors.join(", "),
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.thumbnail,
                      link: book.saleInfo.buyLink,
                    })
                  }
                >
                  <span className="btnSpan">Save</span>
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
        );
      })}
    </div>
  );
}

export default BookResults;
