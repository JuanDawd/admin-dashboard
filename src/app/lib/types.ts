export type UserType = {
	_id: string
	username: string
	email: string
	password: string
	img: string
	isAdmin: boolean
	isActive: boolean
	phone: string
	address: string
	createdAt: Date
}

export type UserFormType = {
	username: string
	email: string
	password: string
	phone: number | string | undefined
	address: string
	isAdmin: boolean
	isActive: boolean

	[key: string]: string | number | boolean | undefined
}

export type UserUpdateType = {
	username?: string
	email?: string
	password?: string
	phone?: number | string | undefined
	address?: string
	isAdmin?: boolean
	isActive?: boolean

	[key: string]: string | number | boolean | undefined
}

export type ProductType = {
	_id: string
	title: string
	desc: string
	price: number
	stock: number
	img: string
	color: string
	size: string
	createdAt: Date
}
export type ProductFormType = {
	title: string
	desc: string
	price: number
	stock: number
	color: string
	size: string
}

export type ProductUpdateType = {
	title?: string
	desc?: string
	price?: number
	stock?: number
	color?: string
	size?: string
	[key: string]: string | number | undefined
}
