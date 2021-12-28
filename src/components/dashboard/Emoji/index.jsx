import React from 'react';

export const Emoji = () => {
  return (
    <div className="absolute top-4 left-4 flex flex-col items-center bg-white" style={{ zIndex: 100 }}>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-green-300">
        <img src={require('../../../assets/img/Amazing.png')} alt="" />
      </button>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-green-300">
        <img src={require('../../../assets/img/good.png')} alt="" />
      </button>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-green-300">
        <img src={require('../../../assets/img/Medium+.png')} alt="" />
      </button>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-red-300">
        <img src={require('../../../assets/img/Medium-.png')} alt="" />
      </button>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-red-300">
        <img src={require('../../../assets/img/Bag.png')} alt="" />
      </button>
      <button className="flex justify-center p-2 m-1 border-white rounded-md hover:bg-red-300">
        <img src={require('../../../assets/img/Ugly.png')} alt="" />
      </button>
    </div>
  );
};
