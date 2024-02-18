import React from 'react'
import '../../index.css'

const SearchBar = () => {
	return <input type="text" id="product-search" name="product-search" placeholder='SEARCH PRODUCTS' className="product-search text-black border-solid border-2"></input>
}

export default function Header () {
	return (
		<div className='header flex px-8 py-5'>
			<h1 className='eshop-logo pr-16'>E S H O P</h1>
			<SearchBar></SearchBar>
			<div className='flex ml-16 space-x-7'>
				<h1 className='eshop-logo'>WISHLIST</h1>
				<h1 className='eshop-logo'>ACCOUNT</h1>
				<h1 className='eshop-logo'>SHOPPING CART</h1>
			</div>
		</div>
	)
}

{/* <div className='header flex justify-between mt-4 px-8'>
<h1 className='ml-16 mt-2 mr-16'>E S H O P</h1>
<SearchBar/>
<div className='flex space-x-16'>
    <h1 className='mt-2'>WISHLIST</h1>
    <h1 className='mt-2'>ACCOUNT</h1>
    <h1 className='mt-2'>SHOPPING CART</h1>
</div>
</div>) */}