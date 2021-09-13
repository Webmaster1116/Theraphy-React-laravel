import React, { Component } from "react";
import "../App.css";
import {
  Form,
  Avatar,
  Button,
  Input,
  DatePicker,
  Row,
  Radio,
  Col,
  message,
  Select,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

// const onSearch = value => console.log(value);
function handleChange(value) {
  console.log(`selected ${value}`);
}

const styles = {
  navStyle1: {
    top: 0,
    backgroundColor: "#f3f3f5",
    height: 80,
    verticalAlign: "middle",
    lineHeight: "40px",
    marginTop: "10px",
    fontSize: "12px",
    color: "#fff",
    fontFamily: "Helvetica Neue",
    lineHeight: 2.5,
  },
  anchorStyle1: {
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    fontSize: 17,
    fontWeight: 500,
    backgroundColor: "#fff",
    color: "black",
    border: "1px solid #cecece",
    marginRight: 10,
    borderRadius: 5,
  },
  anchorStyle2: {
    height: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    fontWeight: 500,
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    fontSize: 17,
    backgroundColor: "#e32f37",
    color: "white",
    border: "1px solid #e32f37",
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  anchorStyle3: {
    height: 35,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 7,
    paddingBottom: 7,
    fontWeight: 500,
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    fontSize: 17,
    backgroundColor: "#dfdfdf",
    color: "black",
    border: "1px solid #dfdfdf",
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 5,
  },
};

export default class Header extends Component {
  render() {
    let { navStyle1, anchorStyle1, anchorStyle2, anchorStyle3 } =
      styles;
    return (
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <nav className="nav-style">
            <span>
              Find a therapist in your local area. Are you a therapist? Create a
              free profile.
            </span>
          </nav>
          <Col span={18} offset={3}>
            <div className="Header-middle-body">
              <h1>Therapist Logo</h1>
              <div>
                <a style={anchorStyle1} href="/auth">
                  Sign in
                </a>
                <a style={anchorStyle2} href="">
                  Create profile
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <nav style={navStyle1}></nav>
            <Col span={10} offset={7}>
              <div className="Search-bar">
                {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
                <SearchOutlined />
                <Input
                  className="header-search"
                  placeholder="Search by therapy, zip or city ..."
                />
                <Select
                  className="header-select"
                  placeholder="By filter"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="therapy">Therapy</Option>
                  <Option value="zip">Zip</Option>
                  <Option value="city">City</Option>
                </Select>
                <a style={anchorStyle3}>Search</a>
              </div>
            </Col>
          </Col>
        </Col>
      </Row>
    );
  }
}
