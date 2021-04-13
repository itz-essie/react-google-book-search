import React, {useState, useEffect} from "react";
import bookSearch from "../utils/API"




function Saved() {
  const [library, setLibrary] = useState(
    [],
)

const retrieve = function () {
  bookSearch.getBooks().then(function(res) {
    setLibrary(
      res.data
  )
})
}

useEffect(function () {
  retrieve()
},[]);

const deletion = function deletion (id) {
  bookSearch.deleteBook(id).then(function (res){
    retrieve();
  })
}

  return (
    <div>
            {library.map(function(books) {
                return (
                    <div className="bookResult" key={books._id}>
                      <div className="row">
                        <div className="col-md-9">
                          <p className="title">{books.title}</p>
                          <p className="author">{books.authors}</p>
                        </div>
                        <div className="col-md-3">
                          <a href={books.link}> <button className="btn viewBtn" href={books.link} target="_blank">View</button></a>
                          <button className="btn deleteBtn" onClick={() => deletion(books._id)}>Delete</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <img src={books.imageLinks.thumbnail} alt={books.title} />
                        </div>
                        <div className="col-md-9">
                          <p className="plot">{books.description}</p>
                        </div>
                      </div>
                    </div>
                  );
            })}
        </div>
  );
}

export default Saved;