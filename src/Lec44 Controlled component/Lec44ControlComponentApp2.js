import { useState } from "react";

function ControlComponentApp2() {

  const [value, setValue] = useState("");
  const [Item, setItem] = useState("");

  return (<>

    <h1>Controlled Component</h1>


    {/* <input type="text" value={value} /> */}
    {/* input ka value ko hm nhi change kar skate hia. */}


    {/* Hme yahi fixed value ko handle karna hota hia state ke through */}


    {/* Hme isko onChange event per change karenge. */}

    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />


    <input type="text" value={Item} onChange={(e) => setItem(e.target.value)} />



    <h1> Value is -- {value}</h1>
    <h1>Item is -- {Item}</h1>




  </>)

}
export default ControlComponentApp2;