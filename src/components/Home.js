import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksList from "./BooksList";
import Pagination from "./Pagination";
const Home = () => {
  const [Books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);
  const [input, setInput] = useState("");
  const [filteredBooks, setfilteredBooks] = useState([]);

  //getBooks
  const getBooks = async () => {
    try {
      const res = await axios.get(
        "https://www.anapioficeandfire.com/api/books"
      );
      setBooks(res.data);
      setfilteredBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  //render Books
  useEffect(() => {
    getBooks();
  }, []);

  //pagination  logic
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = filteredBooks.slice(firstBookIndex, lastBookIndex);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //handle prev and next
  const gotoNextPage = () => {
    const lastPage = Math.ceil(Books.length / booksPerPage);

    setCurrentPage(currentPage !== lastPage ? currentPage + 1 : currentPage);
  };

  const gotoPrevPage = () => {
    setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
  };

  //handle filtering Books
  useEffect(() => {
    const result = Books.filter((book) => {
      return book.name.toLowerCase().search(input.toLocaleLowerCase()) !== -1;
    });
    setfilteredBooks(result);
  }, [input]);
  return (
    <>
      <div className="font-body p-2 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold">
          Game Of Thrones
        </h1>

        <input
          type="text"
          className="border-2 outline-none rounded-lg mx-2 mt-8"
          placeholder="Search Books..."
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <BooksList Books={currentBooks} />
      </div>
      <Pagination
        handlePaginate={handlePaginate}
        booksPerPage={booksPerPage}
        total={filteredBooks.length}
        currentPage={currentPage}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </>
  );
};
export default Home;
