// app se data user me send kar rhe hia props me
import UseEffectWithPropsUser from "./Lec30UEffectwithPROPSUser";
import { useState } from "react";
function UseEffectWithPROPSApp() {

  const [data, setData] = useState(10);

  const [count, setCount] = useState(100);

  return (
    <>


      {/* send / pass data to UseEffectWithPropsUser */}

      <UseEffectWithPropsUser count={count} data={data} />



      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>

    </>
  )
}
export default UseEffectWithPROPSApp;