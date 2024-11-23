"use client";
import Navbar from '@/components/navbar';
import React from 'react';
import Image from 'next/image';

const MaintenancePage = () => {
  return (
    <>
    <Navbar/>
    <br/>
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">This website is currently down</h1>
      
      <Image src='/imagest.png' alt="Website down"
          layout="responsive"
          width={150}
          height={100}
          className="rounded-lg"></Image>
    </div>
    </>
  );
};

export default MaintenancePage;
