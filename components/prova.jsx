import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg w-64 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button 
          onClick={() => setCount(count - 1)} 
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -1
        </button>
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +1
        </button>
      </div>
    </div>
  );
}