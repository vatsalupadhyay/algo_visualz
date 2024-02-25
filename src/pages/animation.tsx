// import Hero from "@/components/Hero/Hero";
// import Hero2 from "@/components/Hero/Hero2";
// import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
// import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import useHasMounted from "@/hooks/useHasMounted";
import { doc, setDoc } from "firebase/firestore";
// import CoinChangeAnimation from "@/components/Hero/CoinChangeAnimation";
import { useState } from "react";
// import Footer from "@/components/Hero/Footer";
// import Quiz from "@/components/Hero/Quiz";
import Coding from "@/components copy/Hero/Coding";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  // 	const [inputs,setInputs] = useState({
  // 		id : '',
  // 		title :'',
  // 		difficulty:'',
  // 		category:'',
  // 		videoId:'',
  // 		link:'',
  // 		order:0,
  // 		likes:0,
  // 		dislikes:0
  // 	})
  // 	const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
  // setInputs({
  // 	...inputs,
  // 	[e.target.name]: e.target.value
  // })
  // 	};
  // 	const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
  // 		e.preventDefault();
  // 		const newProblem ={
  // 			...inputs,
  // 			order:Number(inputs.order)
  // 		}
  // 		await setDoc(doc(firestore, "problems", inputs.id), newProblem);
  // 		alert("saved to db")
  // 	}

  const [loadingProblems, setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <main className="bg-dark-layer-2 min-h-screen">

      <Coding />
 
    </main>
  );
}

{
  /* <main className="bg-dark-layer-2 min-h-screen">
        <Hero />
        <Hero2 />

        <Coding />
      
      <Quiz />
      <Footer />
      </main> */
}

{
  /* <form className="p-6 flex flex-col max-w-sm gap-3" onSubmit={handleSubmit}>
	<input onChange={handleInputChange} type ="text" placeholder="problem id" name="id"/>
	<input onChange={handleInputChange} type ="text" placeholder="title" name="title"/>
	<input onChange={handleInputChange} type ="text" placeholder="difficulty" name="difficulty"/>
	<input onChange={handleInputChange} type ="text" placeholder="category" name="category"/>
	<input onChange={handleInputChange} type ="text" placeholder="order" name="order"/>

	<input onChange={handleInputChange} type ="text" placeholder="videoid?" name="videoid"/>
	<input  onChange={handleInputChange}type ="text" placeholder="link?" name="link"/>
<button className="bg-white">save to db</button>
</form> */
}
