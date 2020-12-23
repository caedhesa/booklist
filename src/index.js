import React from "react";
import ReactDOM from "react-dom";
// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = "Isabel San Sebastián";
const Book = () => {
  const title = "Lo último que verán tus ojos";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL320_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
