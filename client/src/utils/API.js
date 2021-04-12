import axios from "axios";

// const api_key= "AIzaSyDn3ELUNEpKBFniiHadEQiu1C3NOzHpt_Q"

const bookSearch = {
    googleSearch : function (book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData)
    },
    getBooks: function () {
        return axios.get("/api/books")
        
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
    }
};

export default bookSearch;

