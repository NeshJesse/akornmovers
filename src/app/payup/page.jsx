import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">This website is currently down</h1>
      <img
        src="/download.jpeg"
        alt="Placeholder"
        className="max-w-full max-h-[300px] my-5"
      />
      <textarea
        className="mt-5 w-4/5 h-24 p-3 text-base border border-gray-300 rounded resize-none"
        placeholder="You can write here..."
      ></textarea>
    </div>
  );
};

export default MaintenancePage;
