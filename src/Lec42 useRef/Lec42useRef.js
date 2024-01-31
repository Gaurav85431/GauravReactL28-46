import { useRef } from "react";

function UseRef() {

  let inputRef = useRef(null);
  // 1 variable banaye usme hm useRef banaye aur useRef me pehle null value denge.

  function handleInput() {
    console.log("function Call");

    // if we want ki agar button ke click hone per koi value addd ho like 100,32,etc.

    inputRef.current.value = "2000";

    // if we want ko give focus i.e. pehle bahar yani buttoon per focus thha ab text box me focus rahega.

    inputRef.current.focus();
    // focus() method hota hia.

    inputRef.current.style.color = "Orange";
    inputRef.current.style.backgroundColor = "blue";
    // inputRef.current.style.display = "none";

  }
  return (<>

    <h1>useRef in ReactJS</h1>
    <input type="text" ref={inputRef} />
    {/* Jo v element ka hm DOM manipulation krna chahte hia to uska ek property hota hia ref. To us ref property me hm wo value ko denge jisme ki hm useRef() ko rakhe hia i.e. inputRef */}


    {/* button ke click karne per hm DOM ke sath hm manipulation ka kaam karenge. */}
    <button onClick={handleInput}>Handle Input</button>

    {/* Hmne jo button ke onClick per handleInput function ko call kiya hia, to handleInput() function ko pehle declare kar denge. */}


  </>)

}
export default UseRef;