import { useState } from "react";
import { createStore } from "redux";
let arr : number[] = [];
function reducer(state = arr, action:any) {
  switch (action.type) {
    case "RANDOM":
      const newNumber = Math.floor(Math.random() * 10); 
      return [...state, newNumber]; 
    default:
      return state;
  }
}

let store = createStore(reducer);

let random = () => ({
  type: "RANDOM",
});

export default function Bt4() {
  const [count, setCount] = useState(store.getState());

  store.subscribe(() => {
    setCount(store.getState());
  });

  return (
    <div>
      <h1>Bt5</h1>
      <button onClick={() => store.dispatch(random())}>
        Random Generate Number
      </button>
      <p> {count.join(", ")}</p> 
    </div>
  );
}