import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import NumberFormat from 'react-number-format'; 
import moment from 'moment';
import UserView from './UserView';
import utils from 'utils'

import { 
	
	CheckCircleTwoTone
	
} from '@ant-design/icons';


const userData=[
	{
	  "id": "#1153",
	  "name": "Eileen Horton",
      "phoneNumber": "+12-123-1234",
	  "email": "eileen_h@hotmail.com",
	  "img": "/img/avatars/thumb-1.jpg",
	  "number_of_orders": "10",
      "amount_spend": "900",
	  "lastOnline": 1573430400,
	  "status": "active",
	  "type":"Standard",
	  "personalInfo": {
		"location": "New York, US",
		"title": "Product Manager",
		"birthday": "10/10/1992",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1322",
	  "name": "Terrance Moreno",
      "phoneNumber": "+12-123-1234",
	  "email": "terrance_mor@gmail.com",
	  "img": "/img/avatars/thumb-2.jpg",
      "number_of_orders": "3",
      "amount_spend": "150",
	  "email_subscribed": "y",
	  "lastOnline": 1572393600,
	  "status": "active",
	  "type":"Premium",
	  "personalInfo": {
		"location": "New York, US",
		"title": "Software Engineer",
		"birthday": "03/02/1984",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#7653",
	  "name": "Ron Vargas",
      "phoneNumber": "+12-123-1234",
	  "email": "ronnie_vergas@infotech.io",
	  "img": "/img/avatars/thumb-3.jpg",
      "number_of_orders": "4",
      "amount_spend": "200",
	  "email_subscribed": "y",
	  "lastOnline": 1572393600,
	  "status": "blocked",
	  "type":"Standard",
	  "personalInfo": {
		"location": "New York, US",
		"title": "UI/UX Designer",
		"birthday": "07/11/1987",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#4721",
      "name": "Luke Cook",
       "phoneNumber": "+12-123-1234",
	  "email": "cookie_lukie@hotmail.com",
	  "img": "/img/avatars/thumb-4.jpg",
      "number_of_orders": "1",
      "amount_spend": "120",
	  "email_subscribed": "",
	  "lastOnline": 1579132800,
	  "status": "active",
	  "type":"Exclusive",
	  "personalInfo": {
		"location": "New York, US",
		"title": "HR Executive",
		"birthday": "07/11/1987",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1384",
	  "name": "Joyce Freeman",
      "phoneNumber": "+12-123-1234",
	  "email": "joyce991@infotech.io",
	  "img": "/img/avatars/thumb-5.jpg",
      "number_of_orders": "7",
      "amount_spend": "430",
	  "email_subscribed": "y",
	  "lastOnline": 1582416000,
	  "status": "active",
	  "type":"Exclusive",
	  "personalInfo": {
		"location": "New York, US",
		"title": "Frontend Developer",
		"birthday": "17/11/1993",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#8493",
	  "name": "Samantha Phillips",
      "phoneNumber": "+12-123-1234",
	  "email": "samanthaphil@infotech.io",
	  "img": "/img/avatars/thumb-6.jpg",
      "number_of_orders": "1",
      "amount_spend": "250",
	  "email_subscribed": "y",
	  "lastOnline": 1583107200,
	  "status": "active",
	  "type":"Premium",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Compliance Manager",
		"birthday": "17/11/1993",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1263",
	  "name": "Tara Fletcher",
      "phoneNumber": "+12-123-1234",
	  "email": "taratarara@imaze.edu.du",
	  "img": "/img/avatars/thumb-7.jpg",
      "number_of_orders": "2",
      "amount_spend": "230",
	  "email_subscribed": "y",
	  "lastOnline": 1582761600,
	  "status": "active",
	  "type":"Premium",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Compliance Manager",
		"birthday": "17/11/1993",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#6532",
	  "name": "Frederick Adams",
      "phoneNumber": "+12-123-1234",
	  "email": "iamfred@imaze.infotech.io",
	  "img": "/img/avatars/thumb-8.jpg",
      "number_of_orders": "2",
      "amount_spend": "150",
	  "email_subscribed": "y",
	  "lastOnline": 1579219200,
	  "status": "blocked",
	  "type":"Exclusive",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Compliance Manager",
		"birthday": "17/11/1993",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#7953",
	  "name": "Carolyn Hanson",
      "phoneNumber": "+12-123-1234",
	  "email": "carolyn_h@gmail.com",
	  "img": "/img/avatars/thumb-9.jpg",
      "number_of_orders": "1",
      "amount_spend": "75",
	  "email_subscribed": "y",
	  "lastOnline": 1584489600,
	  "status": "blocked",
	  "type":"Standard",
	  "personalInfo": {
		"location": "Texas, US",
		"title": "Compliance Manager",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#3683",
	  "name": "Brittany Hale",
      "phoneNumber": "+12-123-1234",
	  "email": "brittany1134@gmail.com",
	  "img": "/img/avatars/thumb-10.jpg",
      "number_of_orders": "3",
      "amount_spend": "430",
	  "email_subscribed": "y",
	  "lastOnline": 1583452800,
	  "status": "active",
	  "type":"Standard",
	  "personalInfo": {
		"location": "Texas, US",
		"title": "Compliance Manager",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1564",
	  "name": "Lloyd Obrien",
      "phoneNumber": "+12-123-1234",
	  "email": "handsome-obrien@hotmail.com",
	  "img": "/img/avatars/thumb-11.jpg",
      "number_of_orders": "7",
      "amount_spend": "870",
	  "email_subscribed": "y",
	  "lastOnline": 1584576000,
	  "status": "active",
	  "type":"Standard",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Software Engineer",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#2850",
	  "name": "Gabriella May",
      "phoneNumber": "+12-123-1234",
	  "email": "maymaymay12@infotech.io",
	  "img": "/img/avatars/thumb-12.jpg",
      "number_of_orders": "1",
      "amount_spend": "180",
	  "email_subscribed": "y",
	  "lastOnline": 1574208000,
	  "status": "blocked",
	  "type":"Premium",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Software Engineer",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1941",
	  "name": "Lee Wheeler",
      "phoneNumber": "+12-123-1234",
	  "email": "",
	  "img": "/img/avatars/thumb-13.jpg",
      "number_of_orders": "5",
      "amount_spend": "370",
	  "email_subscribed": "y",
	  "lastOnline": 1586649600,
	  "status": "active",
	  "type":"Premium",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Software Engineer",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#7615",
	  "name": "Gail Barnes",
      "phoneNumber": "+12-123-1234",
	  "email": "gailby0116@infotech.io",
	  "img": "/img/avatars/thumb-14.jpg",
      "number_of_orders": "1",
      "amount_spend": "50",
	  "email_subscribed": "y",
	  "lastOnline": 1583020800,
	  "status": "active",
	  "type":"Premium",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Software Engineer",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	},
	{
	  "id": "#1093",
	  "name": "Ella Robinson",
      "phoneNumber": "+12-123-1234",
	  "email": "ella_robinson@infotech.io",
	  "img": "/img/avatars/thumb-15.jpg",
      "number_of_orders": "3",
      "amount_spend": "240",
	  "email_subscribed": "",
	  "lastOnline": 1586217600,
	  "status": "active",
	  "type":"Exclusive",
	  "personalInfo": {
		"location": "London, UK",
		"title": "Software Engineer",
		"birthday": "03/06/1991",
		"phoneNumber": "+12-123-1234",
		"facebook": "facebook.com/sample",
		"twitter": "twitter.com/sample",
		"instagram": "instagram.com/sample",
		"site": "samplesite.com"
	  }
	}
  ]
  
export class CustomerList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
            {
				title: 'Customer ID',
				dataIndex: 'id',
			},
			{
				title: 'Phone Number',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
            {
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
            {
				title: 'Number of orders',
				dataIndex: 'number_of_orders',
				
			},
            {
				title: 'Amount spent',
				dataIndex: 'amount_spend',
                render: (_, record) => (
                    <span className="font-weight-semibold">
                        <NumberFormat
                            displayType={'text'} 
                            value={(Math.round(record.amount_spend * 100) / 100).toFixed(2)} 
                            prefix={'AED'} 
                            thousandSeparator={true} 
                        />
                    </span>
                ),
				sorter: (a, b) => utils.antdTableSorter(a, b, 'amount_spend')
			},
			
			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
            {
				title: 'email_subscribed',
				dataIndex: 'email_subscribed',
                render: email_subscribed => (
					email_subscribed=="y"?<CheckCircleTwoTone twoToneColor="#52c41a" />:""
				),
              
				sorter: {
					compare: (a, b) => a.email_subscribed.length - b.email_subscribed.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<div className="table-responsive">
					<Table columns={tableColumns} dataSource={users} rowKey='id' />
				</div>
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

export default CustomerList
