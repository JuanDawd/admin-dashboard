'use client'

import React from 'react'
import styles from './Navbar.module.css'
import {
	MdNotifications,
	MdOutlineChat,
	MdPublic,
	MdSearch,
} from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'

const Navbar = () => {
	const pathname = usePathname()
	const { user } = useUser()
	const handleTitle = () => {
		return pathname.split('/').pop() === ''
			? 'Dashboard'
			: pathname.split('/').pop()
	}
	return (
		<div className={styles.container}>
			<div className={styles.title}>{handleTitle()}</div>
			<div className={styles.menu}>
				<div className={styles.search}>
					<MdSearch />
					<input type='text' placeholder='Search...' className={styles.input} />
				</div>
				<div className={styles.icons}>
					<MdOutlineChat size={20} />
					<MdNotifications size={20} />
					<MdPublic size={20} />
					{user && <a href='/api/auth/logout'>Logout</a>}
				</div>
			</div>
		</div>
	)
}

export default Navbar
