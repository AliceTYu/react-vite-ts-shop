import Title from '../../components/Title/Title';
import styles from './Cart.module.css';

function Cart() {
	return (
		<div className={styles.cart}>
			<Title>Корзина</Title>
		</div>
	);
}

export default Cart;