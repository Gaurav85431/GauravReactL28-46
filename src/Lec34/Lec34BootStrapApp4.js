import { Table } from "react-bootstrap";
function BootstrapApp4() {

  const users = [
    { name: "Gaurav", email: "pushpam@gmail.com", contact: "133" },
    { name: "saurav", email: "pushm@gmail.com", contact: "133" },
    { name: "Gaura", email: "puhpam@gmail.com", contact: "133" },
    { name: "faurav", email: "pupam@gmail.com", contact: "133" },
    { name: "Gfsdfdsaura", email: "puhfsdpam@gmail.com", contact: "1333" },
    { name: "faurafasdv", email: "pupam@gmafdsail.com", contact: "13213" }

  ]

  return (
    <>
      <h1>List with Bootstrap table</h1>
      {/* <Table> */}
      <Table striped >
        <tbody>
          <tr>

            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>

          </tr>

          {

            users.map((item, i) =>

              // yadi hme contact ke upper koi condition laagana chahte hai ki agar contact 133 ho whai show ho otherwise nhi. 

              item.contact = '133' ?

                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>

                </tr> : null
            )
          }

        </tbody>
      </Table>

    </>
  )
}

export default BootstrapApp4;