import { useState } from "react";

function ControlComponentApp3() {

  const [value, setValue] = useState("");
  const [Item, setItem] = useState("");

  const [myVal, setMyVal] = useState("val");


  return (<>

    <h1>Controlled Component</h1>



    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />



    {/* Agar hm chahen to hm default value v laga sakte hia, default value jab hm denge to hmne value property ko htana hoga. */}



    {/* value={Item}  we will remove this. because hm value aur defualtValue ko sath me use karenge to defaultValue nhi lagega. */}

    <input type="text" defaultValue="000" onChange={(e) => setItem(e.target.value)} />



    {/* If we  use both value and default together */}

    <input type="text" defaultValue="000"
      value={myVal} onChange={(e) => setMyVal(e.target.value)} />


    {/* Agar hme value ke saath default value ko dena hai to hm useState() ke under de sakte hia. */}



    <h1> Value is -- {value}</h1>
    <h1>Item is -- {Item}</h1>

    <h1>Value and default -- {myVal}</h1>



  </>)

}
export default ControlComponentApp3;
