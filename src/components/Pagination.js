import React from "react";
const Pagination = ({
  handlePaginate,
  booksPerPage,
  total,
  currentPage,
  gotoNextPage,
  gotoPrevPage,
}) => {
  if (total === 0)
    return (
      <h1 className="text-3xl text-center text-slate-800">Nothing matched!</h1>
    );
  const pages = [];
  const lastPage = Math.ceil(total / booksPerPage);
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  return (
    <ul className="flex mx-4 justify-center items-center">
      <li
        className={`border-solid border-2 border-slate-600 cursor-pointer hover:bg-orange-500 hover:text-white w-12 mx-2 text-center rounded-full ${
          currentPage === 1 ? "hidden" : ""
        }`}
        onClick={gotoPrevPage}
      >
        <a href="#">prev</a>
      </li>
      {pages.map((num) => {
        return (
          <li
            key={num}
            className={`border-solid border-2 border-slate-600 cursor-pointer hover:bg-orange-500 hover:text-white w-9 mx-2 text-center rounded-full ${
              currentPage === num ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => handlePaginate(num)}
          >
            <a href="#">{num}</a>
          </li>
        );
      })}
      <li
        className={`border-solid border-2 border-slate-600 cursor-pointer hover:bg-orange-500 hover:text-white w-12 mx-2 text-center rounded-full ${
          currentPage === lastPage ? "hidden" : ""
        }`}
        onClick={gotoNextPage}
      >
        <a href="#">next</a>
      </li>
    </ul>
  );
};

export default Pagination;
