import React from 'react'
import styles from './Sidebar.module.css'
import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdShoppingBag,
	MdAttachMoney,
	MdWork,
	MdAnalytics,
	MdPeople,
	MdOutlineSettings,
	MdHelpCenter,
	MdLogout,
} from 'react-icons/md'
import MenuLink from './MenuLink/MenuLink'
import Image from 'next/image'
import ProfileClient from '../ProfileClient/ProfileClient'

const menuItems = [
	{
		title: 'Pages',
		list: [
			{
				title: 'Dashboard',
				path: '/',
				icon: <MdDashboard />,
			},
			{
				title: 'Users',
				path: '/users',
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: 'Products',
				path: '/products',
				icon: <MdShoppingBag />,
			},
			{
				title: 'Transactions',
				path: '/transactions',
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: 'Analytics',
		list: [
			{
				title: 'Revenue',
				path: '/revenue',
				icon: <MdWork />,
			},
			{
				title: 'Reports',
				path: '/reports',
				icon: <MdAnalytics />,
			},
			{
				title: 'Teams',
				path: '/teams',
				icon: <MdPeople />,
			},
		],
	},
	{
		title: 'User',
		list: [
			{
				title: 'Settings',
				path: '/settings',
				icon: <MdOutlineSettings />,
			},
			{
				title: 'Help',
				path: '/help',
				icon: <MdHelpCenter />,
			},
		],
	},
]

const Sidebar = () => {
	return (
		<div className={styles.container}>
			<ProfileClient />
			<ul className={styles.list}>
				{menuItems.map((cat, key) => (
					<li key={cat.title + key}>
						<span className={styles.cat}>{cat.title}</span>
						{cat.list.map((item, key) => (
							<MenuLink key={key} {...item} />
						))}
					</li>
				))}
			</ul>
			<button className={styles.logout}>
				<MdLogout />
				Logout
			</button>
		</div>
	)
}

export default Sidebar
