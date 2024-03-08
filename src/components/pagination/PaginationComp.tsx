
// import React from 'react';
// import _ from 'lodash';

// interface Props {
//   productCount: number;
//   pageSize: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// export const PaginationComp = ({
//   productCount,
//   pageSize,
//   currentPage,
//   onPageChange,
// }: Props) => {
//   const pagesCount = Math.ceil(productCount / pageSize);
//   if (pagesCount === 1) return null;

//   const adjacentPages = 1; // Number of adjacent pages to display
//   const firstPage = 1;
//   const lastPage = pagesCount;
//   const ellipsis = '...';

//   const getPagesToShow = () => {
//     if (currentPage <= adjacentPages + 1) {
//       return _.range(firstPage, Math.min(currentPage + adjacentPages + 1, lastPage + 1));
//     } else if (currentPage >= lastPage - adjacentPages) {
//       return _.range(Math.max(firstPage, currentPage - adjacentPages), lastPage + 1);
//     } else {
//       return _.range(currentPage - adjacentPages, currentPage + adjacentPages + 1);
//     }
//   };

//   const pages = getPagesToShow();

//   return (
//     <>
//       <nav>
//         <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: 0 }}>
//           <li>
//             <a
//               onClick={() => onPageChange(currentPage - 1)}
//               className={`pagination-link ${currentPage === firstPage ? 'inactive-link' : 'active-link'}`}
//               style={{ pointerEvents: currentPage === firstPage ? 'none' : 'auto' }}
//             >
//               Previous
//             </a>
//           </li>
//           {pages[0] > firstPage && (
//             <li>
//               <a onClick={() => onPageChange(firstPage)} className="pagination-link">
//                 {firstPage}
//               </a>
//             </li>
//           )}
//           {pages[0] > firstPage + 1 && (
//             <li>
//               <span className="pagination-ellipsis">{ellipsis}</span>
//             </li>
//           )}
//           {pages.map(page => (
//             <li key={page} style={{ margin: '0 5px' }}>
//               <a onClick={() => onPageChange(page)}
//                 className={`pagination-link ${currentPage === page ? 'active-link' : 'inactive-link'}`}
//               >
//                 {page}
//               </a>
//             </li>
//           ))}
//           {pages[pages.length - 1] < lastPage - 1 && (
//             <li>
//               <span className="pagination-ellipsis">{ellipsis}</span>
//             </li>
//           )}
//           {pages[pages.length - 1] < lastPage && (
//             <li>
//               <a
//                 onClick={() => onPageChange(lastPage)}
//                 className="pagination-link"
//               >
//                 {lastPage}
//               </a>
//             </li>
//           )}
//           <li>
//             <a
//               onClick={() => onPageChange(currentPage + 1)}
//               className={`pagination-link ${currentPage === lastPage ? 'inactive-link' : 'active-link'}`}
//               style={{ pointerEvents: currentPage === lastPage ? 'none' : 'auto' }}
//             >
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// PaginationComp.tsx

import React from 'react';
import _ from 'lodash';
import Button from '@mui/material/Button';

interface Props {
  productCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationComp = ({
  productCount,
  pageSize,
  currentPage,
  onPageChange,
}: Props) => {
  const pagesCount = Math.ceil(productCount / pageSize);
  if (pagesCount === 1) return null;

  const adjacentPages = 1; // Number of adjacent pages to display
  const firstPage = 1;
  const lastPage = pagesCount;
  const ellipsis = ' ... ';

  const getPagesToShow = () => {
    if (currentPage <= adjacentPages + 1) {
      return _.range(firstPage, Math.min(currentPage + adjacentPages + 1, lastPage + 1));
    } else if (currentPage >= lastPage - adjacentPages) {
      return _.range(Math.max(firstPage, currentPage - adjacentPages), lastPage + 1);
    } else {
      return _.range(currentPage - adjacentPages, currentPage + adjacentPages + 1);
    }
  };

  const pages = getPagesToShow();

  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', textDecoration: 'none', padding: 0 }}>
        <li>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            className={`pagination-button ${currentPage === firstPage ? 'inactive-button' : 'active-button'}`}
            disabled={currentPage === firstPage}
            variant="contained" sx={{mr:"5px"}}
          >
            Previous
          </Button>
        </li>
        {pages[0] > firstPage && (
          <>
            <li>
              <Button
                onClick={() => onPageChange(firstPage)}
                className={`pagination-button ${currentPage === firstPage ? 'active-button' : 'inactive-button'}`}
                 variant={currentPage === firstPage ? 'contained' : 'outlined'}
              >
                {firstPage}
              </Button>
            </li>
          </>
        )}
   {pages.map(page => (
  <li key={page} style={{ margin: '0 5px' }}>
    <Button
      onClick={() => onPageChange(page)}
      className={`pagination-button ${currentPage === page ? 'active-button' : 'inactive-button'}`}
      variant={currentPage === page ? 'contained' : 'outlined'}
      disabled={currentPage === 1 && page === pagesCount} 
    >
      {page}
    </Button>
  </li>

        
))}
        {pages[pages.length - 1] < lastPage - 1 && (
          <>
            {pages[pages.length - 1] < lastPage && (
              <li>
                <Button
                  onClick={() => onPageChange(lastPage)}
                  className={`pagination-button ${currentPage === lastPage ? 'active-button' : 'inactive-button'}`}
                  variant={currentPage === lastPage ? 'contained' : 'outlined'}
                >
                  {lastPage}
                </Button>
              </li>
            )}
      
          </>
        )}
        <li>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            className={`pagination-button ${currentPage === lastPage ? 'inactive-button' : 'active-button'}`}
            disabled={currentPage === lastPage}
            variant="contained" sx={{ml: "5px"}}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
