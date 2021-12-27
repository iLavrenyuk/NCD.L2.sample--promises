import React from 'react';
import { MyPromises } from '../components/dashboard/MyPromises';
import { ProfileBlock } from '../components/dashboard/ProfileBlock';
import { OtherPromises } from '../components/dashboard/OtherPromises';

export const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-700">
      <ProfileBlock />

      <div className="relative w-full px-6 bg-text">
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white py-3">
          <div className="flex items-center">
            <a href="#" className="mr-2 lg:hidden">
              <img src="@/assets/img/menu.png" alt="" />
            </a>
            <a href="#" className="flex lg:hidden items-center text-2xl md:text-3xl font-bold">
              <div className="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                <img src="@/assets/img/near_logo_stack1.png" alt="" />
              </div>
              Promises
            </a>
          </div>
          <a href="" className="mt-4 md:mt-0 btn-blue">
            Create a promise
          </a>
        </div>

        <MyPromises />
        <OtherPromises />
      </div>
    </div>
  );
};
