import Sidebar from '../Sidebar/Sidebar.jsx';
import Products from '../products/Products.jsx';

import './Homepage.css'

// taking the 'handleChange' props from App and passing down to the Sidebar component.
const HomePage = ({ handleChange, handleClick, result }) => {
	// console.log(handleChange);
	return (
		<>
			<div className='main-home-page'>
				<Sidebar handleChange={handleChange} />
				<Products result={result} handleClick={handleClick} />
			</div>
		</>
	)
}

export default HomePage