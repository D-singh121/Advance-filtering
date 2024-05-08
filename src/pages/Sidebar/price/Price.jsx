import './Price.css'
import InputRadioBtn from '../../../components/InputLabel'



const Price = ({ handleChange }) => {
	// console.log(handleChange);
	return (
		<div className='common-sidebar-div'>
			<h3 className='price-title'>Price</h3>

			<div className='common-labels'>
				<InputRadioBtn
					label='All'
					type='radio'
					name='test2'
					userClassName='labels'
					userSpanClassName='checkmark'
					handleChange={handleChange}
					value=''
				/>

				<InputRadioBtn
					label='$0-50'
					type='radio'
					name='test2'
					userClassName='labels'
					userSpanClassName='checkmark'
					handleChange={handleChange}
					value={50}
				/>

				<InputRadioBtn
					label='$50-$100'
					type='radio'
					name='test2'
					userClassName='labels'
					userSpanClassName='checkmark'
					handleChange={handleChange}
					value={100}
				/>
				<InputRadioBtn
					label='$100-$150'
					type='radio'
					name='test2'
					userClassName='labels'
					userSpanClassName='checkmark'
					handleChange={handleChange}
					value={150}
				/>

				<InputRadioBtn
					label='Over $150'
					type='radio'
					name='test2'
					userClassName='labels'
					userSpanClassName='checkmark'
					handleChange={handleChange}
					value={200}
				/>

			</div>
		</div>
	)
}

export default Price