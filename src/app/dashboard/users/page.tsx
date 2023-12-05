'use client'

import Pagination from '@/app/UI/Dashboard/Pagination/Pagination'
import Search from '@/app/UI/Dashboard/Search/Search'
import styles from '@/app/UI/Dashboard/Users/Users.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Search for a user...' />
				<Link href='/dashboard/users/add'>
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Created At</td>
						<td>Role</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									src='/noAvatar.png'
									alt='John Doe'
									width={40}
									height={40}
									className={styles.userImage}
								/>
								John Doe
							</div>
						</td>
						<td>john@gmail.com</td>
						<td>13.01.2022</td>
						<td>Admin</td>
						<td>active</td>

						<td>
							<div className={styles.buttons}>
								<Link href='/'>
									<button className={`${styles.button} ${styles.view}`}>
										View
									</button>
								</Link>
								<button className={`${styles.button} ${styles.delete}`}>
									Delete
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	)
}

export default UsersPage
