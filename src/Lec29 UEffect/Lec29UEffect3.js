import { useState, useEffect } from "react";
function UEffectHook3() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("Without any condition chalega.");
  })
  useEffect(() => {

    console.log("Name per chalega");
  }, [name])
  return (
    <>
      <h1>UseEffect </h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update count</button>
    </>
  )
}
export default UEffectHook3;