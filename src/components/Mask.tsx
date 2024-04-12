"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div className=" bg-black h-[30rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className=" bg-max-w-4xl mx-auto text-white  text-center  text-4xl font-bold">
            Coin Change Algorithm Definition                 
          </p>
        }
        className=" bg-white h-[40rem] rounded-md"
      >
      Coin change algorithm in DSA <span className="text-red-500">minimizes the number of coins</span> for a given amount. It employs either<span className="text-red-500"> dynamic programming</span> or a
        <span className="text-red-500"> greedy approach</span> to find the optimal solution.
      </MaskContainer>
    </div>
  );
}

 
// Coin change algorithm in DSA minimizes the number of coins needed for a given amount. It employs either dynamic programming or a greedy approach to find the optimal solution.