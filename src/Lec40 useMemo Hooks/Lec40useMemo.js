import { useState } from "react";

function MyUseMemo() {

  const [count, setCount] = useState(0);
  const [items, setItem] = useState(10);

  return (<>

    <h1>useMemo hooks </h1>

    <h1>count is :{count}</h1>
    <h2> Item is :{items}</h2>


    <button onClick={() => setCount(count + 1)}>Update Count</button>

    <button onClick={() => setItem(items * 10)}>Update item</button>


  </>)


}
export default MyUseMemo;