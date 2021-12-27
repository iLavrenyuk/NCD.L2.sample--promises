import React from 'react';
import { Pagination } from '../Pagination';

export const OtherPromises = () => {
  return (
    <div className="relative w-full bg-gray-600 px-6 rounded-3xl section-shadow pt-6 mt-12">
      <h2 className="absolute -top-4 home-title">
        People <span className="bg-gradient-to-r from-blue-400 to-blue-500">promise</span>
      </h2>

      <div className="hidden md:grid grid-cols-10 w-full text-gray-400 px-6 mt-16">
        <div className="col-span-3">
          <p>Person</p>
        </div>
        <div className="col-span-2">
          <p>What</p>
        </div>
        <div className="col-span-2">
          <p>When</p>
        </div>
        <div className="col-span-1">
          <p className="text-center">Progress</p>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-10 w-full bg-gray-700 rounded-full px-8 mt-3 py-1">
        <div className="col-span-3">
          <div className="flex h-full items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="ml-3">
              <p className="text-white text-lg">Alex Brown</p>
              <p className="-mt-2 text-gray-400">alexbrown.near</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex h-full items-center">
            <p className="text-lg text-white">To be good</p>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex h-full items-center">
            <img src="@/assets/img/image1442.png" alt="" className="mr-2" />
            <p className="text-white">26/06/2021</p>
          </div>
        </div>

        <div className="ml-auto col-span-1">
          <div className="flex justify-center h-full items-center">
            <a href="#" className="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
              <img src="@/assets/img/Amazing.png" alt="" />
            </a>
            <a href="#" className="flex text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* <div class="ml-auto col-span-2">
                      <div class="flex h-full items-center">
                          <a href="#" class="btn-blue w-36 text-white">Edit</a>
                          <a href="#" class="ml-4 text-gray-400 hover:text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                              </svg>
                          </a>
                      </div>
                  </div> */}
      </div>
      <div className="hidden md:grid grid-cols-10 w-full bg-gray-700 rounded-full px-8 mt-6 py-1">
        <div className="col-span-3">
          <div className="flex h-full items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="ml-3">
              <p className="text-white text-lg">Alex Brown</p>
              <p className="-mt-2 text-gray-400">alexbrown.near</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex h-full items-center">
            <p className="text-lg text-white">Start work faster and bee</p>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex h-full items-center">
            <img src="@/assets/img/image1442.png" alt="" className="mr-2" />
            <p className="text-white">26/06/2021</p>
          </div>
        </div>

        <div className="ml-auto col-span-1">
          <div className="flex justify-center h-full items-center">
            <a href="#" className="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
              <img src="@/assets/img/Amazing.png" alt="" />
            </a>
            <a href="#" className="flex text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-gray-700 rounded-3xl px-6 py-6 mt-6">
        <div className="flex items-center">
          <div className="flex h-full items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="ml-1">
              <p className="text-white text-lg">Alex B.</p>
              <p className="-mt-2 text-gray-400 text-xs">alexbrown.near</p>
            </div>
          </div>

          <div className="ml-auto flex justify-center  h-full items-center">
            <a href="#" className="flex justify-center w-11 bg-green-300 p-2 border-2 border-white rounded-md">
              <img src="@/assets/img/Amazing.png" alt="" />
            </a>
            <a href="#" className="flex text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <a href="#" className="ml-4 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-baseline justify-between mt-2">
          <p className="text-white text-xl">To be good</p>
          <p className="text-white">03/10/2021</p>
        </div>
      </div>
      <div className="md:hidden bg-gray-700 rounded-3xl px-6 py-6 mt-6">
        <div className="flex items-center">
          <div className="flex h-full items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="ml-1">
              <p className="text-white text-lg">Alex B.</p>
              <p className="-mt-2 text-gray-400 text-xs">alexbrown.near</p>
            </div>
          </div>

          <div className="ml-auto flex justify-center  h-full items-center">
            <a href="#" className="flex justify-center w-11 bg-green-300 p-2 border-2 border-white rounded-md">
              <img src="@/assets/img/Amazing.png" alt="" />
            </a>
            <a href="#" className="flex text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <a href="#" className="ml-4 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-baseline justify-between mt-2">
          <p className="text-white text-xl">To be good</p>
          <p className="text-white">03/10/2021</p>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
