import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  //   console.log(itemsPerPage,totalItems,paginate)
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  //   console.log(pageNumbers);
  return (
    <nav className="bg-secondary text-light m-auto w-50 text-center">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item bg-secondary text-light">
            <a onClick={() => paginate(number)} className="page-link bg-secondary text-light">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
