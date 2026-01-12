// components/Pagination.tsx
import React from "react";

import { FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-end items-center p-6 border-t">
      <div className="flex items-center gap-1">
        <button
          // variant="default"
          onClick={goToPreviousPage}
          // disabled={currentPage === 1}
          className="h-10 w-8"
        >
          <FaArrowRight className="size-4 text-[#595f7a] rotate-180" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
          )
          .map((page, index, array) => (
            <React.Fragment key={page}>
              {index > 0 && array[index - 1] !== page - 1 && (
                <span className="px-2">...</span>
              )}
              <button
                // variant={currentPage === page ? "" : "outline"}
                onClick={() => onPageChange(page)}
                className={`h-10 w-8 flex items-center justify-center ${
                  currentPage === page
                    ? "border-2 border-[#3b82f6] text-[#3b82f6] rounded-xl"
                    : "bg-[#f5f6fa] text-[#595f7a]"
                }`}
              >
                {page}
              </button>
            </React.Fragment>
          ))}

        <button
          // variant="default"
          onClick={goToNextPage}
          // disabled={currentPage === 1}
          className="h-10 w-8 "
        >
          <FaArrowRight className="size-4 text-[#595f7a]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
