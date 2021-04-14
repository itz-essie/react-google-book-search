import React from "react";
import "./style.css";

function SavedTitle() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid header">
        <div className="container">
          <h1 className="display-4">Google Book Search</h1>
          <p className="lead">
            Here is a list of your saved books. Click on "view" for additional
            details, or "delete", to remove from your list of favorites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SavedTitle;
