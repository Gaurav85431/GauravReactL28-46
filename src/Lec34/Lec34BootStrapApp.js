function BootstrapApp() {

  const users = [
    { name: "Gaurav", email: "pushpam@gmail.com", contact: "8482322333" },
    { name: "saurav", email: "pushm@gmail.com", contact: "333322333" },
    { name: "Gaura", email: "puhpam@gmail.com", contact: "8482322333" },
    { name: "faurav", email: "pupam@gmail.com", contact: "8882322333" }

  ]

  return (
    <>
      <h1>List with Bootstrap table</h1>
      <table>

        <tr>

          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>

        </tr>


        {
          users.map((item) =>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>

            </tr>
          )
        }

      </table>

    </>



  )

}

export default BootstrapApp;