import React, { ReactNode } from 'react'

import styles from '@/app/UI/dashboard/dashboard.module.css'
import Navbar from '@/app/UI/Dashboard/Navbar/Navbar'
import Sidebar from '@/app/UI/Dashboard/Sidebar/Sidebar'
import Footer from '../UI/Dashboard/Footer/Footer'

type layoutProps = {
	children: ReactNode
}

const layout = ({ children }: layoutProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<Sidebar />
			</div>
			<div className={styles.content}>
				<Navbar />
				{children}

				<Footer />
			</div>
		</div>
	)
}

export default layout
