import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { signIn } from '../../../services/near';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  const handleSignIn = () => {
    signIn(window.location.origin + routes.Dashboard);
  };

  return (
    <header>
      <div className="w-full lg:h-screen bg-gray-800">
        <div className="w-full h-full bg-text">
          <div className="relative container mx-auto px-6">
            <div className="flex items-center justify-between py-10 text-white">
              <Link to={routes.Home} className="flex items-center text-2xl md:text-3xl font-bold">
                <div className="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                  <img src={require('../../../assets/img/near_logo_stack1.png')} alt="" />
                </div>
                Promises
              </Link>

              <div className="hidden lg:block">
                <ul className="flex items-center space-x-8 text-lg">
                  <li className=" hover:text-blue-400">
                    <HashLink to="/#about">about tracker</HashLink>
                  </li>
                  <li className=" hover:text-blue-400">
                    <HashLink to="/#receive">what you receive</HashLink>
                  </li>
                  <li className=" hover:text-blue-400">
                    <HashLink to="/#howitworks">how it works</HashLink>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <button onClick={handleSignIn} className="hidden md:flex btn-blue">
                  Login with NEAR
                  <img src={require('../../../assets/img/near_logo_stack21.png')} className="ml-3" alt="" />
                </button>
                <button className="ml-2 lg:hidden">
                  <img src={require('../../../assets/img/menu.png')} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="home-title lg:mt-16 2xl:mt-32" style={{ lineHeight: '1.75' }}>
                  NEAR Promises - promise <br /> tracker by{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500">NEAR Blockchain</span>
                </h1>
                <p className=" mt-5 text-gray-400 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra hac a aliquam. Turpis id dictum
                  elementum pellentesque tellus sagittis. Accumsan pretium auctor pellentesque purus faucibus. Ac quis
                  aliquam eleifend pulvinar porttitor. Amet id pharetra eu sem purus.
                </p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center mt-12">
                  <Link to={routes.Dashboard} className="btn-blue">
                    Try tracker right now
                  </Link>
                  <Link to={routes.Dashboard} className="mt-4 lg:ml-12 hover:text-blue-400">
                    Explore →{' '}
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <img
                  src={require('../../../assets/img/Photolayer.png')}
                  alt="man"
                  className="xl:-mt-16 ml-auto h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
