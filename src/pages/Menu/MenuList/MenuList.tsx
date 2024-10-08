import ProductCart from '../../../components/ProductCart/ProductCart';
import { MenuListProps } from './MenuList.props';

function MenuList({products}:MenuListProps) {
	return products.map(el => (
		<ProductCart
			key={el.id}
			id={el.id}
			name={el.name}
			description={el.ingredients.join(', ')}
			price={el.price}
			rating={el.rating}
			image={el.image}
		/>
	));
}

export default MenuList;