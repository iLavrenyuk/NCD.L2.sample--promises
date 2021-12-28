import React, { useState } from 'react';
import { makePromise } from '../../../services/near';

export const CreatePromiseForm = ({ setIsOpenForm }) => {
  const [textInput, setTextInput] = useState('');

  const handleCreatePromise = () => {
    makePromise({ what: textInput });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-form text-gray-400">
      <div className="h-full flex justify-center items-center">
        <div className="relative w-4/5 lg:w-2/3 bg-gray-600 rounded-3xl ">
          <div className="w-full h-full creation-bg">
            <div className="py-10 px-6">
              <div className="-mt-12 home-title">
                Promise <span className="bg-gradient-to-r from-blue-400 to-blue-500">creation</span>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setIsOpenForm(false)} className="text-white hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 14.1147L22.6 7.51467L24.4853 9.4L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.4L9.39998 7.51467L16 14.1147Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full md:w-96 my-10">
                <p className="text-gray-400 font-semibold text-lg">What you promise?</p>
                <input
                  onChange={(e) => setTextInput(e.target.value)}
                  value={textInput}
                  type="text"
                  placeholder="Study French"
                  className="bg-white py-2 pl-6 outline-none w-full mt-2 rounded-md font-semibold text-lg border-2 border-white focus:border-blue-400"
                />

                <div className="flex justify-between items-baseline">
                  <p className="text-gray-400 font-semibold text-lg mt-4">Link for voters</p>
                  <p className="text-gray-400 text-sm">not required</p>
                </div>
                <input
                  type="text"
                  placeholder="Type a NEAR ID...."
                  className="bg-white py-2 pl-6 outline-none w-full mt-2 rounded-md font-semibold text-lg border-2 border-white focus:border-blue-400"
                />

                <button onClick={handleCreatePromise} className="btn-blue text-white w-full mt-7 py-3">
                  Yes, I do it!
                </button>

                <p className="text-gray-400 mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
