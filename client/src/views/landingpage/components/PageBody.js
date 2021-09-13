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
  Select,
  Col,
  message,
  Divider,
  Card,
  Space,
  Tag,
} from "antd";
import { TwitterOutlined } from "@ant-design/icons";


const styles = {
  bodyStyle: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
};





export default class PageBody extends Component {

  render() {
    let { bodyStyle } = styles;
    return (
      <div style={bodyStyle}>
        {/* {this.props.children} */}
        <Col span={22} offset={1}>
          <Row>
            <Col xs={24} sm={24} md={24}>
              <div className="Header-nav-tag">
                <span>Popular categories:</span>
                <a>Acupuncture</a>
                <a>Massage</a>
                <a>Body SDS</a>
                <a>Reflexology</a>
                <a>Healing</a>
                <a>Hot Stone</a>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Space direction="horizontal">
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image1">
                    <div className="RAB-nav">RAB</div>
                  </div>
                  <div className="advertise-card paid-card">
                    <div>
                      <img src="/img/card-logo.jpg" />
                    </div>
                    <div>
                      <span className="card-title">Best business in town</span>
                      <span className="card-zip-city">2300, Copenhagen</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#717171">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      4+
                    </Button>
                    <div className="footer-logo">
                      <img src="/img/facebook.jpg" />
                      <img src="/img/facebook.jpg" />
                      <img src="/img/facebook.jpg" />
                    </div>
                    {/* <Button className="card-circle-button1" shape="circle" icon={<TwitterOutlined />} /> */}
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image1">
                    <div className="RAB-nav">RAB</div>
                  </div>
                  <div className="advertise-card paid-card">
                    <div>
                      <img src="/img/card-logo.jpg" />
                    </div>
                    <div>
                      <span className="card-title">This is another title</span>
                      <span className="card-zip-city">9700, Amsterdam</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#717171">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      3+
                    </Button>
                    <div className="footer-logo">
                      <img src="/img/facebook.jpg" />
                      <img src="/img/facebook.jpg" />
                      <img src="/img/facebook.jpg" />
                    </div>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image1">
                    <div className="RAB-nav">RAB</div>
                  </div>
                  <div className="advertise-card paid-card">
                    <div>
                      <img src="/img/card-logo.jpg" />
                    </div>
                    <div>
                      <span className="card-title">Another paid profile</span>
                      <span className="card-zip-city">6400, Oslo</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#717171">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      2+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-9.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
              </Space>
            </Col>

            <Col xs={24} sm={24} md={24}>
              <Space direction="horizontal">
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-1.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-5.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#717171">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-7.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-6.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
              </Space>
            </Col>

            <Col className="advertise-readmore-nav" xs={24} sm={24} md={24}>
              <div className="advertise-between">
                <div>
                  <span className="between-website">therapyseminars.com</span>
                  <span className="between-website-content">
                    We are the best schoolwith the highestlevel of training
                  </span>
                </div>
              </div>
              <div className="advertise-readmore">
                <Button className="readmore-button">
                  Read more
                </Button>
              </div>
            </Col>
            {/* <Col xs={24} sm={24} md={8} className="advertise-color-div">
              
            </Col> */}

            <Col xs={24} sm={24} md={24}>
              <Space direction="horizontal">
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-11.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-13.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-12.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
                <Card
                  className="advertise-card-body"
                  title=""
                  style={{ width: 300, height: 350 }}
                >
                  <div className="advertise-card-image">
                    <img src="/img/avatars/thumb-15.jpg" />
                  </div>
                  <div className="advertise-card">
                    <span className="card-title">
                      Free Profile - different layout
                    </span>
                    <span className="card-zip-city">2280, Copenhagen</span>
                  </div>
                  <div className="card-content">
                    <span>
                      This is the part of short description where 280 chars are
                      allowedand then it's a ...
                    </span>
                  </div>
                  <Divider className="advertise-card-divider" />
                  <div className="advertise-card-footer">
                    <Tag className="advertise-card-tag" color="#A5A5A5">
                      Massage
                    </Tag>
                    <Button className="card-circle-button" shape="circle">
                      1+
                    </Button>
                  </div>
                </Card>
              </Space>
            </Col>

            <Col xs={24} sm={24} md={24} className="load-profiles">
              <Button className="load-profiles-button">Load profiles</Button>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
