import React from "react";

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid header">
        <div className="container">
          <h1 className="display-4">Google Book Search</h1>
          <p className="lead">
            Type in the title of the book you're interested in, and click the search button!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
