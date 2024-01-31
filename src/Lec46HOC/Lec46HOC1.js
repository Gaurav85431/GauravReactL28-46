import { useState } from "react";

function HOCApp() {

  return (<>

    <h1>HOC</h1>
    {/* Niche counter banaya hia ab usi ko include karenge */}
    <Counter />

  </>);


}

function Counter() {

  const [count, setCount] = useState(0);

  return <div>
    <h3>{count}</h3>
    <button onClick={() => setCount(count + 1)}>Update Count</button>
  </div>
}

export default HOCApp;