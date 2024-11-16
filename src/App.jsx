import React, { useState, useCallback } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  const toggle = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []); 

  return (
    <div>
      <button onClick={increment}>Increment ({count})</button>
      <button onClick={toggle}>Toggle ({isToggled ? 'ON' : 'OFF'})</button>
    </div>
  );
}

export default App
