import { useRef } from "react";

function UncontrolledComponent() {

  // To hm ek variable banayenge inputRef jo ki ek instance hoga useRef() ka.
  let inputRef = useRef(null);

  let inputRef2 = useRef(null);


  // function create that will call on onSubmit


  // jb form submit karte hia to ek bydefault parameter hota hia e. e means event.
  function submitForm(e) {
    e.preventDefault();
    console.log("input field 1st ka value ", inputRef.current.value);


    console.log("Input Field 2 ka vlaue " + inputRef2.current.value);

    let MYInput3 = document.getElementById("input3").value;
    console.log("Value of input field3 is  " + MYInput3);

  }



  return (<>

    <h1>Uncontrolled Component</h1>
    <form onSubmit={submitForm}>

      {/* Hm ab inputRef ko bind kar denge  1st input field ke saath. */}
      {/* <input type="text" /><br /><br /><br /> */}
      <input ref={inputRef} type="text" /><br /><br /><br />

      <input type="text" ref={inputRef2} /><br /><br /><br />






      <input id="input3" type="text" /><br /><br /><br />



      <button>Submit</button>
      {/* submit button click karne per page reload ho rha hai hme isko rokna hoga because react single page application hota hia to hme reload to rokne ke liye hm ek function banayenge jisko ki hm form ke onSubmit per call karenge. Taki form ke submit hone per page reload na ho.  */}
      {/* 

    */}




    </form>

  </>)


}
export default UncontrolledComponent;