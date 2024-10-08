import styles from './Item.module.css';
import { ItemProps } from './Item.props';
import cn from 'classnames';

function Item({ children, filter, className }: ItemProps) {
	return (
		<div className={cn(styles.item, className)}>
			{children} {filter === 'rub' ? <span>₽</span> : <img src='./star.svg' alt='лого звезд'/>}
		</div>
	);
}

export default Item;