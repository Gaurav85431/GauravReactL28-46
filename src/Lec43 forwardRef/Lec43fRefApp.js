import { useRef } from "react";
import FRefUser from "./Lec43fRefUser";

function FRefApp() {

  // iske liye 1st hme useRef ko import karna hoga.

  let inputRef = useRef(null);
  // useRef ko import kiya aur bydefault iska value null provide kar diya.


  function updateInput() {
    inputRef.current.value = '1000';
    // iski value change hokar 1000 hogi.

    // lekin ye jo value change hoga wo under wala me i.e. Lec43FRefUser  me jayega kaise.


    // TO FRefUser me wo value dene ke liye hm use karenge ref ka i.e. hm <FRefUser> ke under ref ke through inputRef ko pass karenge. inputRef me hmara reference hia.

    // Applying style
    inputRef.current.style.color = "red";
    // TO give focus we will use focus()method
    inputRef.current.focus();

  }


  return (<>

    <h1>ForwardRef in React</h1>

    {/* <FRefUser /> */}

    <FRefUser ref={inputRef} />


    {/* Hm chahte hia ki iske click ke upper user(FRefUser) ka ko input hai uska dom me change ho */}
    <button onClick={updateInput}>Update InputBox</button>

  </>)

}
export default FRefApp;