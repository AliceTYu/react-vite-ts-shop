import { Await, useLoaderData } from 'react-router-dom';
import styles from './Product.module.css';
import { ProductInt } from '../../interfaces/products.interface';
import { Suspense } from 'react';

function Product() {
	const data = useLoaderData() as { data: ProductInt };
	
	return (
		<div className={styles.product}>
			<Suspense fallback={'Загрузка...'}>
				<Await resolve={data.data} >
					{({ data }: { data: ProductInt }) => (
						<>Product - {data.name}</>
					)}
				</Await>
			</Suspense>
		</div>
	);
}

export default Product;