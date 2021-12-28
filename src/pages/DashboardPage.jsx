import React, { useState } from 'react';
import { MyPromises } from '../components/dashboard/MyPromises';
import { ProfileBlock } from '../components/dashboard/ProfileBlock';
import { OtherPromises } from '../components/dashboard/OtherPromises';
import { CreatePromise } from '../components/dashboard/CreatePromise/imdex';
import { CreatePromiseForm } from '../components/dashboard/CreatePromiseForm';

export const DashboardPage = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className="flex h-screen bg-gray-700">
      <ProfileBlock />

      <div className="relative w-full px-6 bg-text">
        <CreatePromise setIsOpenForm={setIsOpenForm} />
        <MyPromises />
        <OtherPromises />
      </div>
      {isOpenForm ? <CreatePromiseForm setIsOpenForm={setIsOpenForm} /> : null}
    </div>
  );
};
