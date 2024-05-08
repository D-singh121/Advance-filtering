import './Recommended.css';
import Button from '../../components/Button';

// accepting handleClick as props
const Recommended = ({ handleClick }) => {
	return (
		<section className='recommand-section'>
			<h3>Recommended</h3>

			<div className='btn-group'>
				<Button
					title='All Product'
					userClassName='btns'
					value=''
					handleClick={handleClick}

				/>
				<Button
					title='Nike'
					userClassName='btns'
					value='Nike'
					handleClick={handleClick}
				/>
				<Button
					title='Adidas'
					userClassName='btns'
					value='Adidas'
					handleClick={handleClick}
				/>
				<Button
					title='Puma'
					userClassName='btns'
					value='Puma'
					handleClick={handleClick}
				/>
				<Button
					title='Vans'
					userClassName='btns'
					value='Vans'
					handleClick={handleClick}
				/>
			</div>

		</section>
	)

}

export default Recommended