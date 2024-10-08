import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import styles from './ProductCart.module.css';
import { ProductCartProps } from './ProductCart.props';

function ProductCart(props: ProductCartProps) {
	return (
		<Link to={`/react-vite-ts-shop/product/${props.id}`} className={styles.link}>
			<button className={styles.productCart}>
				<div className={styles['productCart-head']} style={{backgroundImage: `url('${props.image}')`}}>
					<Item className={styles.price} filter='rub'>{props.price}</Item>
					<button className={styles['add-to-cart']}>
						<img src="./addcart.svg" alt="Добавить в корзину" />
					</button>
					<Item className={styles.rating} filter='star'>{props.rating}</Item>
				</div>
			
				<div className={styles['productCart-body']}>
					<div className={styles['productCart-title']}>{props.name}</div>
					<div className={styles['productCart-text']}>{props.description}</div>
				</div>
			</button>
		</Link>
	);
}

export default ProductCart;