import Link from "next/link"
// import { Button } from "@/components/ui/"
export default function Component() {


  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a className="flex items-center text-white hover:text-white" href="/">
          <AppleIcon className="h-6 w-6 mr-1" />
          <span className="font-semibold text-xl tracking-tight">AlgoViz</span>
        </a>
        <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-blue-600" >
            Home
          </Link>
           <Link className="text-white hover:text-blue-600" href="https://vatsalupadhyay.github.io/anime/
">
            Animation
          </Link>
        
          <Link className="text-white  hover:text-blue-600" href="#">
           Coding
           
          </Link>
          <Link className="text-white hover:text-blue-600" href="/quiz">
            Quiz
          </Link>
         
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-white hover:text-blue-600" href="#">
            Sign in
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  )
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
    )
  }
function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
