'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import styles from './ProfileClient.module.css'

export default function ProfileClient() {
	const { user, error, isLoading } = useUser()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>

	return user ? (
		<div className={styles.user}>
			<Image
				className={styles.userImage}
				src={user.picture || '/noAvatar.png'}
				alt={'avatar'}
				width='50'
				height='50'
			/>
			<div className={styles.userDetail}>
				<span className={styles.username}>{user.email?.split('@')[0]}</span>
				<span className={styles.userTitle}>Administrator</span>
			</div>
		</div>
	) : (
		<div className={styles.user}>
			<Image
				className={styles.userImage}
				src={'/noAvatar.png'}
				alt={'avatar'}
				width='50'
				height='50'
			/>
			<div className={styles.userDetail}>
				<a className={styles.username} href='/api/auth/login'>
					Login
				</a>
			</div>
		</div>
	)
}
