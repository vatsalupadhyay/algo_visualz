"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import ai_image from "../app/assets/ai.png";
import coding_image from "../app/assets/coding.png";
import sim_image from "../app/assets/simulation.png";
import quiz_image from "../app/assets/quiz.png";

export default function TabsDemo() {
  const tabs = [
    {
      title: "AI chat",
      value: "AI chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>AI chat</p>
          <AIchat />
        </div>
      ),
    },
    {
      title: "Simulation",
      value: "Simulation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Simulation</p>
          <Simulation />
        </div>
      ),
    },
    {
      title: "Coding",
      value: "Coding",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Coding</p>
          <Coding />
        </div>
      ),
    },
    {
      title: "Quiz",
      value: "Quiz",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Quiz</p>
          <Quiz />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const AIchat = () => {
  return (
    <Image
      src={ai_image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};



const Simulation = () => {
    return (
      <Image
      src={sim_image}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  
  const  Coding = () => {
    return (
      <Image
      src={coding_image}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  
  const Quiz = () => {
    return (
      <Image
      src={quiz_image}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  
