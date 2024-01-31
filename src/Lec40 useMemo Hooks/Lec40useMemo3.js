import { useState } from "react";
import { useMemo } from "react";

function MyUseMemo3() {

  const [count, setCount] = useState(0);
  const [items, setItem] = useState(10);


  // ye count per chalega.
  const MultiCountMemo = useMemo(function () {
    console.log("MultiCount");
    return count * 5;
  }, [count]);




  return (<>

    <h1>useMemo hooks </h1>

    <h1>count is :{count}</h1>
    <h2> Item is :{items}</h2>

    {/* MultiCount() function called */}
    <h1>{MultiCountMemo}</h1>


    <button onClick={() => setCount(count + 1)}>Update Count</button>

    <button onClick={() => setItem(items * 10)}>Update item</button>


  </>)


}
export default MyUseMemo3;