import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

//setup vars

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL320_.jpg",
    title: "Lo último que verán tus ojos",
    author: "Isabel San Sebastián",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81M5pPsSGVL._AC_UL320_.jpg",
    title: "Dime quién soy",
    author: "Julia Navarro",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81UT5250cpL._AC_UL320_.jpg",
    title: "El vuelo de la mariposa",
    author: "David Olivas",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
