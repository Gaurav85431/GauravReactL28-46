import { Table } from "react-bootstrap";
function NestedListApp2() {

  const users = [
    {
      name: 'Anil', email: 'anil@gmail.com', address: [
        { House: "12", City: "Bihar", country: "India" },
        { House: "14", City: "Gurgaun", country: "India" },
        { House: "16", City: "Delhi", country: "India" }
      ]
    },

    {
      name: 'Gaurav', email: 'gaurav@gmail.com', address: [
        { House: "18", City: "Bihar", country: "India" },
        { House: "16", City: "Vijaywada", country: "India" },
        { House: "356", City: "Pune", country: "India" }
      ]
    },

    {
      name: 'Amit', email: 'amit@gmail.com', address: [
        { House: "42", City: "Mumbai", country: "India" },
        { House: "414", City: "Ayodhya", country: "India" },
        { House: "78", City: "Mathura", country: "India" }
      ]
    },

    {
      name: 'Saurav', email: 'saurav@gmail.com', address: [
        { House: "132", City: "Bihar", country: "India" },
        { House: "17", City: "Gurgaun", country: "India" },
        { House: "18", City: "Indore", country: "India" }
      ]
    },

  ]



  return (
    <>

      <h1> List with nested Array</h1>

      <Table variant="dark">

        <tbody>

          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>

          </tr>


          {
            users.map((item) =>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>

                {/* <td>{item.address}</td> */}

                {/* Aise address ko print nhi kar sakte hia bcz ye array ke form me hai, aur hm isko print nhi kar sakte hai.  */}

                {/* Address ke liye liye loop chalayenge i.e. map() function use karenge. */}


                <td>
                  {
                    item.address.map((data) =>
                      <tr>
                        <td>{data.House}</td>
                        <td>{data.City}</td>
                        <td>{data.country}</td>

                      </tr>
                    )
                  }

                </td>




              </tr>

            )
          }





        </tbody>


      </Table>

    </>
  )
}
export default NestedListApp2;