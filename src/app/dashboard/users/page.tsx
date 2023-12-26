import Pagination from '@/app/UI/Dashboard/Pagination/Pagination'
import Search from '@/app/UI/Dashboard/Search/Search'
import styles from '@/app/UI/Dashboard/Users/Users.module.css'
import { deleteUser } from '@/app/lib/actions'
import { fetchUsers } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UsersPage = async ({ searchParams }: any) => {
	const q = searchParams?.q || ''
	const page = searchParams?.page || '1'
	const { users, count } = await fetchUsers(q, page)

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
					{users.map((user) => (
						<tr key={user._id}>
							<td>
								<div className={styles.user}>
									<Image
										src={user.img || '/noAvatar.png'}
										alt={user.username}
										width={40}
										height={40}
										className={styles.userImage}
									/>
									{user.username}
								</div>
							</td>
							<td>{user.email}</td>
							<td>{user.createdAt.toString().slice(4, 16)}</td>
							<td>{user.isAdmin ? 'Admin' : 'Client'}</td>
							<td>{user.isActive ? 'Active' : 'Passive'}</td>

							<td>
								<div className={styles.buttons}>
									<Link href={`/dashboard/users/${user._id}`}>
										<button className={`${styles.button} ${styles.view}`}>
											View
										</button>
									</Link>
									<form action={deleteUser}>
										<input type='hidden' name='_id' value={`${user._id}`} />
										<button className={`${styles.button} ${styles.delete}`}>
											Delete
										</button>
									</form>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination count={count} />
		</div>
	)
}

export default UsersPage
