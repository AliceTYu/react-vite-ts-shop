import styles from './Title.module.css';
import { TitleProps } from './Title.props';

function Title({ children }: TitleProps) {
	return (
		<div className={styles.title}>
			{children}
		</div>
	);
}

export default Title;