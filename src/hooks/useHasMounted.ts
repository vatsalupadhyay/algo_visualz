// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// function useHasMounted() {
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     // Check if we are in a browser environment
//     const isBrowser = typeof window !== "undefined";

//     // Import the useRouter hook dynamically to avoid server-side rendering issues
//     if (isBrowser) {
//       const { useRouter } = require("next/router");
//       const router = useRouter();

//       // Check if the router is initialized
//       if (router.isReady) {
//         setHasMounted(true);
//       }
//     } else {
//       // If not in a browser environment, assume mounted
//       setHasMounted(true);
//     }
//   }, []);

//   return hasMounted;
// }

// export default useHasMounted;
