import React from "react"
import { Link } from "react-router-dom"

const EcommerceOrderColumns = () => [
  {
    text: "Departman ID",
    dataField: "did",
    sort: true,
  },
  {
    dataField: "name",
    text: "Departman Adı",
    sort: true,
  },
  {
    dataField: "branchName",
    text: "Tanımlı Şube",
    sort: true,
  },
  {
    dataField: "action",
    isDummyField: true,
    text: "Aksiyon",
    formatter: (cellContent) => (
      <React.Fragment>
        <Link to="#" className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
        <Link to="#" className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
      </React.Fragment>
    ),
  },
]

export default EcommerceOrderColumns
