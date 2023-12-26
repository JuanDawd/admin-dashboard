import React from 'react'
import styles from '@/app/UI/Login/Login.module.css'
const page = () => {
	return (
		<div className={styles.container}>
			<form action='' className={styles.form}>
				<h1>Login</h1>
				<input type='text' placeholder='Username' />
				<input type='password' placeholder='Password' />
				<button>Login</button>
			</form>
		</div>
	)
}

export default page
