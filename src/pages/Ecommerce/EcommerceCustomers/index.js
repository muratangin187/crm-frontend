import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, size } from "lodash";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Select from "react-select";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import filterFactory, { Comparator } from "react-bootstrap-table2-filter";
import Flatpickr from "react-flatpickr";
import * as moment from "moment";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import EcommerceCustomerColumns from "./EcommerceCustomerColumns";

import {
  getCustomers,
  addNewCustomer,
} from "../../../store/e-commerce/actions";

const statusOptions = [
  {
    label: "Statüler",
    options: [
      { key: 1, label: "Takip", value: "Takip" },
      { key: 2, label: "Yakın Takip", value: "Yakın Takip" },
      { key: 3, label: "İlgisiz", value: "İlgisiz" },
    ],
  },
];

const employeeOptions = [
    { key: 1, label: "Duygu Yılmaz", value: "Duygu Yılmaz" },
    { key: 2, label: "Ahmet Voral", value: "Ahmet Voral" },
    { key: 3, label: "Mehmet Uslu", value: "Mehmet Uslu" },
];

class EcommerceCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Customer", link: "#" },
      ],
      isOpen: null,
      sourceFilter: () => {},
      employeeFilter: () => {},
      dateFilter: () => {},
      newCustomer: {
        name: null,
        surname: null,
        countryNo: null,
        phone: null,
        email: null,
        nationalID: null,
        dataSource: null,
        employeeID: null,
        trackStatus: null,
        // name: "DENEME",
        // surname: "AHMET",
        // countryNo: 91,
        // phone: 5555555555,
        // email: "deneme@example.com",
        // nationalID: 1112312312,
        // dataSource: "MYKAYNAK",
        // employeeID: "Duygu Yılmaz",
        // trackStatus: "Yakın Takip",
      },
      filters: {
        source: "",
        employee: "",
        date: null,
      },
      toggleSwitch: false,
    };
    this.handleCustomerClick = this.handleCustomerClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.filterToggle = this.filterToggle.bind(this);
    this.handleValidCustomerSubmit = this.handleValidCustomerSubmit.bind(this);
    this.handleCustomerClicks = this.handleCustomerClicks.bind(this);
    this.handleSelectStatus = this.handleSelectStatus.bind(this);
  }

  componentDidMount() {
    const { customers, onGetCustomers } = this.props;
    if (customers && !customers.length) {
      onGetCustomers();
    }
    this.setState({ customers });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { customers } = this.props;
    if (!isEmpty(customers) && size(prevProps.customers) !== size(customers)) {
      this.setState({ customers: {}, isEdit: false });
    }
  }

  filterToggle() {
    this.setState((prevState) => ({
      filterModal: !prevState.filterModal,
    }));
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  handleCustomerClicks = (arg) => {
    this.setState({ selectedCustomer: arg });
    this.toggle();
  };

  handleNameChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, name: val.target.value },
    });
  };

  handleFilterSourceChange = (val) => {
    this.setState({
      filters: { ...this.state.filters, source: val.target.value },
    });
  };

  handleFilterEmployee = (selectedEmployee) => {
    this.setState({
      filters: { ...this.state.filters, employee: selectedEmployee.value },
    });
  };

  handleFilterDate = (dateString) => {
    const data = { date: new Date(dateString), comparator: Comparator.GT }
    this.setState({
      filters: { ...this.state.filters, date: data},
    });
  };


  handleSurnameChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, surname: val.target.value },
    });
  };

  handlePhoneChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, phone: val.target.value },
    });
  };

  handleCountryNoChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, countryNo: val.target.value },
    });
  };

  handleEmailChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, email: val.target.value },
    });
  };

  handleNationalIDChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, nationalID: val.target.value },
    });
  };

  handleDataSourceChange = (val) => {
    this.setState({
      newCustomer: { ...this.state.newCustomer, dataSource: val.target.value },
    });
  };

  handleSelectStatus = (selectedStatus) => {
    this.setState({
      newCustomer: {
        ...this.state.newCustomer,
        trackStatus: selectedStatus.value,
      },
    });
  };

  handleSelectEmployee = (selectedEmployee) => {
    this.setState({
      newCustomer: {
        ...this.state.newCustomer,
        employeeID: selectedEmployee.value,
      },
    });
  };

  /* Insert,Update Delete data */

  handleDeleteCustomer = (customer) => {
    const { onDeleteCustomer } = this.props;
    onDeleteCustomer(customer);
  };

  handleCustomerClick = (arg) => {
    const customer = arg;

    this.setState({
      customers: {
        id: customer.id,
        username: customer.username,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        rating: customer.rating,
        walletBalance: customer.walletBalance,
        joiningDate: customer.joiningDate,
      },
      isEdit: true,
    });

    this.toggle();
  };

  handleSubmit = (e) => {
    const { onAddNewCustomer } = this.props;
    console.log(this.state.newCustomer);
    const result = {
      id: this.state.customers.length,
      name: this.state.newCustomer.name,
      surname: this.state.newCustomer.surname,
      employeeID: this.state.newCustomer.employeeID,
      status: this.state.newCustomer.trackStatus,
      dataSource: this.state.newCustomer.dataSource,
      lastNoteDate: "-",
      lastNote: "-",
    };
    onAddNewCustomer(result);
    this.toggle();
  };

  /**
   * Handling submit Customer on Customer form
   */
  handleValidCustomerSubmit = (e, val) => {
    const { onAddNewCustomer, onUpdateCustomer } = this.props;
    const { isEdit, customers } = this.state;

    if (isEdit) {
      const updateCustomer = {
        id: customers.id,
        username: val.target.valueues.username,
        phone: val.target.valueues.phone,
        email: val.target.valueues.email,
        address: val.target.valueues.address,
        rating: val.target.valueues.rating,
        walletBalance: val.target.valueues.walletBalance,
        joiningDate: val.target.valueues.joiningDate,
      };

      // update Customer
      onUpdateCustomer(updateCustomer);
    } else {
      const newCustomer = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        username: val.target.valueues["username"],
        phone: val.target.valueues["phone"],
        email: val.target.valueues["email"],
        address: val.target.valueues["address"],
        rating: val.target.valueues["rating"],
        walletBalance: val.target.valueues["walletBalance"],
        joiningDate: val.target.valueues["joiningDate"],
      };
      // save new Customer
      onAddNewCustomer(newCustomer);
    }
    this.setState({ selectedCustomer: null });
    this.toggle();
  };

  handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  /* Insert,Update Delete data */

  render() {
    const { customers } = this.props;

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: customers.length, // replace later with size(customers),
      custom: true,
    };

    const defaultSorted = [
      {
        dataField: "id",
        order: "desc",
      },
    ];

    const { SearchBar } = Search;

    const selectRow = {
      mode: "checkbox",
    };

    return (
      <React.Fragment>
        <div className="page-content">
          <Modal size="xl" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Yeni müşteri ekle</ModalHeader>
            <ModalBody>
              <Card>
                <CardBody>
                  <h4 className="card-title">Müşteri bilgileri</h4>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      İsim
                    </Label>
                    <Col md={10}>
                      <Input
                        type="text"
                        placeholder="Ali"
                        id="example-text-input"
                        value={this.state.newCustomer.name}
                        onChange={this.handleNameChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Soyisim
                    </Label>
                    <Col md={10}>
                      <Input
                        type="text"
                        placeholder="Yılmaz"
                        id="example-text-input"
                        value={this.state.newCustomer.surname}
                        onChange={this.handleSurnameChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Telefon
                    </Label>
                    <Col md={3}>
                      <Input
                        type="number"
                        placeholder="90"
                        id="example-text-input"
                        className="cold-md-0"
                        value={this.state.newCustomer.countryNo}
                        onChange={this.handleCountryNoChange}
                      />
                    </Col>
                    <Col md={7}>
                      <Input
                        type="number"
                        placeholder="5361231212"
                        id="example-text-input"
                        className="cold-md-0"
                        value={this.state.newCustomer.phone}
                        onChange={this.handlePhoneChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Email
                    </Label>
                    <Col md={10}>
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        id="example-text-input"
                        value={this.state.newCustomer.email}
                        onChange={this.handleEmailChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      TC Kimlik
                    </Label>
                    <Col md={10}>
                      <Input
                        type="number"
                        placeholder="12312123212"
                        id="example-text-input"
                        className="cold-md-0"
                        value={this.state.newCustomer.nationalID}
                        onChange={this.handleNationalIDChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Kaynak
                    </Label>
                    <Col md={10}>
                      <Input
                        type="text"
                        placeholder="Kaynak"
                        id="example-text-input"
                        value={this.state.newCustomer.dataSource}
                        onChange={this.handleDataSourceChange}
                      />
                    </Col>
                  </Row>
                  {/* <Row className="mb-3">
                        <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Eklenme Tarihi</Label>
                        <Col md={10}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="dd M,yyyy"
                              options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Adres</Label>
											<Input
												type="textarea"
												id="textarea"
												onChange={this.textareachange}
												maxLength="225"
												rows="3"
												placeholder="Adres tarifi"
											/>
                    </Row>
                    <Row className="mb-3">
												<Label className="form-label">Kayıtlı Şube</Label>
                        <Col md={10}>
                          <Select
                            val.target.valueue={this.state.selectedGroup}
                            onChange={this.handleSelectGroup}
                            options={optionGroup}
                          />
                        </Col>
                    </Row> */}
                  <Row className="mb-3">
                    <Label className="form-label">Müşteri Temsilcisi</Label>
                    <Select
                      value={this.state.selectedEmployee}
                      onChange={this.handleSelectEmployee}
                      options={employeeOptions}
                    />
                  </Row>
                  {/* <Row className="mb-3">
                        <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Temsilci Atanma Tarihi</Label>
                        <Col md={10}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="dd M,yyyy"
                              options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                            />
                        </Col>
                    </Row> */}
                  {/* <Row className="mb-3">
												<Label className="form-label">Müşteri Statüsü</Label>
                        <Col md={10}>
                          <Select
                            val.target.valueue={this.state.selectedGroup}
                            onChange={this.handleSelectGroup}
                            options={optionGroup}
                          />
                        </Col>
                    </Row> */}
                  <Row className="mb-3">
                    <Label className="form-label">Müşteri Takip Statüsü</Label>
                    <Select
                      value={this.state.selectedStatus}
                      onChange={this.handleSelectStatus}
                      options={statusOptions}
                    />
                  </Row>
                  {/* <Row>
                      <div className="form-check form-switch mb-3" dir="ltr">
                          <Input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                          <Label className="form-check-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}>Hatırlatıcı</Label>
                      </div>
                    </Row>
                    <Row className="mb-3">
                        <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Hatirlatici Tarihi</Label>
                        <Col md={10}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="dd M,yyyy"
                              options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label htmlFor="example-time-input" className="col-md-2 col-form-label">Time</Label>
                      <Col md={10}>
                          <Input type="time" defaultValue="13:45:00" id="example-time-input" />
                      </Col>
                    </Row> */}
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                onClick={this.toggle}
                color="light"
                className="waves-effect"
              >
                Close
              </Button>
              <Button
                type="button"
                color="primary"
                className="waves-effect waves-light"
                onClick={this.handleSubmit}
              >
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            size="xl"
            isOpen={this.state.filterModal}
            toggle={this.filterToggle}
          >
            <ModalHeader toggle={this.filterToggle}>Filtreleme Seçenekleri</ModalHeader>
            <ModalBody>
              <Card>
                <CardBody>
                  <h4 className="card-title">Filtreleme</h4>
                  <Row className="mb-3">
                    <Label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Kaynak filtrele
                    </Label>
                    <Col md={10}>
                      <Input
                        type="text"
                        placeholder="Kaynak filtresi"
                        id="example-text-input"
                        value={this.state.filters.source}
                        onChange={this.handleFilterSourceChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label className="form-label">Müşteri Temsilcisi</Label>
                    <Select
                      value={this.state.filtersEmployee}
                      onChange={this.handleFilterEmployee}
                      options={employeeOptions}
                    />
                  </Row>
                    <Row className="mb-3">
                        <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Hatirlatici Tarihi</Label>
                        <Col md={10}>
                            <Flatpickr
                              className="form-control d-block"
                              placeholder="dd M,yyyy"
                              options={{
                                altInput: true,
                                altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(dates, currentDateString) => this.handleFilterDate(currentDateString)}
                            />
                        </Col>
                    </Row>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                onClick={this.filterToggle}
                color="light"
                className="waves-effect"
              >
                Close
              </Button>
              <Button
                type="button"
                color="warning"
                className="waves-effect waves-light"
                onClick={()=>{
                  this.handleFilterSourceChange({target:{value:""}})
                  this.handleFilterEmployee({value:""})
                  this.state.sourceFilter();
                  this.state.employeeFilter();
                  this.state.dateFilter();
                  this.filterToggle();
                }}
              >
                Clear all filters
              </Button>
              <Button
                type="button"
                color="primary"
                className="waves-effect waves-light"
                onClick={()=>{
                  if(this.state.filters.source) this.state.sourceFilter(this.state.filters.source);
                  else this.state.sourceFilter();
                  if(this.state.filters.employee) this.state.employeeFilter(this.state.filters.employee);
                  else this.state.employeeFilter();
                  if(this.state.filters.date) this.state.dateFilter(this.state.filters.date);
                  else this.state.dateFilter();
                  this.filterToggle();
                }}
              >
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
          <Container fluid>
            <Breadcrumbs
              title="Ecommerce"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      data={customers}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={EcommerceCustomerColumns({
                            isOpen: this.state.isOpen,
                            open: (a) => this.setState({ isOpen: a }),
                            sourceFilter: (a) =>
                              this.setState({ sourceFilter: a }),
                            employeeFilter: (a) =>
                              this.setState({ employeeFilter: a }),
                            dateFilter: (a) =>
                              this.setState({ dateFilter: a }),
                            employeeOptions,
                          })}
                          data={customers}
                          search
                        >
                          {(toolkitProps) => (
                            <React.Fragment>
                              <Row>
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="primary"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.filterToggle}
                                    >
                                      <i className="mdi mdi-plus me-1" /> Filter
                                    </Button>
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleCustomerClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" /> New
                                      Customers
                                    </Button>
                                  </div>
                                </Col>
                              </Row>

                              <div className="table-responsive">
                                <BootstrapTable
                                  keyField={"id"}
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  defaultSorted={defaultSorted}
                                  selectRow={selectRow}
                                  classes={"table align-middle table-nowrap"}
                                  headerWrapperClasses={"thead-light"}
                                  filter={filterFactory()}
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                />
                              </div>
                              <div className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
  onAddNewCustomer: PropTypes.func,
};

const mapStateToProps = ({ Ecommerce }) => ({
  customers: Ecommerce.customers,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCustomers: () => dispatch(getCustomers()),
  onAddNewCustomer: (customer) => dispatch(addNewCustomer(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceCustomers);
