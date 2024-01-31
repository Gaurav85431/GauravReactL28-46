import { useEffect, useState } from "react";
function UseEffectWithCondition3() {

  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  useEffect(() => {
    console.log("Use Effect Called data ");
  }, [data]);
  useEffect(() => {
    alert("Count is " + count);
  }, [count])

  return (
    <>
      <h1>count is {count}</h1>
      <h1>Data is {data}</h1>

      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>

    </>
  )
}
export default UseEffectWithCondition3;