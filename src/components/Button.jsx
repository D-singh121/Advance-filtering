
const Button = ({
	title,
	userClassName = '',
	value,
	handleClick,
	...props
}) => {
	return (
		<button className={`${userClassName}`} value={value} {...props} onClick={handleClick} >
			{title}
		</button>
	);
};

export default Button;