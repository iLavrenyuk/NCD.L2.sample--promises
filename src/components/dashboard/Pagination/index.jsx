import React from 'react';

export const Pagination = () => {
  return (
    <div className="flex items-center justify-center md:justify-end py-5 text-white  md:text-lg">
      <a href="#" className="px-2 hover:text-blue-400">
        Previous
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        1
      </a>
      <a href="#" className="border-b-2 border-blue-500 px-2 hover:text-blue-400">
        2
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        3
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        4
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        5
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        6
      </a>
      <a href="#" className="px-2 hover:text-blue-400">
        Next
      </a>
    </div>
  );
};
