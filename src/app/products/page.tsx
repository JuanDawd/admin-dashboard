import Pagination from '@/app/UI/Dashboard/Pagination/Pagination'
import styles from '@/app/UI/Dashboard/Products/Products.module.css'
import Search from '@/app/UI/Dashboard/Search/Search'
import { deleteProduct } from '@/app/lib/actions'
import { fetchProducts } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'

const Products = async ({ searchParams }: any) => {
	const q = searchParams?.q || ''
	const page = searchParams?.page || '1'
	const { products, count } = await fetchProducts(q, page)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Search for a product...' />
				<Link href='/products/add'>
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
					{products.map((product) => (
						<tr key={product._id}>
							<td>
								<div className={styles.product}>
									<Image
										src={product.img || '/noProduct.jpg'}
										alt={product.title}
										width={40}
										height={40}
										className={styles.productImage}
									/>
									{product.title}
								</div>
							</td>
							<td>{product.desc}</td>
							<td>${product.price}</td>
							<td>{product.createdAt?.toString().slice(4, 16)}</td>
							<td>{product.stock}</td>

							<td>
								<div className={styles.buttons}>
									<Link href={`/dashboard/products/${product._id}`}>
										<button className={`${styles.button} ${styles.view}`}>
											View
										</button>
									</Link>
									<form action={deleteProduct}>
										<input type='hidden' name='_id' value={`${product._id}`} />
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

export default Products
