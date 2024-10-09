import styles from './Heading.module.css';
import { HeadingProps } from './Heading.props';
import { Tooltip } from 'react-tooltip';

function Heading({children}: HeadingProps) {
	return (
		<div className={styles.title}>
			{children}
			<div id="loginInfo">!</div>
			<Tooltip anchorSelect="#loginInfo" clickable>
				<p>a@gmail.com</p>
				<p>123</p>
			</Tooltip>
		</div>
	);
}

export default Heading;