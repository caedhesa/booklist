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

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL320_.jpg"
    alt=""
  />
);

const Title = () => <h1>Lo último que verán tus ojos</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
    Isabel San Sebastián
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
