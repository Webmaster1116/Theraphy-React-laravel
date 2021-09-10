/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Table, Select, Input, Button, Badge, Menu, Tag } from "antd";
import {
  EyeOutlined,
  UserAddOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Flex from "components/shared-components/Flex";
import utils from "utils";
import * as actions from "../../../_redux/users/usersActions";
import userData from "assets/data/user-list.data.json";

function ListForm(props) {
  const { userListData } = props;
  const history = useHistory();

  const tableColumns = [
    // {
    // 	title: 'ID',
    // 	dataIndex: 'id'
    // },
    {
      title: "Business",
      dataIndex: "business_name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={"/img/avatars/thumb-6.jpg"}
            name={record.business_name}
            subTitle={record.email}
          />
        </div>
      ),
    },
    // {
    // 	title: 'First Name',
    // 	dataIndex: 'first_name',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.first_name} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'first_name')
    // },
    // {
    // 	title: 'Last Name',
    // 	dataIndex: 'last_name',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.last_name} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'last_name')
    // },
    // {
    // 	title: 'Email',
    // 	dataIndex: 'email',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.email} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'email')
    // },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          className="text-capitalize"
          color={status === "Subscriptions" ? "cyan" : "green"}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Phone number",
      dataIndex: "phone_number",
      render: (_, record) => (
        <div className="d-flex">{record.phone_number}</div>
      ),
    },
    // {
    // 	title: 'Address',
    // 	dataIndex: 'address',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.address} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'address')
    // },
    {
      title: "Zip",
      dataIndex: "zip",
      render: (_, record) => <div className="d-flex">{record.zip}</div>,
    },
    {
      title: "City",
      dataIndex: "city",
      render: (_, record) => <div className="d-flex">{record.city}</div>,
    },
    {
      title: "Advertises",
      dataIndex: "advertises",
      render: (_, record) => <div className="d-flex">{record.advertises}</div>,
    },
    // {
    // 	title: 'Website',
    // 	dataIndex: 'website',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.website} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'website')
    // },
    // {
    // 	title: 'Social',
    // 	dataIndex: 'social',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.social} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'social')
    // },
    // {
    // 	title: 'Description',
    // 	dataIndex: 'description',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.description} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'description')
    // },
    // {
    // 	title: 'RAB',
    // 	dataIndex: 'rab',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.rab} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'rab')
    // },
    // {
    // 	title: 'Organisation',
    // 	dataIndex: 'organisation',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.organisation} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'organisation')
    // },
    // {
    // 	title: 'Insurance',
    // 	dataIndex: 'insurance',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.insurance} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'insurance')
    // },
    // {
    // 	title: 'Price Range',
    // 	dataIndex: 'price_range',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.price_range} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'price_range')
    // },
    // {
    // 	title: 'Business Logo',
    // 	dataIndex: 'business_logo',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.business_logo} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'business_logo')
    // },
    // {
    // 	title: 'Password',
    // 	dataIndex: 'password',
    // 	render: (_, record) => (
    // 		<div className="d-flex">
    // 			<AvatarStatus name={record.password} />
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'password')
    // },
    {
      title: "",
      dataIndex: "edit",
      render: (_, record) => (
        <div className="d-flex">
          <Button onClick={(e) => userEdit(e, record.id)}>Edit</Button>
        </div>
      ),
    },
  ];

  const userEdit = (event, id) => {
    history.push("/app/add-user/edit");
  };

  const userAdd = () => {
    history.push("/app/add-user/new");
  };

  const [list, setList] = useState(userListData);

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list : userListData;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
  };

  return (
    <Card>
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={(e) => onSearch(e)}
            />
          </div>
        </Flex>
        <div>
          <Button
            type="primary"
            onClick={userAdd}
            icon={<UserAddOutlined />}
            block
          >
            Add
          </Button>
        </div>
      </Flex>
      <div className="table-responsive">
        <Table columns={tableColumns} dataSource={list} rowKey="id" />
      </div>
    </Card>
  );
}

const UserList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [load, setLoad] = useState(0);
  const token = useSelector(({ auth }) => auth.authToken, shallowEqual);
  useEffect(() => {
    dispatch(actions.getUserLists(token));
    setLoad(1);
  }, []);
  const { userListData } = useSelector(
    (state) => ({
      userListData: state.users.userListData,
    }),
    shallowEqual
  );


  return (
    <div>
      {userListData && load == 1 && <ListForm userListData={userListData} />}
    </div>
  );
};

export default UserList;
