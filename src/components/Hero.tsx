import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import d1 from "../assets/d1.png"

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail:
      "https://media.licdn.com/dms/image/C4D12AQFeqZIrL2SG3w/article-cover_image-shrink_720_1280/0/1526915102578?e=1714003200&v=beta&t=mnwHWM6CTucnfaulNJ9VfTC3XeyHfF-SknAFuQofB1k",
  },
  {
    title: "Cursor",
    link: "",
    thumbnail:
      "https://www.springboard.com/blog/wp-content/uploads/2020/07/what-are-data-structures-and-algorithms.png",
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:"data:image/png;base64,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"
     
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/0*UVG1F-0kLAEWAT3k",
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail:
    "https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
    
  },

  // {
  //   title: "Algochurn",
  //   link: "https://algochurn.com",
  //   thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
  // },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail:
    "https://miro.medium.com/v2/resize:fit:1400/0*UVG1F-0kLAEWAT3k",
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail:
      "https://www.springboard.com/blog/wp-content/uploads/2020/07/what-are-data-structures-and-algorithms.png",
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg"
  },

  {
    title: "Creme Digital",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg",
  },
  {
    title: "Invoker Labs",
    link: "",
    thumbnail:
    "https://miro.medium.com/v2/resize:fit:1400/0*UVG1F-0kLAEWAT3k",
  },
  {
    title: "E Free Invoice",
    link: "",
    thumbnail:"https://codequotient.com/blog/wp-content/uploads/2022/08/What-Are-Data-Structures-Algorithms-1.jpg"
  },
];
