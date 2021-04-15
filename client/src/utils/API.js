import axios from "axios";


const bookSearch = {
    googleSearch : function (book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    addBook: function (bookData) {
        return axios.post("api/books", bookData)
    },
    getBooks: function () {
        return axios.get("/api/books")

    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
    }
};

export default bookSearch;

