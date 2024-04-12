import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a className="flex items-center text-white hover:text-white" href="/">
          <AppleIcon className="h-6 w-6 mr-1" />
          <span className="font-semibold text-xl tracking-tight">
            AlgoViz
          </span>
        </a>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-blue-600">
            Home
          </Link>
          <Link
            className="text-white hover:text-blue-600"
            href="https://vatsalupadhyay.github.io/coin_change/"
          >
            Simulation
          </Link>
          <Link className="text-white hover:text-blue-600" href="/coding">
            Coding
          </Link>
          <Link className="text-white hover:text-blue-600" href="/quiz">
            Quiz
          </Link>
          <Link className="text-white hover:text-blue-600" href="/AI">
          Ask AI
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

export default Navbar;
