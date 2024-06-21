import s from "./Pagination.module.css";

export const Pagination = ({
  totalPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={s.pagination}>
      <button
        onClick={handlePrevPage}
        className={s.arrow}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        {"<"}
      </button>
      <div className={s.list}>
        {[...Array(totalPage)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              onClick={() => handlePageClick(pageNum)}
              key={index}
              className={`${s.items} ${pageNum === currentPage ? s.active : ""}`}
              disabled={pageNum === currentPage}
              aria-label={`Page ${pageNum}`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        className={s.arrow}
        disabled={currentPage === totalPage}
        aria-label="Next Page"
      >
        {">"}
      </button>
    </div>
  );
};
