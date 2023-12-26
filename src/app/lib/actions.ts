'use server'

import bcrypt from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Product, User } from './models'
import {
	ProductFormType,
	ProductType,
	ProductUpdateType,
	UserFormType,
	UserType,
	UserUpdateType,
} from './types'
import { connectToDB } from './utils'
import { fetchUser } from './data'

export const addUser = async (formData: FormData) => {
	const { username, email, password, phone, address, isAdmin, isActive } =
		extractUserValues(formData)

	try {
		connectToDB()

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			phone: verifyNumber(phone),
			address,
			isAdmin,
			isActive,
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

	const { username, email, password, phone, address, isAdmin, isActive } =
		extractUserValues(formData)

	const { user } = await fetchUser(id)

	try {
		connectToDB()

		const updateFields: UserUpdateType = {
			username,
			email,
			password,
			phone,
			address,
			isAdmin,
			isActive,
		}

		Object.keys(updateFields).forEach((key) => {
			if (key === 'isAdmin' && updateFields['isAdmin'] === user.isAdmin)
				delete updateFields['isAdmin']

			if (key === 'isActive' && updateFields['isActive'] === user.isActive)
				delete updateFields['isActive']

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
		password = formData.get('password')?.toString() || '',
		phone = formData.get('phone')?.toString(),
		address = formData.get('address')?.toString() || '',
		isAdmin = verifyBoolean(formData.get('isAdmin')?.toString()),
		isActive = verifyBoolean(formData.get('isActive')?.toString())

	return {
		username,
		email,
		password,
		phone,
		address,
		isAdmin,
		isActive,
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
const verifyBoolean = (value: string | undefined): boolean => {
	console.log(value)
	if (value !== undefined) {
		return JSON.parse(value)
	}
	return false
}
const verifyNumber = (value: number | string | undefined): number => {
	if (typeof value === 'number') return value
	if (value !== undefined) {
		return +value
	}
	return 0
}
