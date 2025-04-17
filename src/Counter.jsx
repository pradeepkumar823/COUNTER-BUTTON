import React, { useState } from 'react';

export default function Counter() {
let[count,setCount] = useState(0); //initialization
console.log("Component is rendered!");
console.log(`count =${count}`);

// let incCount=()=>{
// setCount(count+1);
// console.log(`Inside incCounter,count =${count}`);

// console.log("Count in incCount",count);
// };

// using callBack
let incCount=()=>{
   setCount((currCount)=>{
   return currCount+1;
});
};

return (
    <div>
        <h3>Count={count}</h3>
        <button onClick={incCount}>Increase count </button>
    </div>
);



}