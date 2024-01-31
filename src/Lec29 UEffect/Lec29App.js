import UEffectHook from "./Lec29UEffect";
import UEffectHook2 from "./Lec29UEffect2";

function UEffectApp() {

  return (
    <>

      {/* useEffect hook call when component call */}
      {/* ye alert() 2 bar call ho rha hia bcz L29UEffect.js, L29App.js me */}
      <UEffectHook />


      <br /><br /><br /><hr />
      {/* useEffect hook call when component Update */}
      <UEffectHook2 />

    </>

  )

}
export default UEffectApp;