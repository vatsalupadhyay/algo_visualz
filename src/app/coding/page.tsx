"use client"
import React from 'react'
import ProblemsTable from "@/components copy/ProblemsTable/ProblemsTable";
import { useState } from "react";
import Navbar from '@/components copy/Navbar/Navbar';
import { RecoilRoot } from 'recoil';
// import useHasMounted from "@/hooks/useHasMounted";
// import Topbar from '@/components copy/Topbar/Topbar';

const Coding = () => {
    const [loadingProblems, setLoadingProblems] = useState(true);
    // const hasMounted = useHasMounted();
    // if (!hasMounted) return null;

  return (
    <RecoilRoot>
    <div className='bg-gray-8 '>
    <Navbar />
    {/* <Topbar /> */}
    <h1
    className="text-2xl text-center text-gray-400 dark:text-gray-400 font-medium
              uppercase  "
  >
    &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
  </h1>
  <div className="relative overflow-x-auto mx-auto px-6 pb-10">
    {loadingProblems && (
      <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
        {[...Array(10)].map((_, idx) => (
          <LoadingSkeleton key={idx} />
        ))}
      </div>
    )}
    <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
      {!loadingProblems && (
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
          <tr>
            <th scope="col" className="px-1 py-3 w-0 font-medium">
              Status
            </th>
            <th scope="col" className="px-6 py-3 w-0 font-medium">
              Title
            </th>
            <th scope="col" className="px-6 py-3 w-0 font-medium">
              Difficulty
            </th>

            <th scope="col" className="px-6 py-3 w-0 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 w-0 font-medium">
              Solution
            </th>
          </tr>
        </thead>
      )}
      <ProblemsTable setLoadingProblems={setLoadingProblems} />
    </table>
  </div>
  </div>
  </RecoilRoot>
  )
}
const LoadingSkeleton = () => {
    return (
      <div className="flex items-center space-x-12 mt-4 px-6">
        <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
        <div className="h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1"></div>
        <div className="h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1"></div>
        <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

export default Coding