
/*
const Input = ({ type, value, name, title, userClassname }) => {
	return (
		<label>
			<input type={type} value={value} name={name} />
			<span className={userClassname} ></span>
			{title}
		</label>
	)
}
*/
import '../index.css'

// accepting handleChange from parent component.
const InputRadioBtn = ({ label, type, name, userClassName, userSpanClassName, handleChange, value, ...props }) => {
	// console.log(handleChange);
	return (
		<label className={`labels ${userClassName} `}>
			<input onChange={handleChange} type={type} name={name} value={value} />
			<span className={`chekmark, ${userSpanClassName}`} {...props}></span>
			{label}
		</label>
	);
};
export default InputRadioBtn;