import { useState } from "react";

function HOCApp2() {

  return (<>

    <h1>HOC</h1>
    {/* HOC me hm cmp ke under pass kar diya Counter */}
    {/* red color */}
    <HOCRed cmp={Counter} />
    {/* green color */}
    <HOCGreen cmp={Counter} />

    {/* blue color and give text blue */}
    <HOCBlue cmp={Counter} />

  </>);


}

function HOCRed(props) {
  return <div>
    <h2 style={{ backgroundColor: 'red', width: '2rem' }}><props.cmp /></h2>

    {/* <h2><props.cmp /></h2> */}
  </div>
}

function HOCGreen(props) {
  return <div>
    <h2 style={{ backgroundColor: 'green', width: '2rem' }}><props.cmp /></h2>

  </div>
}

function HOCBlue(props) {
  return <div>
    <h2 style={{ backgroundColor: 'blue', width: '2rem' }}>THis is blue <props.cmp /></h2>

  </div>
}

// Hmare pass ek counter thha uske upper functionality aise thhi ki hme style baar baar change karna par rha thha to hmne wrapper bana diya aur jo v style deni thhi wo de diya. Jo wrapper thha wo component thha  usko as a parameter leke return kar diya.

function Counter() {

  const [count, setCount] = useState(0);

  return <div>
    <h3>{count}</h3>
    <button onClick={() => setCount(count + 1)}>Update Count</button>
  </div>
}

export default HOCApp2;