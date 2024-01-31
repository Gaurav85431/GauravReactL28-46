// we want to print name, email, mobile number in tabular format 

function MapArray2() {


  const students = [

    { name: "Gaurav", email: "gaurav@gmail.com", phone: "8473722" },
    { name: "saurav", email: "saurav@gmail.com", phone: "855722" },
    { name: "Gautav", email: "gautav@gmail.com", phone: "8475552" },

  ]

  return (<>



    <h3>Data in table</h3>

    <table border="1">
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>

      </tr>


      {
        students.map((item) =>

          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>


          </tr>
        )
      }

    </table>





  </>
  )
}





export default MapArray2;