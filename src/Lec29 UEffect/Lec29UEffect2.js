import { useState, useEffect } from "react";
function UEffectHook2() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("This is useEffect hooks that is called when component create");
  })
  return (
    <>
      <h1>UseEffect </h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update count</button>
    </>
  )
}
export default UEffectHook2;