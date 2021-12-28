import React from 'react';
import { useStore } from '../../../store';
import { signOut } from '../../../services/near';

export const ProfileBlock = () => {
  const { accountId, setAccountId } = useStore();

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  return (
    <div className="hidden lg:block w-96 2xl:w-96 bg-gray-500 rounded-r-3xl section-shadow">
      <div className="w-full h-full left-bg">
        <div className="px-6 2xl:px-10">
          <div className="flex flex-col items-center">
            <a href="#" className="mt-16 flex items-center text-white text-2xl md:text-3xl font-bold">
              <div className="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                <img src={require('../../../assets/img/near_logo_stack1.png')} alt="" />
              </div>
              Promises
            </a>
            <div className="mt-9 flex justify-center items-center w-24 h-24 rounded-full bg-gray-200">
              <img src={require('../../../assets/img/photo-camera-interface-symbol-for-button1(1).png')} alt="" />
            </div>
            <p className="mt-6 text-white bg-gradient-to-r text-3xl from-blue-400 to-blue-500">{accountId}</p>
            <p className="mt-3 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi molestie.
            </p>
            <button onClick={handleSignOut} className="mt-4 btn-red w-full text-white">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
