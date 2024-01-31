import { useState } from 'react'
function UstateHook() {

  const [data, setData] = useState("Gaurav");

  return (<>

    <div className='App'>

      <h1>Hello World</h1>
      <h2>{data}</h2>
    </div>

  </>)


}
export default UstateHook;