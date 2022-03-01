import React from "react";
import Book from "./Book";
const BooksList = ({ Books }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {Books.map((book) => {
        return <Book book={book} key={book.isbn} />;
      })}
    </div>
  );
};

export default BooksList;
