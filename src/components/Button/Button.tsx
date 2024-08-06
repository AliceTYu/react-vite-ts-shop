import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({children, onClick, className}: ButtonProps) {
	const cn = styles['button'] + (className ? ' ' + className : ''); 
	return (
		<button onClick={onClick} className={cn}>
			{children}
		</button>
	);
}

export default Button;