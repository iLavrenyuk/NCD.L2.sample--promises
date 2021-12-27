import React from 'react';

export const SecondSection = () => {
  return (
    <section id="about">
      <div className="relative w-full bg-gray-800 text-white section-shadow">
        <div className="absolute top-0 right-0 lg:w-2/3 2xl:w-1/2">
          <img src={require('../../../assets/img/Screens.png')} alt="" className="w-full hidden lg:block" />
        </div>

        <div className="container mx-auto py-16 h-637">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 px-6">
              <h2 className="home-title">
                About <span className="bg-gradient-to-r from-blue-400 to-blue-500">trecker</span>
              </h2>
              <p className="text-gray-400 mt-10 lg:mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra hac a aliquam. Turpis id dictum
                elementum pellentesque tellus sagittis. Accumsan pretium auctor pellentesque purus faucibus. Ac quis
                aliquam eleifend pulvinar porttitor. Amet id pharetra eu sem purus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam viverra hac a aliquam. Turpis id dictum elementum pellentesque tellus
                sagittis. Accumsan pretium auctor pellentesque purus faucibus. Ac quis aliquam eleifend pulvinar
                porttitor. Amet id pharetra eu sem purus.
              </p>
            </div>

            <div className="w-full lg:w-2/3">
              <img src={require('../../../assets/img/Screens.png')} alt="" className=" lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
