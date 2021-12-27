import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white section-shadow">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div>
            <Link to={routes.Home} className="flex items-center text-2xl md:text-3xl font-bold">
              <div className="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                <img src="@/assets/img/near_logo_stack1.png" alt="" />
              </div>
              Promises
            </Link>
            <a href="#" className="mt-6 inline-block text-lg hover:text-blue-400">
              info@nearanalytics
            </a>
            <br />
            <a href="#" className="mt-3 inline-block text-lg hover:text-blue-400">
              1-232-3434 (Main)
            </a>
          </div>

          <div>
            <h5 className="text-2xl font-bold mt-2">About</h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About contract
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About NEAR{' '}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About NEAR ecosystem
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl font-bold mt-2">Community</h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Community OS Wiki
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl font-bold mt-2">Help</h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  info@nearanalytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  1-232-3434 (Main)
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Link to={routes.Dashboard} className="btn-blue mt-12 lg:mt-0">
              Go to dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
