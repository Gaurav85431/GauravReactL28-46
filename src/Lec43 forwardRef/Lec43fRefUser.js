import { forwardRef } from "react"
// Receiving ke time per hm forwardRef ko  import karenge.
// forwardRef apne aap me wrapper hoti hia.
// forwardRef ko use karne ke liye export ke line ko es tarah likhenge 
// export default forwardRef(FRefUser)

function FRefUser(props, ref) {
  // isme hm 2 parameter lenge 1st for props and 2nd for isko forwardRef taaki receive kar saken.

  return (<>

    {/* <input type='text' /> */}
    <input type='text' ref={ref} />


  </>)

}
// export default FRefUser;
export default forwardRef(FRefUser)