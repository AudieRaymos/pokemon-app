import React from 'react';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
   <div>
      {gotoPrevOage && <button onClick={gotoPrevPage}>Previous</button>}
      <button onClick={gotoNextPage}>Next</button>
  </div>
  )
}
