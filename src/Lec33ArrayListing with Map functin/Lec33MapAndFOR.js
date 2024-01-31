function MapFuncVsForLoop() {

  const students = ['Anil', 'Gaurav', 'Saurav', 'Sumit'];

  return (<>

    <h1> Handle Array with List</h1>

    {/* // Map Function */}

    {
      students.map((item) =>
        <h2>{item}</h2>
      )
    }

    {/* // For loop se error dega. bcz return ke under for loop nhi chalta hia. */}
    {/*   
    // for loop
  {
    for (let i = 0; i <= students.length; i++) {
      		<h1>{students[i]}</h1>
    }
  } */}

  </>)

}
export default MapFuncVsForLoop;