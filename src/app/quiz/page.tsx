// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/C2Quq3kGkJS
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function Component() {
//   return (
//     <div className="flex justify-center items-center w-full py-6 my-40 space-y-4">
//       <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
//         <div className="space-y-2 text-center">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quiz Time!</h1>
//           <p className="text-gray-500 dark:text-gray-400">Test your knowledge.</p>
//         </div>
//         <Link href = "/answers">
//         <div className="w-full max-w-sm space-y-4">
//           <Button className="w-full" size="lg">
//             Start the Quiz
//           </Button>
//         </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
export default function SparklesPreview() {
  return (
    <>
    <Navbar />
    <div className="h-[46rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
     <Link href="/answers"> <button className="md:text-7xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20 shadow-white">
        Get Started
      </button>
      </Link>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </>
  );
}
