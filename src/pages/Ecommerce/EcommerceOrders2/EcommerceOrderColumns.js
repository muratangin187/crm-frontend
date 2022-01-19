import React from "react"
import { Link } from "react-router-dom"

const EcommerceOrderColumns = () => [
  {
    text: "Şube ID",
    dataField: "bid",
    sort: true,
  },
  {
    dataField: "name",
    text: "Şube Adı",
    sort: true,
  },
  {
    dataField: "employeeName",
    text: "Yetkili Personel",
    sort: true,
  },
  {
    dataField: "email",
    text: "E-Mail",
    sort: true,
  },
  {
    dataField: "city",
    text: "Şehir",
    sort: true,
  },
  {
    dataField: "phone",
    text: "Telefon",
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
