import React from "react"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

const EcommerceCustomerColumns = () => [
  {
    dataField: "cid",
    text: "ID",
    sort: true,
  },
  {
    text: "Ad",
    dataField: "name",
    sort: true,
  },
  {
    text: "Soyad",
    dataField: "surname",
    sort: true,
  },
  {
    text: "Müşteri Temsilcisi",
    dataField: "employeeID",
    sort: true,
  },
  {
    text: "Statü",
    dataField: "status",
    sort: true,
    formatter: (t,e)=>{
      return (
        <Button
          type="button"
          color="success"
          className="btn-rounded mb-2 me-2"
        >
          {t}
        </Button>
      );
    }
  },
  {
    dataField: "dataSource",
    text: "Kaynak",
    sort: true,
  },
  {
    dataField: "lastNoteDate",
    text: "Son İşlem Tarihi",
    sort: true,
  },
  {
    dataField: "lastNote",
    text: "Son Not",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Aksiyon",
    formatter: () => (
      <>
        <Link to="#" className="text-primary"><i className="mdi mdi-whatsapp font-size-18"></i></Link>
        <Link to="#" className="text-primary"><i className="mdi mdi-phone font-size-18"></i></Link>
        <Link to="#" className="text-primary"><i className="mdi mdi-view-list font-size-18"></i></Link>
      </>
    ),
  },
]

export default EcommerceCustomerColumns
