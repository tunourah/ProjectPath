import React from 'react';
import Nav from '../Component/Nav';
 
import Deletestd from '../Component/Deletestd';

const TableStd = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Nav />
      <main className="flex justify-center items-center w-full p-8">
        <div className="w-full max-w-5xl"> 
          <Deletestd headers={['Student Name']} />
        </div>
      </main>
    </div>
  );
}

export default TableStd;