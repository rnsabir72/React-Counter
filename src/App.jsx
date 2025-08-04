// import { useState } from "react";
// // import { HelloWorld } from "./components/hello"; 


// function App() {
//   const [number, setNumber] = useState(0);

//   function increment() {
//     setNumber(number + 1);
//   }

//   function decrement() {
//     if (number === 0) return;
//     setNumber(number - 1);
//   }

//   function reset() {
//     setNumber(0);
//   }

//  function increment5() {
//     setNumber(number + 5);
//   }

//   function decrement5() {
//   if (number === 0) {
//     return;
//   } else if (number < 5) {
//     reset();
//   } else {
//     setNumber(number - 5);
//   }
// }

//   return (
//     <div className="container">
//       <h1>Count: {number}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={increment5}>Increment by 5</button>
//       <button onClick={decrement5}>Decrement by 5</button>
//     </div>
    
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [stars, setStars] = useState([]);

  // Generate stars once when component mounts
  useEffect(() => {
    const starArray = Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 2 + 1}s`,
    }));
    setStars(starArray);
  }, []);

  const increment = () => setNumber(number + 1);
  const decrement = () => number > 0 && setNumber(number - 1);
  const reset = () => setNumber(0);
  const increment5 = () => setNumber(number + 5);
  const decrement5 = () => setNumber(prev => (prev < 5 ? 0 : prev - 5));

  return (
    <div className="star-background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <div className="container">
        <h1>Count: {number}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment5}>Increment by 5</button>
        <button onClick={decrement5}>Decrement by 5</button>
      </div>
    </div>
  );
}

export default App;

