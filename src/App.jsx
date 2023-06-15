import { puppyList } from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}
console.log(puppyList);
export default App;
