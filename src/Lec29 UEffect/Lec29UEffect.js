import { useEffect } from "react";

// useEffect hooks that is called when component create

// ye class component ke componentDidMount ke jaise call hua

function UEffectHook() {

  useEffect(() => {

    alert("This is useEffect hooks that is called when component create");

  })
  return (
    <>
      <h1>UseEffect </h1>
    </>
  )
}
export default UEffectHook;