import React from "react";
const Book = ({ book }) => {
  const { name, country, isbn, numberOfPages, publisher, authors } = book;
  return (
    <div class="flex justify-center p-2 my-4 md:mx-10 md:my-10">
      <div class="Block rounded-lg shadow-lg  w-[700px] h-[400px] text-center  max-w-sm t text-orange-500 bg-white">
        <div class="py-3 px-6 border-b border-gray-300 bg-white text-2xl bold font-medium">
          {name}
        </div>
        <div class="p-6">
          <h5 class="text-slate-800  text-xl font-medium mb-2">{publisher}</h5>
          <p class="text-slate-800 text-base mb-4">ISBN: {isbn}</p>
          <p class="text-slate-800 text-base mb-4">country: {country}</p>
          <p class="text-slate-800 text-base mb-4">
            pages count: {numberOfPages}
          </p>
        </div>
        <div class="py-3 px-6 border-t border-gray-300 text-gray-700 bold">
          writen by: {authors[0]}
        </div>
      </div>
    </div>
  );
};

export default Book;
