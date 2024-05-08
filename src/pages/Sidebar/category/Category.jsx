import './Category.css'
import InputRadioBtn from '../../../components/InputLabel'

// accepting the handleChange Prop from parent component.
const Category = ({ handleChange }) => {
  return (
    <div className='common-sidebar-div'>
      <h3 className='category-title'>Category</h3>

      <div className='common-labels' >

        <InputRadioBtn
          label='All'
          type='radio'
          name='test'
          userClassName='labels'
          userSpanClassName='checkmark'
          value=''
          handleChange={handleChange}
        />

        <InputRadioBtn
          label='Sneakers'
          type='radio'
          name='test'
          userClassName='labels'
          userSpanClassName='checkmark'
          handleChange={handleChange}
          value='sneakers'
        />
        <InputRadioBtn
          label='Falts'
          type='radio'
          name='test'
          userClassName='labels'
          userSpanClassName='checkmark'
          handleChange={handleChange}
          value='flats'

        />
        <InputRadioBtn
          label='Sandals'
          type='radio'
          name='test'
          userClassName='labels'
          userSpanClassName='checkmark'
          handleChange={handleChange}
          value='sandals'
        />
        <InputRadioBtn
          label='Heels'
          type='radio'
          name='test'
          userClassName='labels'
          userSpanClassName='checkmark'
          handleChange={handleChange}
          value='heels'
        />

      </div>
    </div>
  )
}

export default Category