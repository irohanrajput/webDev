import React, { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);   
  function inc() {
    setValue(value + 1);
  }

  function dec() {
    setValue(value - 1);
  }

  function reset() {
    setValue(0);
  }


  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex justify-evenly w-screen ">
      <h1 className="text-6xl">{value}</h1> {/* Print the value here */}
      <button className="border border-white p-4 shadow-sm shadow-white" onClick={reset}>reset</button>
      <button className="border border-white p-4 shadow-sm shadow-white" onClick={inc}>increase</button>
      <button className="border border-white p-4 shadow-sm shadow-white" onClick={dec}>dec</button>
    </div>
  );
}
