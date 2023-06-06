import React from 'react';

const Pagination = ({ total, page, limit, onChangePage, onChangeLimit }) => {
  const totalPages = Math.ceil(total / limit);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onChangePage(newPage);
    }
  };

  const handleLimitChange = (newLimit) => {
    onChangeLimit(newLimit);
  };

  return (
    <div>
      <button onClick={() => handlePageChange(page - 1)} disabled={isFirstPage}>
        Previous
      </button>
      <span>{page}</span>
      <button onClick={() => handlePageChange(page + 1)} disabled={isLastPage}>
        Next
      </button>

      <div>
        <span>Items per page:</span>
        <button onClick={() => handleLimitChange(5)} disabled={limit === 5}>
          5
        </button>
        <button onClick={() => handleLimitChange(10)} disabled={limit === 10}>
          10
        </button>
        <button onClick={() => handleLimitChange(15)} disabled={limit === 15}>
          15
        </button>
        <span>Selected Limit: {limit}</span>
      </div>
    </div>
  );
};

export default Pagination;