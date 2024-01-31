import { useEffect } from "react";
function UseEffectWithPropsUser(props) {

  useEffect(() => {
    console.log("Use Effect Called  ");
  });


  return (
    <>

      <h1>Pass data thorough props</h1>

      {/* Jo data hm UseEffectWithPropsAPP  se receive kiye hai usko yaha print kara rhe hia */}
      <h1>count is {props.count}</h1>
      <h1>Data is {props.data}</h1>



    </>
  )
}
export default UseEffectWithPropsUser;