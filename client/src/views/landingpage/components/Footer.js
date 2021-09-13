import React, { Component } from "react";
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

const styles = {
  footerStyle: {
    bottom: 0,
    width: "100%",
    backgroundColor: "#0d0b21",
    verticalAlign: "middle",
    textAlign: "center",
  },
  parStyle: {
    display: "inline",
    marginRight: 15,
  },
};

export default class Footer extends Component {
  render() {
    let { footerStyle, parStyle } = styles;
    return (
      <footer style={footerStyle}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}></Col>
          <Col className="Footer-nav" xs={24} sm={24} md={24} lg={12} style={{ marginTop: 40, textAlign: "left", lineHeight:2 }}>
            <div>
              <a>How to find a room</a>
              <a>How to rent your room</a>
              <a>ID checks</a>
              <a>Background checks</a>
            </div>
            <div>
              <a>Free roommate agreement</a>
              <a>Safety & security</a>
              <a>Community standards</a>
            </div>

            <a className="small-tag">Support team</a>
            <a className="small-tag">Terms privacy</a>
            <a className="small-tag">Facebook</a>
          </Col>
        </Row>
      </footer>
    );
  }
}
