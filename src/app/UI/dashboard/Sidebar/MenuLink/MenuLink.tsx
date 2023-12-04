'use client'

import Link from 'next/link'
import React, { ReactElement } from 'react'
import styles from './MenuLink.module.css'
import { usePathname } from 'next/navigation'

type MenuLinkProps = {
	title: string
	icon: ReactElement
	path: string
}

const MenuLink = ({ icon, title, path }: MenuLinkProps) => {
	const pathname = usePathname()
	return (
		<Link
			href={path}
			className={`${styles.container} ${pathname === path && styles.active}`}
		>
			{icon}
			{title}
		</Link>
	)
}

export default MenuLink
