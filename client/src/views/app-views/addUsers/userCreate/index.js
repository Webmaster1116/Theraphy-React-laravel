/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import * as actions from "../../../_redux/users/usersActions";
import { Card, Select, Input, Button, Radio, Form, Row, Col } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { TextArea } = Input;
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function NewForm(props) {
  const {
    userData,
    form,
    onFinish,
    handleChange,
    selectVal,
    setSelectVal,
    selectValue,
  } = props;
  const onChange = (e) => {
    setValue(e.target.value);
  };
  console.log(userData);
  return (
    <Form
      layout="vertical"
      initialValues={userData}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Row>
        <Col span={8}>
          <Form.Item
            name="businessname"
            label="Business Name"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="firstname"
            label="First Name"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="lastname"
            label="Last Name"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            style={style}
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input placeholder="sample@gmail.com" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="phonenumber"
            label="Phone Number"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            name="password"
            label="Password"
            style={style}
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="confirmpwd"
            label="Confirm Password"
            style={style}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="address"
            label="Address"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="zip"
            label="Zip"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="city"
            label="City"
            style={style}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="webiste"
        label="Website"
        style={style}
        rules={[{ required: false }]}
      >
        <Input addonBefore="https://" />
      </Form.Item>
      <Form.Item
        name="socical"
        label="Social icons and add URL"
        style={style}
        rules={[{ required: false }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"Facebook"}>Facebook</Radio>
          <Radio value={"Linkedin"}>Linkedin</Radio>
          <Radio value={"Twitter"}>Twitter</Radio>
          <Radio value={"Instagram"}>Instagram</Radio>
        </Radio.Group>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Short Description"
        style={style}
        rules={[{ required: true }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="rab"
        label="RAB"
        style={style}
        rules={[{ required: true }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"registered"}>
            Yes
            {value === "registered" ? (
              <Select placeholder="Select a option">
                <Option value="1">Massage</Option>
                <Option value="2">Acupuncture</Option>
              </Select>
            ) : null}
          </Radio>
          <Radio value={"not_registered"}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="organisation"
        label="Member of an organisation"
        style={style}
        rules={[{ required: true }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"organisation"}>
            Yes
            {value === "organisation" ? (
              <Select placeholder="Select a option">
                <Option value="1">Massage</Option>
                <Option value="2">Acupuncture</Option>
              </Select>
            ) : null}
          </Radio>
          <Radio value={"not_organisation"}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="insurance"
        label="Coverd by insurance"
        style={style}
        rules={[{ required: true }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"insurance"}>Yes</Radio>
          <Radio value={"not_insurance"}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="pricerange"
        label="Price Range"
        style={style}
        rules={[{ required: true }]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"Low"}>Low</Radio>
          <Radio value={"Medium"}>Medium</Radio>
          <Radio value={"High"}>High</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="businesslogo"
        label="Business Logo"
        style={style}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item label="Role" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          defaultValue={selectValue}
          onChange={handleChange}
          allowClear
        >
          <Option value="1">Super Admin</Option>
          <Option value="2">Vendor</Option>
        </Select>
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button
          className="mr-2"
          type="primary"
          htmlType="submit"
          style={{ float: "right" }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function EditForm(props) {
  const { userData } = props;
  const [form] = Form.useForm();
  const [load, setLoad] = useState(0);
  const onFinish = (values) => {
    let data = {};
    data["businessname"] = values["businessname"];
    data["firstname"] = values["firstname"];
    data["lastname"] = values["lastname"];
    data["email"] = values["email"];
    data["address"] = values["address"];
    data["zip"] = values["zip"];
    data["city"] = values["city"];
    data["phonenumber"] = values["phonenumber"];
    data["website"] = values["website"];
    data["social"] = values["social"];
    data["description"] = values["description"];
    data["rab"] = values["rab"];
    data["organisation"] = values["organisation"];
    data["insurance"] = values["insurance"];
    data["businesslogo"] = values["businesslogo"];
    data["password"] = values["password"];
    data["id"] = userData.id;

    addUser(JSON.stringify(data));
  };

  const selectValue = userData?.role.toString();
  useEffect(() => {
    setSelectVal(selectValue);
    setLoad(1);
  }, [userData]);
  const token = useSelector(({ auth }) => auth.authToken, shallowEqual);
  const history = useHistory();
  const dispatch = useDispatch();

  const addUser = (values) => {
    dispatch(actions.addUser(values, token)).then(() => gotoList());
  };

  const gotoList = () => {
    // dispatch(actions.setUserData());
    history.goBack();
  };
  const [selectVal, setSelectVal] = useState(1);
  function handleChange(value) {
    setSelectVal(value);
  }

  return (
    <div>
      {userData && load == 1 ? (
        <NewForm
          userData={userData}
          form={form}
          onFinish={onFinish}
          selectValue={selectValue}
          setSelectVal={setSelectVal}
          selectVal={selectVal}
          handleChange={handleChange}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

const UserCreate = ({
  match: {
    params: { id },
  },
}) => {
  const token = useSelector(({ auth }) => auth.authToken, shallowEqual);
  const history = useHistory();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(0);
  const { userData } = useSelector(
    (state) => ({
      userData: state.users.userData,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (id != null) {
      dispatch(actions.getUserData(id, token));
      setLoad(1);
    } else dispatch(actions.setUserData());
  }, [id]);

  const addUser = (values) => {
    dispatch(actions.addUser(values, token)).then(() => backToUserList());
  };

  const backToUserList = () => {
    history.push("/app/add-user");
  };

  const gotoList = () => {
    history.goBack();
  };
  const handleOnClick = useCallback(() => history.push("/add-user"), [history]);

  const [value, setValue] = React.useState(1);

  const style = { padding: "0 15px" };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let data = {};
    data["businessname"] = values["businessname"];
    data["firstname"] = values["firstname"];
    data["lastname"] = values["lastname"];
    data["email"] = values["email"];
    data["address"] = values["address"];
    data["zip"] = values["zip"];
    data["city"] = values["city"];
    data["phonenumber"] = values["phonenumber"];
    data["website"] = values["website"];
    data["social"] = values["social"];
    data["description"] = values["description"];
    data["rab"] = values["rab"];
    data["organisation"] = values["organisation"];
    data["insurance"] = values["insurance"];
    data["businesslogo"] = values["businesslogo"];
    data["password"] = values["password"];

    if (id != null) {
      data["id"] = id;
    } else {
      data["id"] = 0;
    }

    addUser(JSON.stringify(data));
  };

  return (
    <Row justify="center">
      <Col span={18}>
        <Card hoverable style={{ paddingRight: "4vw", paddingLeft: "4vw" }}>
          <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
            <Flex className="mb-1" mobileFlex={false}>
              <h2>Add USer</h2>
            </Flex>
            <div>
              <Button
                type="primary"
                onClick={gotoList}
                icon={<LeftOutlined />}
                block
              >
                Back
              </Button>
            </div>
          </Flex>
          <div style={{ marginTop: 100 }}>
            {id == null && (
              <Form
                layout="vertical"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
              >
                <Row>
                  <Col span={8}>
                    <Form.Item
                      name="businessname"
                      label="Business Name"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="firstname"
                      label="First Name"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="lastname"
                      label="Last Name"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      style={style}
                      rules={[{ type: "email" }, { required: true }]}
                    >
                      <Input placeholder="sample@gmail.com" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="phonenumber"
                      label="Phone Number"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="password"
                      label="Password"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="confirmpwd"
                      label="Confirm Password"
                      style={style}
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "The two passwords that you entered do not match!"
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={8}>
                    <Form.Item
                      name="address"
                      label="Address"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="zip"
                      label="Zip"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="city"
                      label="City"
                      style={style}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="webiste"
                  label="Website"
                  style={style}
                  rules={[{ required: false }]}
                >
                  <Input addonBefore="https://" />
                </Form.Item>
                <Form.Item
                  name="socical"
                  label="Social icons and add URL"
                  style={style}
                  rules={[{ required: false }]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"Facebook"}>Facebook</Radio>
                    <Radio value={"Linkedin"}>Linkedin</Radio>
                    <Radio value={"Twitter"}>Twitter</Radio>
                    <Radio value={"Instagram"}>Instagram</Radio>
                  </Radio.Group>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Short Description"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  name="rab"
                  label="RAB"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"registered"}>
                      Yes
                      {value === "registered" ? (
                        <Select placeholder="Select a option">
                          <Option value="1">Massage</Option>
                          <Option value="2">Acupuncture</Option>
                        </Select>
                      ) : null}
                    </Radio>
                    <Radio value={"not_registered"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="organisation"
                  label="Member of an organisation"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"organisation"}>
                      Yes
                      {value === "organisation" ? (
                        <Select placeholder="Select a option">
                          <Option value="1">Massage</Option>
                          <Option value="2">Acupuncture</Option>
                        </Select>
                      ) : null}
                    </Radio>
                    <Radio value={"not_organisation"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="insurance"
                  label="Coverd by insurance"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"insurance"}>Yes</Radio>
                    <Radio value={"not_insurance"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="pricerange"
                  label="Price Range"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={"Low"}>Low</Radio>
                    <Radio value={"Medium"}>Medium</Radio>
                    <Radio value={"High"}>High</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="businesslogo"
                  label="Business Logo"
                  style={style}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                {/* <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="1">Paid</Option>
                    <Option value="2">Free</Option>
                  </Select>
                </Form.Item> */}

                {/* <Form.Item
                  name="role"
                  label="Role"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="1">Super Admin</Option>
                    <Option value="2">Vendor</Option>
                  </Select>
                </Form.Item> */}
                <Form.Item {...tailLayout}>
                  <Button
                    className="mr-2"
                    type="primary"
                    htmlType="submit"
                    style={{ float: "right" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            )}
            {id != 0 && userData && load == 1 && (
              <EditForm userData={userData} />
            )}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserCreate;
