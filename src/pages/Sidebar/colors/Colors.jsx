import './Colors.css';
import InputRadioBtn from '../../../components/InputLabel';

// accepting handleChange as props from Sidebar component
const Colors = ({ handleChange }) => {
  // console.log(handleChange);
  return (
    <div className='common-sidebar-div'>
      <h3 className='color-title'>Colors</h3>

      <div className='common-labels'>
        <InputRadioBtn
          label='All'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark '
          style={{ border: "2px solid gray", background: "linear-gradient(blue, crimson)" }}
          handleChange={handleChange}
          value=''
        />

        <InputRadioBtn
          label='Black'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark'
          style={{ background: 'black', border: "1px solid #efeae3" }}
          handleChange={handleChange}
          value='black'
        />
        <InputRadioBtn
          label='Red'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark'
          style={{ background: 'red', border: "2px solid gray" }}
          handleChange={handleChange}
          value='red'
        />
        <InputRadioBtn
          label='Blue'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark'
          style={{ background: 'blue', border: "2px solid gray" }}
          handleChange={handleChange}
          value='blue'
        />
        <InputRadioBtn
          label='Green'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark'
          style={{ background: 'green', border: "2px solid gray" }}
          handleChange={handleChange}
          value='green'
        />
        <InputRadioBtn
          label='White'
          type='radio'
          name='test3'
          userClassName='labels'
          userSpanClassName='checkmark'
          style={{ background: 'white', border: "2px solid gray" }}
          handleChange={handleChange}
          value='white'
        />
      </div>
    </div>

  )
}

export default Colors