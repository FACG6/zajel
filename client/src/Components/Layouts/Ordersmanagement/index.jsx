import React, { Component } from "react";
import axios from "axios";
import { DatePicker, Input, Button, Icon } from "antd";
import moment, { isValid } from "moment";
import Sidebar from "../../CommonComponent/Sidebar/index";
import Header from "../../CommonComponent/Header/index";
import Navbar from "../../CommonComponent/Navbar/index";
import TableComponent from "../../CommonComponent/Table/Table";
import { EditPopup } from "../../CommonComponent/Table/Popups";
import {
  //   viewPopup,
} from "../../CommonComponent/Table/Popups";
import DeletePopup from '../../CommonComponent/Table/Popups';
import "./style.css";
import WrappedComponent from '../../HOC/WithNavSide';

class OrdersManagement extends Component {
  state = {
    orders: [],
    filteredOrders: [],
    date: "",
    status: "",
    name: "",
    error: "",
    filter: false,
    stores: []
  };

  componentDidMount() {
    axios
      .get("/api/v1//viewOrders")
      .then(res => {
        if (res.status === 204) {
          let error = [...this.state.error];
          error.response = res;
          error.response.data = "Error, No orders yet.";
          this.setState({ error });
        } else {
          this.setState({ orders: res.data });
        }
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
    axios
      .get("/api/v1/getStores")
      .then(res => {
        if (res) {
          this.setState({ stores: res.data });
        }
      })
      .catch(error => {
        this.setState({ error })});
  }

  deleteRow = id => {
    this.setState(prev => {
      return { orders: prev.orders.filter(data => data.key !== id) };
    });
  };

  dateFilter = object => {
    if (object) {
      const { date } = this.state;
      if (date.length) {
        if (date[0] && date[1]) {
          if (date[0].isValid() && date[1].isValid()) {
            const fromDate = date[0].toDate().setHours(0, 0, 0, 0);
            const toDate = date[1].toDate().setHours(0, 0, 0, 0);
            let filtered = object.filter(order => {
              if (
                moment(order.date)
                  .toDate()
                  .setHours(0, 0, 0, 0) >= fromDate &&
                moment(order.date)
                  .toDate()
                  .setHours(0, 0, 0, 0) <= toDate
              ) {
                return true;
              }
            });
            return filtered;
          }
        }
      } else {
        return object;
      }
    }
  };

  statusFilter = object => {
    if (object) {
      const { status } = this.state;
      if (status) {
        let filtered = [];
        const regex1 = new RegExp(/^[(ت)]/);
        const regex2 = new RegExp(/^[(ق)]/);
        filtered = object.filter(order => {
          if (
            (order.b_status === true &&
              regex1.test(status) &&
              "تم".indexOf(status) != -1) ||
            (order.b_status === false &&
              regex2.test(status) &&
              "قيد التنفيذ".indexOf(status) != -1)
          ) {
            return true;
          } else if (order.b_status == status) {
            return true;
          }
        });
        return filtered;
      } else {
        return object;
      }
    }
  };

  nameFilter = object => {
    if (object) {
      const { name } = this.state;
      if (name) {
        let filtered = [];
        filtered = object.filter(order => {
          if (order.captain.indexOf(name) != -1) {
            return true;
          }
        });
        return filtered;
      } else {
        return object;
      }
    }
  };

  filter = async (type, value) => {
    const { date, status, name, orders } = this.state;
    let filtered = [];
    if (type === "date") {
      await this.setState({ date: value });
      if (status) {
        filtered = this.statusFilter(orders);
        if (name) {
          filtered = this.nameFilter(filtered);
        }
        filtered = this.dateFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (name) {
        filtered = this.nameFilter(orders);
        filtered = this.dateFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (value.length > 0) {
        filtered = this.dateFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    } else if (type === "status") {
      await this.setState({ status: value });
      if (date) {
        filtered = this.dateFilter(orders);
        if (name) {
        }
        filtered = this.statusFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (name) {
        filtered = this.nameFilter(orders);
        filtered = this.statusFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (value.length > 0) {
        filtered = this.statusFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    } else if (type === "name") {
      await this.setState({ name: value });
      if (date) {
        filtered = this.dateFilter(orders);
        if (status) {
          filtered = this.statusFilter(filtered);
        }
        filtered = this.nameFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (status) {
        filtered = this.statusFilter(orders);
        filtered = this.nameFilter(filtered);
        this.setState({ filteredOrders: filtered, filter: true });
      } else if (value.length > 0) {
        filtered = this.nameFilter(orders);
        this.setState({ filteredOrders: filtered, filter: true });
      } else {
        this.setState({ filteredOrders: [], filter: false });
      }
    }
  };

  clearFields = async () => {
    await this.setState({
      date: "",
      status: "",
      name: "",
      filter: false
    });
  };

  render() {
  console.log(22222,this.state.orders)
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    if (!this.state.error) {
      return (
        <div className="ordersManagement-bars-container">
          <div className="ordersManagement-main-container">
            <Header title={"إدارة الطلبات"} Icon={<Icon type="carry-out" />} />
            <div className="ordersManagement_sub-container">
              <div>
                <Button
                  className="ordersManagement_addOrder-button"
                  type="primary"
                >
                  إضافة طلب
                </Button>
                <div className="ordersManagement_filters-container">
                  <div className="ordersManagement_filters-container-timeFilter">
                    <p
                      style={{ textAlign: "right" }}
                      className="ordersManagemet_timePicker-lable"
                    >
                      إختر الفترة
                    </p>
                    <RangePicker
                      placeholder={["من", "إلى"]}
                      format={dateFormat}
                      onChange={e => this.filter("date", e)}
                      value={this.state.date}
                    />
                  </div>
                  <Input
                    id="statusInput"
                    onChange={e => this.filter("status", e.target.value)}
                    className="ordersManagement_status-filter-input"
                    placeholder="البحث حسب الحالة :"
                    value={this.state.status}
                  />
                  <Input
                    value={this.state.name}
                    onChange={e => this.filter("name", e.target.value)}
                    className="ordersManagement_status-filter-input"
                    placeholder="البحث حسب اسم الكابتن :"
                  />
                  <Button
                    className="ordersManagement_filter-button"
                    type="primary"
                    onClick={this.clearFields}
                  >
                    إفراغ الحقول
                  </Button>
                </div>
                <TableComponent
                  deleteRow = {this.deleteRow} 
                  stores={this.state.stores}
                  pageName="orders"
                  //   viewPopup={viewPopup}
                  EditPopup={EditPopup}
                  DeletePopup={DeletePopup}
                  editHtml="<input type='text' placeholder='name' id='name'>"
                  columns={
                    this.state.filter === true
                      ? this.state.filteredOrders
                      : this.state.orders
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
    }else {
      return (
        <div className="ordersManagement_error-class">
          <h1>
          {this.state.error.response ? this.state.error.response.status : 'Error' } {this.state.error.response ? this.state.error.response.statusText : '' }
          </h1>
        </div>
      );
    }
  }
}

export default OrdersManagement;
