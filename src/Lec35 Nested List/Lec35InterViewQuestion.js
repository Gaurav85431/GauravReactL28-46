import { Table } from "react-bootstrap";
function InterviewQuestion() {

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
            <td>Sr. No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>

          </tr>

          {
            users.map((item, i) =>
              <tr key={i}>
                {/* <td>{i}</td> se 0 se print hoga we want to print from 1 */}
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>


                  <Table variant="dark">
                    <tbody>

                      {
                        item.address.map((data, index) =>
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.House}</td>
                            <td>{data.City}</td>
                            <td>{data.country}</td>

                          </tr>
                        )
                      }
                    </tbody>
                  </Table>

                </td>

              </tr>

            )
          }

        </tbody>


      </Table>

    </>
  )
}
export default InterviewQuestion;