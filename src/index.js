import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL320_.jpg",
  title: "Lo último que verán tus ojos",
  author: "Isabel San Sebastián",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/81M5pPsSGVL._AC_UL320_.jpg",
  title: "Dime quién soy",
  author: "Julia Navarro",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat,
          tortor eget facilisis rutrum, lorem arcu pharetra nunc, non viverra.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
