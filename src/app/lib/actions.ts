'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Product, User } from './models'
import {
	ProductFormType,
	ProductUpdateType,
	UserFormType,
	UserUpdateType,
} from './types'
import { connectToDB } from './utils'
import { fetchUser } from './data'

export const addUser = async (formData: FormData) => {
	const { username, email, phone, address } = extractUserValues(formData)

	try {
		connectToDB()

		const newUser = new User({
			username,
			email,
			phone: verifyNumber(phone),
			address,
		})

		await newUser.save()
	} catch (err) {
		console.log(err)
		throw new Error('Failed to create user!')
	}

	revalidatePath('/dashboard/users')
	redirect('/dashboard/users')
}

export const updateUser = async (formData: FormData) => {
	const id = formData.get('_id')?.toString() || ''

	const { username, email, phone, address } = extractUserValues(formData)

	const { user } = await fetchUser(id)

	try {
		connectToDB()

		const updateFields: UserUpdateType = {
			username,
			email,
			phone,
			address,
		}

		Object.keys(updateFields).forEach((key) => {
			updateFields[key] === '' && delete updateFields[key]
		})
		if (Object.keys(updateFields).length > 0)
			await User.findByIdAndUpdate(id, updateFields)
	} catch (err) {
		console.log(err)
		throw new Error('Failed to update user!')
	}

	revalidatePath('/dashboard/users')
	redirect('/dashboard/users')
}

export const addProduct = async (formData: FormData) => {
	const { title, desc, price, stock, color, size } =
		extractProductValues(formData)

	try {
		connectToDB()

		const newProduct = new Product({
			title,
			desc,
			price,
			stock,
			color,
			size,
		})

		await newProduct.save()
	} catch (err) {
		console.log(err)
		throw new Error('Failed to create product!')
	}

	revalidatePath('/dashboard/products')
	redirect('/dashboard/products')
}

export const updateProduct = async (formData: FormData) => {
	const id = formData.get('_id')?.toString() || ''

	const { title, desc, price, stock, color, size } =
		extractProductValues(formData)

	try {
		connectToDB()

		const updateFields: ProductUpdateType = {
			title,
			desc,
			price,
			stock,
			color,
			size,
		}

		Object.keys(updateFields).forEach((key) => {
			updateFields[key] === '' && delete updateFields[key]
		})

		await Product.findByIdAndUpdate(id, updateFields)
	} catch (err) {
		console.log(err)
		throw new Error('Failed to update product!')
	}

	revalidatePath('/dashboard/products')
	redirect('/dashboard/products')
}

export const deleteUser = async (formData: FormData) => {
	const id = formData.get('_id')?.toString()

	try {
		connectToDB()
		await User.findByIdAndDelete(id)
	} catch (err) {
		console.log(err)
		throw new Error('Failed to delete user!')
	}

	revalidatePath('/dashboard/products')
}

export const deleteProduct = async (formData: FormData) => {
	const id = formData.get('_id')?.toString()

	try {
		connectToDB()
		await Product.findByIdAndDelete(id)
	} catch (err) {
		console.log(err)
		throw new Error('Failed to delete product!')
	}

	revalidatePath('/dashboard/products')
}

// export const authenticate = async (
// 	prevState: any,
// 	formData: Iterable<readonly [PropertyKey, any]>,
// ) => {
// 	const { username, password } = Object.fromEntries(formData)

// 	try {
// 		await signIn('credentials', { username, password })
// 	} catch (err) {
// 		return 'Wrong Credentials!'
// 	}
// }
const extractUserValues = (formData: FormData): UserFormType => {
	const username = formData.get('username')?.toString() || '',
		email = formData.get('email')?.toString() || '',
		phone = formData.get('phone')?.toString(),
		address = formData.get('address')?.toString() || ''

	return {
		username,
		email,
		phone,
		address,
	}
}

const extractProductValues = (formData: FormData): ProductFormType => {
	const title = formData.get('title')?.toString() || ''
	const desc = formData.get('desc')?.toString() || ''
	const price = verifyNumber(formData.get('price')?.toString())
	const stock = verifyNumber(formData.get('stock')?.toString())
	const color = formData.get('color')?.toString() || ''
	const size = formData.get('size')?.toString() || ''

	return { title, desc, price, stock, color, size } as ProductFormType
}

const verifyNumber = (value: number | string | undefined): number => {
	if (typeof value === 'number') return value
	if (value !== undefined) {
		return +value
	}
	return 0
}
