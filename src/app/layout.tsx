import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './UI/globals.css'
import styles from '@/app/UI/dashboard/dashboard.module.css'
import { ReactNode } from 'react'
import Footer from './UI/Dashboard/Footer/Footer'
import Navbar from './UI/Dashboard/Navbar/Navbar'
import Sidebar from './UI/Dashboard/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next.js Admin Dashboard',
	description: 'Next.js 14 Admin Dashboard',
}

type layoutProps = {
	children: ReactNode
}
export default function RootLayout({ children }: layoutProps) {
	return (
		<html lang='en'>
			<UserProvider>
				<body className={inter.className}>
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
				</body>
			</UserProvider>
		</html>
	)
}
