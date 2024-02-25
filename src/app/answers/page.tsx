// // Import the QuizComponent from the same file where you want to use it
"use client";
// import { useState, FormEvent } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function QuizComponent() {
//   const [correctAnswersCount, setCorrectAnswersCount] = useState<number | null>(
//     null
//   );

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     let correctCount = 0;

//     if (formData.get("q1") === "paris") correctCount++;
//     if (formData.get("q2") === "jupiter") correctCount++;
//     if (formData.get("q3") === "jpy") correctCount++;
//     if (formData.get("q4") === "whale") correctCount++;
//     if (formData.get("q5") === "davinci") correctCount++;

//     setCorrectAnswersCount(correctCount);
//   };

//   return (
//     <div className="bg-gray-300 py-12 w-full">
//       <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
//         <div className="space-y-3">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//             Quiz Time
//           </h1>
//           <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//             Test your knowledge with this short quiz. You can only submit
//             answers once.
//           </p>
//         </div>
//         <div className="mx-auto w-full max-w-[700px] space-y-6">
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <p className="text-xl font-semibold">
//                   1. What is the capital of France?
//                 </p>
//                 <div className="grid gap-2">
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="paris"
//                       name="q1"
//                       type="radio"
//                       value="paris"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="paris"
//                     >
//                       Paris
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="london"
//                       name="q1"
//                       type="radio"
//                       value="london"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="london"
//                     >
//                       London
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="berlin"
//                       name="q1"
//                       type="radio"
//                       value="berlin"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="berlin"
//                     >
//                       Berlin
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="madrid"
//                       name="q1"
//                       type="radio"
//                       value="madrid"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="madrid"
//                     >
//                       Madrid
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-xl font-semibold">
//                   2. What is the largest planet in our solar system?
//                 </p>
//                 <div className="grid gap-2">
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="earth"
//                       name="q2"
//                       type="radio"
//                       value="earth"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="earth"
//                     >
//                       Earth
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="jupiter"
//                       name="q2"
//                       type="radio"
//                       value="jupiter"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="jupiter"
//                     >
//                       Jupiter
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="mars"
//                       name="q2"
//                       type="radio"
//                       value="mars"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="mars"
//                     >
//                       Mars
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="venus"
//                       name="q2"
//                       type="radio"
//                       value="venus"
//                     />
//                     <label
//                       className="text-base font-medium peer:cursor-pointer"
//                       htmlFor="venus"
//                     >
//                       Venus
//                     </label>
//                   </div>
//                 </div>
//               </div>


//               <div className="space-y-2">
//                 <p className="text-xl font-semibold">3. What is the currency of Japan?</p>
//                 <div className="grid gap-2">
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="usd"
//                       name="q3"
//                       type="radio"
//                       value="usd"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="usd">
//                       USD
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="eur"
//                       name="q3"
//                       type="radio"
//                       value="eur"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="eur">
//                       EUR
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="gbp"
//                       name="q3"
//                       type="radio"
//                       value="gbp"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="gbp">
//                       GBP
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="jpy"
//                       name="q3"
//                       type="radio"
//                       value="jpy"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="jpy">
//                       JPY
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-xl font-semibold">4. What is the largest mammal in the world?</p>
//                 <div className="grid gap-2">
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="elephant"
//                       name="q4"
//                       type="radio"
//                       value="elephant"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="elephant">
//                       Elephant
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="whale"
//                       name="q4"
//                       type="radio"
//                       value="whale"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="whale">
//                       Whale
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="giraffe"
//                       name="q4"
//                       type="radio"
//                       value="giraffe"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="giraffe">
//                       Giraffe
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="lion"
//                       name="q4"
//                       type="radio"
//                       value="lion"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="lion">
//                       Lion
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-xl font-semibold">5. Who painted the Mona Lisa?</p>
//                 <div className="grid gap-2">
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="vangogh"
//                       name="q5"
//                       type="radio"
//                       value="vangogh"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="vangogh">
//                       Vincent van Gogh
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="davinci"
//                       name="q5"
//                       type="radio"
//                       value="davinci"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="davinci">
//                       Leonardo da Vinci
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="picasso"
//                       name="q5"
//                       type="radio"
//                       value="picasso"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="picasso">
//                       Pablo Picasso
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Input
//                       className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
//                       id="warhol"
//                       name="q5"
//                       type="radio"
//                       value="warhol"
//                     />
//                     <label className="text-base font-medium peer:cursor-pointer" htmlFor="warhol">
//                       Andy Warhol
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {/* Similarly, add the remaining questions */}
//             </div>
//             <Button className="w-full max-w-sm mx-auto" type="submit">
//               Submit
//             </Button>
//           </form>
//           {correctAnswersCount !== null && (
//             <p className="text-xl mt-6">
//               You got {correctAnswersCount} correct answers out of 5.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuizComponent() {
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State to track the current question index
  const [quizEnded, setQuizEnded] = useState(false); // State to track if the quiz has ended

  const questions = [
    {
      question: "What is the time complexity of the greedy algorithm for coin change?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
      correctAnswer: "O(n)",
    },
    {
      question: "What data structure is typically used in dynamic programming for coin change problems?",
      options: ["Array", "Linked List", "Queue", "Matrix"],
      correctAnswer: "Array",
    },
    {
      question: "What algorithm is commonly used for solving the coin change problem?",
      options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Dynamic Programming"],
      correctAnswer: "Dynamic Programming",
    },
    {
      question: "What is the purpose of memoization in dynamic programming for coin change?",
      options: ["To reduce time complexity", "To reduce space complexity", "To avoid recomputation of overlapping subproblems", "To ensure optimal solutions"],
      correctAnswer: "To avoid recomputation of overlapping subproblems",
    },
    {
      question: "What is the main idea behind the coin change problem?",
      options: ["Maximizing the number of coins used", "Minimizing the number of coins used", "Ensuring equal distribution of coins", "Sorting coins in ascending order"],
      correctAnswer: "Minimizing the number of coins used",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let correctCount = 0;

    // Check if the selected answer is correct
    if (formData.get(`q${currentQuestionIndex + 1}`) === questions[currentQuestionIndex].correctAnswer) {
      correctCount++;
    }

    // Update the correct answers count
    setCorrectAnswersCount((prevCount) => (prevCount !== null ? prevCount + correctCount : correctCount));

    // Check if the quiz has ended
    if (currentQuestionIndex === questions.length - 1) {
      setQuizEnded(true);
    } else {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="bg-black text-white h-screen py-12">
      <div className="container grid gap-4 px-4 text-center mx-auto md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Quiz Time
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Test your knowledge with this short quiz. You can only submit
            answers once.
          </p>
        </div>
        <div className="max-w-[700px] mx-auto space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <p className="text-xl font-semibold">{questions[currentQuestionIndex].question}</p>
              <div className="grid gap-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      className="w-4 h-4 border-gray-200 rounded border-gray-200 peer:hidden"
                      id={`${option}-${index}`}
                      name={`q${currentQuestionIndex + 1}`}
                      type="radio"
                      value={option}
                    />
                    <label
                      className="text-base font-medium peer:cursor-pointer"
                      htmlFor={`${option}-${index}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {quizEnded ? (
              <Button className="w-full max-w-sm mx-auto" type="submit" disabled>
                Submit
              </Button>
            ) : (
              <Button className="w-full max-w-sm mx-auto" type="submit">
                Submit
              </Button>
            )}
          </form>
          {quizEnded && (
            <div>
              <p className="text-xl mt-6">
                You got {correctAnswersCount} correct answers out of {questions.length}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
