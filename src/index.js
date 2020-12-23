import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

//setup vars
const author = "Isabel San Sebastián";
const title = "Lo último que verán tus ojos";
const img = "https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL320_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
