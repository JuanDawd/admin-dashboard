'use client'

import React from 'react'
import Card from '../UI/Dashboard/Card/Card'
import Chart from '../UI/Dashboard/Chart/Chart'
import RightBar from '../UI/Dashboard/RightBar/RightBar'
import Transactions from '../UI/Dashboard/Transactions/Transactions'
import styles from '../UI/dashboard/dashboard.module.css'
const Dashboard = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.cards}>
					<Card />
					<Card />
					<Card />
				</div>
				<Transactions />
				<Chart />
			</div>
			<div className={styles.side}>
				<RightBar />
			</div>
		</div>
	)
}

export default Dashboard
