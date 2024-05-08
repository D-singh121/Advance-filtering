import Colors from "./colors/Colors"
import Category from './category/Category';
import Price from './price/Price'

import './Sidebar.css'

// accepting the handlechange prop from HomePage
const Sidebar = ({ handleChange }) => {
	// console.log(handleChange);
	return (
		<>
			<div className="sidebar">
				<Category handleChange={handleChange} />
				<Price handleChange={handleChange} />
				<Colors handleChange={handleChange} />
			</div>

		</>
	)
}

export default Sidebar