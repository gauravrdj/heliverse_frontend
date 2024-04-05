import React from 'react';

export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="flex justify-center">
      <ul className='pagination flex justify-center'>
        <li className=''>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
            onClick={goToPrevPage}>
            Prev
          </button>
        </li>
        {pageNumbers.map(pgNumber => (
          <div key={pgNumber} className="mb-2">
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={`px-4 py-2 ml-2 text-black rounded ${currentPage === pgNumber ? 'bg-blue-500' : 'bg-slate-400'}`}
            >
              {pgNumber}
            </button>
          </div>
        ))}
        <li className=''>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'
            onClick={goToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
