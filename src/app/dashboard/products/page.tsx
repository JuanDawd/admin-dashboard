import Pagination from '@/app/UI/Dashboard/Pagination/Pagination'
import styles from '@/app/UI/Dashboard/Products/Products.module.css'
import Search from '@/app/UI/Dashboard/Search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Products = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Search for a product...' />
				<Link href='/dashboard/products/add'>
					<button className={styles.addButton}>Add New</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Title</td>
						<td>Description</td>
						<td>Price</td>
						<td>Created At</td>
						<td>Stock</td>
						<td>Action</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<div className={styles.product}>
								<Image
									src='/noProduct.jpg'
									alt='IPhone'
									width={40}
									height={40}
									className={styles.productImage}
								/>
								IPhone
							</div>
						</td>
						<td>Desc</td>
						<td>$999</td>
						<td>20</td>
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

export default Products
