import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './UI/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next.js Admin Dashboard',
	description: 'Next.js 14 Admin Dashboard',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<UserProvider>
				<body className={inter.className}>{children}</body>
			</UserProvider>
		</html>
	)
}
