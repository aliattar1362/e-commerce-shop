import React from 'react';
import _ from "lodash";

// Styles
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
  productCount: number;
  pageSize: number;
  currentPage: number
  onPageChange: (page: number) => void;  // Corrected type
}

export const PaginationComp = ({ productCount, pageSize, currentPage, onPageChange }: Props) => {
  const pagesCount = Math.ceil(productCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <>
      <nav>
    <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: 0 }}>
      {pages.map(page => (
        <li key={page} style={{ margin: '0 5px' }}>
          <a onClick={() => onPageChange(page)} className={`pagination-link ${currentPage === page ? 'active-link' : 'inactive-link'}`}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  </nav>
    </>
  );
};
