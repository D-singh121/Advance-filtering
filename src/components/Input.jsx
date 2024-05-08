
const Input = ({ handleInputChange, type, placeholder, name, value, userClassName, ...props }) => {
	return (
		<div>
			<input
				className={`${userClassName} `}
				placeholder={placeholder}
				type={type}
				name={name}
				// value={value}
				onChange={handleInputChange}
				{...props}
			/>
		</div>
	)
}

export default Input;