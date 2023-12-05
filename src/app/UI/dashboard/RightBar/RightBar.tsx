import React from 'react'
import styles from './RightBar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
const RightBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.bgContainer}>
					<Image
						src='/astronaut.png'
						className={styles.bg}
						alt='astronaut'
						fill
					/>
				</div>
				<div className={styles.text}>
					<span className={styles.notification}>Available now</span>
					<h3 className={styles.title}>
						how to use the new version of the admin dashboard
					</h3>
					<span className={styles.subtitle}>takes 4 minutes to learn</span>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						blandit enim. Sed blandit erat.
					</p>
					<button className={styles.button}>
						<MdPlayCircleFilled />
						Watch
					</button>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.text}>
					<span className={styles.notification}>Available now</span>
					<h3 className={styles.title}>
						how to use the new version of the admin dashboard
					</h3>
					<span className={styles.subtitle}>takes 4 minutes to learn</span>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						blandit enim. Sed blandit erat.
					</p>
					<button className={styles.button}>
						<MdReadMore />
						Learn
					</button>
				</div>
			</div>
		</div>
	)
}

export default RightBar
