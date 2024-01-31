function MapFuncAndForLoop() {


  const students = ['Anil', 'Gaurav', 'Saurav', 'Sumit'];
  // Map Function
  console.log("Value in array are --");
  students.map((item) => {
    console.log(item);
  })

  // For loop se
  for (let i = 0; i <= students.length; i++) {
    console.log("For loop se " + students[i]);
  }


  return (<>

    <h1> Handle Array with List</h1>


  </>)

}
export default MapFuncAndForLoop;