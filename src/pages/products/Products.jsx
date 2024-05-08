// import { useEffect, useState } from 'react';  
import './Products.css';
import Card from '../../components/Card.jsx';
import Recommended from '../Recommended/Recommended';

// accepting the prop from home 
const Products = ({ handleClick, result }) => {
	// console.log(handleClick);
	/*
	// This is for Api call to fetch the products data;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchProducts = async (getUrl) => {
		try {
			setLoading(true);
			const response = await fetch(getUrl);
			const productsData = await response.json(); // Await the JSON data

			if (productsData && productsData.products.length > 0) {
				setProducts(productsData.products);
				setLoading(false);
			} else {
				setLoading(false); // Move setLoading(false) outside the conditional
				setError('No data found');
			}
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts(url);
	}, [url]);
*/

	return (
		<div className='products-page'>
			<Recommended handleClick={handleClick} />
			<Card result={result} />
		</div>
	)
}

export default Products;