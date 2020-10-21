import React from "react";
import TableHeader from "./Tableheader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, movies }) => {
  return (
    <div className='col'>
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={movies} columns={columns} />
    </table>
    </div>

  );
};

export default Table;
