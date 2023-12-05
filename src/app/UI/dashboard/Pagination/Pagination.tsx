import React from 'react'
import styles from './Pagination.module.css'
const Pagination = () => {
	return (
		<div className={styles.container}>
			<button className={styles.button} disabled>
				Previous
			</button>
			<button className={styles.button}>Next</button>
		</div>
	)
}

export default Pagination
