import { useState } from 'react'
function UstateHookUpdate() {

  const [data, setData] = useState("Gaurav");

  return (<>

    <div className='App'>

      <h2>{data}</h2>

      <br /><br />
      <p>Press button to update data of hook</p>
      <br /><br />
      <button onClick={() => setData("Gaurav Pushpam")}>Update Hook data</button>

    </div>

  </>)
}
export default UstateHookUpdate;