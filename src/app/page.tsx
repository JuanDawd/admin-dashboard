'use client'

import Card from '@/app/UI/Dashboard/Card/Card'
import Chart from '@/app/UI/Dashboard/Chart/Chart'
import RightBar from '@/app/UI/Dashboard/RightBar/RightBar'
import Transactions from '@/app/UI/Dashboard/Transactions/Transactions'
import styles from '@/app/UI/dashboard/dashboard.module.css'

export default function Home() {
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
