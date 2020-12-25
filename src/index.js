import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

//setup vars

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
