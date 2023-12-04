import React, { ReactNode } from 'react'

import styles from '@/app/UI/dashboard/dashboard.module.css'
import Navbar from '@/app/UI/dashboard/Navbar/Navbar'
import Sidebar from '@/app/UI/dashboard/Sidebar/Sidebar'

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
			</div>
		</div>
	)
}

export default layout
