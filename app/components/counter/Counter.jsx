"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 text-white p-5 max-w-sm mx-auto rounded-lg">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
          data-id="decrement-btn"
        >
          -
        </button>
        <span className="text-2xl" data-id="count-value">
          {count}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
          data-id="increment-btn"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
