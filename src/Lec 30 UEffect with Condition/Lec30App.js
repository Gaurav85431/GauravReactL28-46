import MyApp from "./Lec30MyApp";
import UseEffectWithCondition from "./Lec30UEfctWithCondition";
import UseEffectWithCondition2 from "./Lec30UEfctWithCondition2";
import UseEffectWithCondition3 from "./Lec30UEffectWIthCondition3";
import UseEffectWithPropsUser from "./Lec30UEffectwithPROPSUser";
import UseEffectWithPROPSApp from "./Lec30UEffectwithPropsApps";

function UseEffectAppL30() {

  return (
    <>

      <UseEffectWithCondition></UseEffectWithCondition>

      <br /> <br /> <hr />
      <UseEffectWithCondition2 />

      <br /> <br /> <hr />
      <UseEffectWithCondition3 />


      {/* props */}
      <br /> <br /> <hr />
      <UseEffectWithPropsUser />
      <UseEffectWithPROPSApp />
      {/* Ye 2 bar show karega bcz i think 1 bar yaha se aur ek bar App.js se. */}



      {/* props  isme dono condition me useEffect diye hia.*/}
      <br /> <br /> <hr />
      <MyApp />



    </>

  )

}
export default UseEffectAppL30;