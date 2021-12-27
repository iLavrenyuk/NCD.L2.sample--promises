import React from 'react';

export const FifthSection = () => {
  return (
    <section>
      <div className="w-full h-screen bg-gray-800" style={{ zIndex: -2 }}>
        <div className="relative w-full h-full bg-text">
          <img src={require('../../../assets/img/pose-1.png')} alt="" className="absolute top-0 left-0" />
          <img src={require('../../../assets/img/pose-2.png')} alt="" className="absolute top-0 right-0" />
          <img src={require('../../../assets/img/pose-3.png')} alt="" className="absolute bottom-0 left-0" />
          <img src={require('../../../assets/img/pose-4.png')} alt="" className="absolute bottom-0 right-0" />
          <img src={require('../../../assets/img/hand_1.png')} alt="" className="absolute top-64 left-80" />
          <img src={require('../../../assets/img/hand_2.png')} alt="" className="absolute top-96 right-80" />

          <div className="h-full flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
            <h4 className="home-title text-center" style={{ lineHeight: 1.5 }}>
              Try NEAR Promises <br /> <span className="bg-gradient-to-r from-blue-400 to-blue-500">right now</span>{' '}
            </h4>{' '}
            <br />
            <a href="#" className="btn-blue mt-8 text-white">
              Go to dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
