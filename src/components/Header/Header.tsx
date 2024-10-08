import Input from '../Input/Input';
import Title from '../Title/Title';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<Title>Меню</Title>
			<div className={styles.headerInput}>
				<img className={styles.headerImg} src="./search.svg" alt="search" />
				<Input className={styles.headerInp} placeholder='Введите блюдо или состав'/>
			</div>
		</div>
	);
}

export default Header;