import React from 'react'
import styles from './Search.module.css'
import { MdSearch } from 'react-icons/md'
type SearchProps = {
	placeholder: string
}
const Search = ({ placeholder }: SearchProps) => {
	return (
		<div className={styles.container}>
			<MdSearch />
			<input type='text' placeholder={placeholder} className={styles.input} />
		</div>
	)
}

export default Search
