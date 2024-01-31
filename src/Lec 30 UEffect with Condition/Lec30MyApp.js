// MyApp se MyUser me data send karenge using props

import { useState } from "react";

import MyUser from "./Lec30MyUser";

function MyApp() {

  let [data, setData] = useState(10);
  let [count, setCount] = useState(20);

  return (<>

    <MyUser count={count} data={data}></MyUser>


    <button onClick={() => setData(data = data + 1)}>Data</button>

    <button onClick={() => setCount(count = count + 1)}>Count</button>


  </>)

}
export default MyApp;