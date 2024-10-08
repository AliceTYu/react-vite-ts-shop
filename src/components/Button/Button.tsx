import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({children, onClick, className, appearance = 'small'}: ButtonProps) {
	// const cn = styles['button'] + ' ' + styles['accent'] + ' ' + className + ' ' + {
	// 	[styles['small']]: appearance === 'small',
	// 	[styles['big']]: appearance === 'big'
	// }; 
	return (
		<button onClick={onClick} className={cn(styles['button'], className, styles['accent'], {
			[styles['small']]: appearance === 'small',
			[styles['big']]: appearance === 'big'
		})}>
			{children}
		</button>
	);
}

export default Button;