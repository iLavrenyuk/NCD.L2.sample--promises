import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

export const CreatePromise = ({ setIsOpenForm }) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between text-white py-3">
      <div className="flex items-center">
        <Link to={routes.Home} className="mr-2 lg:hidden">
          <img src={require('../../../assets/img/menu.png')} alt="" />
        </Link>
        <Link to={routes.Home} className="flex lg:hidden items-center text-2xl md:text-3xl font-bold">
          <div className="border-r pr-3 md:pr-4 mr-4 md:mr-5">
            <img src={require('../../../assets/img/near_logo_stack1.png')} alt="" />
          </div>
          Promises
        </Link>
      </div>
      <button onClick={() => setIsOpenForm(true)} className="mt-4 md:mt-0 btn-blue">
        Create a promise
      </button>
    </div>
  );
};
