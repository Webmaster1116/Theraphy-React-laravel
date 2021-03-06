import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import NumberFormat from 'react-number-format'; 
import moment from 'moment';
import UserView from './UserView';
import utils from 'utils'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import * as actions from "../../../_redux/salesagent/salesagentActions";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { 
	
	CheckCircleTwoTone
	
} from '@ant-design/icons';

const SalesAgent = () => {

	const history = useHistory();
	const [userProVisable, setUserProVisable] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const deleteUser = (userId) => {
		// this.setState({
		// 	users: this.state.users.filter(item => item.id !== userId),
		// })
		// message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = (userInfo) => {
		setSelectedUser(userInfo);
		setUserProVisable(true)
	};

	const closeUserProfile = () => {
		setSelectedUser(null);
		setUserProVisable(false)
	}

	const editUserProfile = (userId) => {
		history.push("/app/sales_agent/" + userId);
	}

	const tableColumns = [

		{
			title: 'User Name',
			dataIndex: 'username',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus src={record.img} name={record.username} subTitle={record.email} />
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},

		{
			title: 'First Name',
			dataIndex: 'first_name',

			sorter: (a, b) => utils.antdTableSorter(a, b, 'first_name')
		},

		{
			title: 'Last Name',
			dataIndex: 'last_name',

			sorter: (a, b) => utils.antdTableSorter(a, b, 'last_name')
		},
		
		{
			title: 'Company Name',
			dataIndex: 'company_name',

			sorter: (a, b) => utils.antdTableSorter(a, b, 'company_name')
		},

		{
			title: 'Address',
			dataIndex: 'address',

			sorter: (a, b) => utils.antdTableSorter(a, b, 'address')
		},

		{
			title: 'Commission Slab',
			dataIndex: 'commission_slab',

			sorter: (a, b) => utils.antdTableSorter(a, b, 'commission_slab')
		},

		{
			title: 'Enable',
			dataIndex: 'enable',

			render: (_, record) => (
				<div className="d-flex">
					{record.enable==1?<CheckCircleTwoTone twoToneColor="#52c41a" />:""}
				</div>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'enable')
		},

		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right d-flex justify-content-end">
					<Tooltip title="Edit">
						<Button className="mr-2" icon={<EditOutlined />} onClick={() => { editUserProfile(elm.id) }} size="small" />
					</Tooltip>
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { showUserProfile(elm) }} size="small" />
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={() => { deleteUser(elm.id) }} size="small" />
					</Tooltip>
				</div>
			)
		}
	];

	const dispatch = useDispatch();
	const [load, setLoad] = useState(0);
	const token = useSelector(({ auth }) => auth.authToken, shallowEqual);
	useEffect(() => {
		dispatch(actions.getSalesAgentLists(token));
		setLoad(1);
	}, []);
	const { salesAgentListData } = useSelector(
		(state) => ({
			salesAgentListData: state.salesagent.salesAgentListData,
		}),
		shallowEqual
	);

	console.log(salesAgentListData);
	return (
		<Card bodyStyle={{ 'padding': '0px' }}>
			<div className="table-responsive">
				<Table columns={tableColumns} dataSource={salesAgentListData} rowKey='id' />

			</div>
			<UserView data={selectedUser} visible={userProVisable} close={() => { closeUserProfile() }} />
		</Card>
	)
}

export default SalesAgent
