import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { selectFilter, textFilter, dateFilter } from 'react-bootstrap-table2-filter';

const EcommerceCustomerColumns = (props) => [
  {
    dataField: "id",
    text: "ID",
    type: 'number',
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
    filter: selectFilter({
      options: props.employeeOptions,
      style: {display:'none'},
      getFilter: (filter) => props.employeeFilter(filter)
    }),
    sort: true,
  },
  {
    text: "Statü",
    dataField: "status",
    sort: true,
    formatter: (t, e) => {
      return (
        <Button type="button" color="success" className="btn-rounded mb-2 me-2">
          {t}
        </Button>
      );
    },
  },
  {
    dataField: "dataSource",
    text: "Kaynak",
    sort: true,
    filter: textFilter({
      style: {display:'none'},
      getFilter: (filter) => props.sourceFilter(filter)
    })
  },
  {
    dataField: "lastNoteDate",
    text: "Son İşlem Tarihi",
    type: 'date',
    filter: dateFilter({
      style: {display:'none'},
      getFilter: (filter) => props.dateFilter(filter)
    }),
    formatter: (t, e) => {
      const date = new Date(t);
      const dateStr = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
      return (<>{dateStr}</>);
    },
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
    formatExtraData: props,
    formatter: (c, r, rI, extra) => (
      <>
        <Link to="#" className="text-primary">
          <i className="mdi mdi-whatsapp font-size-22"></i>
        </Link>
        <Link to="#" className="text-primary">
          <i className="mdi mdi-phone font-size-22"></i>
        </Link>
        <Dropdown
          isOpen={extra.isOpen === rI}
          toggle={(a) => {a.pointerType ? extra.open(null) : extra.open(rI);}}
          className="mt-4 mt-sm-0"
        >
          <DropdownToggle size='sm' color="light">
          More
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Görüntüle</DropdownItem>
            <DropdownItem>Gerçek Hesap Aç</DropdownItem>
            <DropdownItem>Demo Hesap Aç</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    ),
  },
];

export default EcommerceCustomerColumns;
