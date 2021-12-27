import React from 'react';
import { Footer } from '../components/home/Footer';
import { Header } from '../components/home/Header';
import { ThirdSection } from '../components/home/ThirdSection';
import { FifthSection } from '../components/home/FifthSection';
import { SecondSection } from '../components/home/SecondSection';
import { FourthSection } from '../components/home/FourthSection';

export const HomePage = () => {
  return (
    <>
      <Header />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  );
};
