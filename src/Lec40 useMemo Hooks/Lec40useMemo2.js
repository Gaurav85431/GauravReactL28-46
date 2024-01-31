import { useState } from "react";

function MyUseMemo2() {

  const [count, setCount] = useState(0);
  const [items, setItem] = useState(10);

  // if we want ki jaise hi count update ho i.e. button of update count ko click karen to ek function(MultiCount()) call ho jaye aur count*5 ko return karen.

  function MultiCount() {
    console.log("MultiCount");
    return count * 5;
  }

  // Lekin hota ye hia ki hm chahe update Count  ya update items button ko click karen to ye function i.e. MultiCount() chal jata hia jo ki nhi chalna chahiye. 
  // Isse problem ye aata hia ki jb hmara funtion bada hoga to performance per effect padega.





  return (<>

    <h1>useMemo hooks </h1>

    <h1>count is :{count}</h1>
    <h2> Item is :{items}</h2>

    {/* MultiCount() function called */}
    <h1>{MultiCount()}</h1>


    <button onClick={() => setCount(count + 1)}>Update Count</button>

    <button onClick={() => setItem(items * 10)}>Update item</button>


  </>)


}
export default MyUseMemo2;