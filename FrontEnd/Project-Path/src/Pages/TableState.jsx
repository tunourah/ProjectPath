import React from 'react';
import Nav from '../Component/Nav';
import TableStd from '../Component/TableStd';

const TableState = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Nav />
      <main className="flex justify-center items-center w-full p-8">
        <div className="w-full max-w-5xl"> 
          <TableStd headers={['Student Name', 'Project Name', 'Status']} />
        </div>
      </main>
    </div>
  );
}

export default TableState;