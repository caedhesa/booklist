import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81ySRJMhN5L._AC_UL480_FMwebp_QL65_.jpg"
    alt=""
  />
);

const Title = () => <h1>Lo último que verán tus ojos</h1>;
const Author = () => <h4>Isabel San Sebastián</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
