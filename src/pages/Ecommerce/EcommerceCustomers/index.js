import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty, size } from "lodash"
import { Button, Card, CardBody, Col, Container, Row, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import * as moment from 'moment';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import EcommerceCustomerColumns from "./EcommerceCustomerColumns"

import {
  getCustomers
} from "../../../store/e-commerce/actions"

class EcommerceCustomers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      breadcrumbItems: [
          { title : "Ecommerce", link : "#" },
          { title : "Customer", link : "#" }
      ]
    }
    this.handleCustomerClick = this.handleCustomerClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleValidCustomerSubmit = this.handleValidCustomerSubmit.bind(this)
    this.handleCustomerClicks = this.handleCustomerClicks.bind(this)
  }

  componentDidMount() {
    const { customers, onGetCustomers } = this.props
    if (customers && !customers.length) {
      onGetCustomers()
    }
    this.setState({ customers })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { customers } = this.props
    if (!isEmpty(customers) && size(prevProps.customers) !== size(customers)) {
      this.setState({ customers: {}, isEdit: false })
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  handleCustomerClicks = arg => {
    this.setState({ selectedCustomer: arg })
    this.toggle()
  }

  /* Insert,Update Delete data */

  handleDeleteCustomer = (customer) => {
    const { onDeleteCustomer } = this.props
    onDeleteCustomer(customer)
  }

  handleCustomerClick = arg => {
    const customer = arg

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
    })

    this.toggle()
  }

  /**
   * Handling submit Customer on Customer form
   */
  handleValidCustomerSubmit = (e, values) => {
    const { onAddNewCustomer, onUpdateCustomer } = this.props
    const { isEdit, customers } = this.state

    if (isEdit) {
      const updateCustomer = {
        id: customers.id,
        username: values.username,
        phone: values.phone,
        email: values.email,
        address: values.address,
        rating: values.rating,
        walletBalance: values.walletBalance,
        joiningDate: values.joiningDate,
      }

      // update Customer
      onUpdateCustomer(updateCustomer)
    } else {

      const newCustomer = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        username: values["username"],
        phone: values["phone"],
        email: values["email"],
        address: values["address"],
        rating: values["rating"],
        walletBalance: values["walletBalance"],
        joiningDate: values["joiningDate"],
      }
      // save new Customer
      onAddNewCustomer(newCustomer)
    }
    this.setState({ selectedCustomer: null })
    this.toggle()
  }

  handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format('DD MMM Y');
    return date1;
  }


  /* Insert,Update Delete data */

  render() {

    const { customers } = this.props

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: customers.length, // replace later with size(customers),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'id',
      order: 'desc'
    }];

    const { SearchBar } = Search

    const selectRow = {
      mode: 'checkbox'
    };

    return (
      <React.Fragment>

        <div className="page-content">
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={() => this.setState({ modal_standard: false })}>
                Modal Heading
            </ModalHeader>
            <ModalBody>
              <h5>Overflowing text to show scroll behavior</h5>
              <p>
                Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas
                eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
            </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.
            </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
            </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas
                eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
            </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.
            </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
            </p>
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                onClick={this.tog_standard}
                color="light"
                className="waves-effect"
              >
                Close
            </Button>
              <Button
                type="button"
                color="primary" className="waves-effect waves-light"
              >
                Save changes
            </Button>
            </ModalFooter>
          </Modal>
          <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='cid'
                      data={customers}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='id'
                          columns={EcommerceCustomerColumns()}
                          data={customers}
                          search
                        >
                          {toolkitProps => (
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
                                      onClick={this.handleCustomerClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      Filter 
                                    </Button>
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleCustomerClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      New Customers
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
                                  classes={
                                    "table align-middle table-nowrap"
                                  }
                                  headerWrapperClasses={"thead-light"}
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
    )
  }
}

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func
}

const mapStateToProps = ({ Ecommerce }) => ({
  customers: Ecommerce.customers,
})

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceCustomers)