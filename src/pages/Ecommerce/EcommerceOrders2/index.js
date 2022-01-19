import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty, size } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

import * as moment from 'moment';

import { Button, Card, CardBody, Col, Container, Row} from "reactstrap"

import EcommerceOrderColumns from "./EcommerceOrderColumns"

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import {
  getOrders2
} from "../../../store/actions"

class EcommerceOrders2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewmodal: false,
      modal: false,
      orders2: [],
      breadcrumbItems : [
        { title : "Ecommerce", link : "#" },
        { title : "Orders", link : "#" },
    ],
    }

    this.handleOrderClick = this.handleOrderClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleValidOrderSubmit = this.handleValidOrderSubmit.bind(this)
    this.handleOrderClicks = this.handleOrderClicks.bind(this)
    this.toLowerCase1 = this.toLowerCase1.bind(this)
  }

  toLowerCase1(str) {
      return str.toLowerCase();
  }

  componentDidMount() {

    const { orders2, onGetOrders2 } = this.props

    if (orders2 && !orders2.length) {
      onGetOrders2()
    }
    this.setState({ orders2 })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders2 } = this.props
    if (!isEmpty(orders2) && size(prevProps.orders2) !== size(orders2)) {
      this.setState({ orders2: {}, isEdit: false })
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  handleOrderClicks = () => {
    this.setState({ orders2: '', isEdit: false })
    this.toggle()
  }

  // eslint-disable-next-line no-unused-vars
  handleTableChange = (type, { page, searchText }) => {
    const { orders2 } = this.props
    this.setState({
      orders2: orders2.filter(order =>
        Object.keys(order).some(
          key =>
            typeof order[key] === "string" &&
            order[key].toLowerCase().includes(searchText.toLowerCase())
        )
      ),
    })
  }

  toggleViewModal = () => {
    this.setState(prevState => ({
      viewmodal: !prevState.viewmodal,
    }))
  }

  /* Insert,Update Delete data */

  handleDeleteOrder = (order) => {
    const { onDeleteOrder } = this.props
    onDeleteOrder(order)
  }

  handleOrderClick = arg => {
    
    const order = arg

    this.setState({
      orders2: {
        id: order.id,
        orderId: order.orderId,
        billingName: order.billingName,
        orderdate: order.orderdate,
        total: order.total,
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        badgeclass: order.badgeclass
      },
      isEdit: true,
    })

    this.toggle()

  }

  /**
   * Handling submit Order on Order form
   */
  handleValidOrderSubmit = (e, values) => {
    const { onAddNewOrder, onUpdateOrder } = this.props
    const { isEdit, orders2 } = this.state

    if (isEdit) {
      const updateOrder = {
        id: orders2.id,
        orderId: values.orderId,
        billingName: values.billingName,
        orderdate: values.orderdate,
        total: values.total,
        paymentStatus: values.paymentStatus,
        paymentMethod: values.paymentMethod,
        badgeclass: values.badgeclass
      }

      // update Order
      onUpdateOrder(updateOrder)
    } else {

      const newOrder = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        orderId: values["orderId"],
        billingName: values["billingName"],
        orderdate: values["orderdate"],
        total: values["total"],
        paymentStatus: values["paymentStatus"],
        paymentMethod: values["paymentMethod"],
        badgeclass: values['badgeclass']
      }
      // save new Order
      onAddNewOrder(newOrder)
    }
    this.setState({ selectedOrder: null })
    this.toggle()
  }

  handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format('DD MMM Y');
    return date1;
  }

  render() {
    const { orders2 } = this.props

    const { SearchBar } = Search

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: orders2.length, // replace later with size(customers),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'orderId',
      order: 'desc'
    }];

    const selectRow = {
      mode: 'checkbox',
    };

    return (
      <React.Fragment>
        <div className="page-content">
          
          <Container fluid>
          <Breadcrumbs title="Şube Tanımlamaları" breadcrumbItems={this.state.breadcrumbItems} />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      data={orders2}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="bid"
                          data={orders2}
                          columns={EcommerceOrderColumns()}
                          bootstrap4
                          search
                        >
                          
                          {toolkitProps => (
                            <React.Fragment>
                              
                              <Row className="mb-2">
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
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleOrderClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      Yeni Şube Ekle
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                              <div className="table-responsive">

                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  defaultSorted={defaultSorted}
                                  selectRow={selectRow}
                                  classes={
                                    "table align-middle table-nowrap table-check"
                                  }
                                  headerWrapperClasses={"table-light"}
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

EcommerceOrders2.propTypes = {
  orders2: PropTypes.array,
  onGetOrders2: PropTypes.func
}

const mapStateToProps = state => ({
  orders2: state.Ecommerce.orders2,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders2: () => dispatch(getOrders2())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceOrders2))