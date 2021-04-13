import React from "react";
import "./style.css"

function Searchbar(props) {
  return (
    <div className="search container text-center searchBar">
            <h3>Search for a Book</h3>
            <div id="searchForm"><form >
                <input onChange={props.handleTyping} placeholder="Book Title">
                </input>
            </form>
            <button type="button" className="btn btn-primary searchBtn" id="searchBtn" onClick={props.handleSubmit}>Search!</button>
            </div>
            <br />
        </div>
  );
}

export default Searchbar;
