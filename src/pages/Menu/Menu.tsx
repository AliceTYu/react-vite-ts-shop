import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { PREFIX } from '../../helpers/API';
import { ProductInt } from '../../interfaces/products.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import MenuList from './MenuList/MenuList';

function Menu() {
	const [products, setProducts] = useState<ProductInt[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	//fetch and axios
	const getMenu = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<ProductInt[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError){
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}

		/*try{
			const res = await fetch(`${PREFIX}/products`);
			if (!res.ok){
				return;
			}
			const data = await res.json() as Product[];
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}*/
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<div className={styles.menu}>
			<Header/>
			<div className={styles.blockCard}>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={products}/>}
				{isLoading && <>Загрузка...</>}
			</div>
		</div>
	);
}

export default Menu;