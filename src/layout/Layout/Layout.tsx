import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

function Layout() {
	const location = useLocation();
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('jwt');
		navigate('/react-vite-ts-shop/auth/login');
	};

	return (
		<div className={styles.layout}>
			<div className={styles.layoutMenu}>
				<div className={styles.layoutInfo}>
					<div className={styles.layoutImg}>
						<img src="./img.jpg" alt="" />
					</div>
					<div className={styles.layoutName}>
						Имя Фамилия
					</div>
					<div className={styles.layoutEmail}>
						vjbireayvb@yayay.ru
					</div>
				</div>

				<div className={styles.layoutLinks}>
					<div className={styles.layoutItem}>
						<img src="./menu.svg" alt="" />
						<Link className={cn(styles['layoutLink'], {
							[styles.active]: location.pathname === '/react-vite-ts-shop/'
						})} to="/react-vite-ts-shop/">Меню</Link>
					</div>
					<div className={styles.layoutItem}>
						<img src="./cart.svg" alt="" />
						<Link className={cn(styles['layoutLink'], {
							[styles.active]: location.pathname === '/react-vite-ts-shop/cart'
						})} to="/react-vite-ts-shop/cart">Корзина</Link>
						<div className={styles.activeLink}>
							1
						</div>
					</div>
				</div>

				<div>
					<Button onClick={logout}>
						<img src="./out.svg" alt="выйти лого" />
						Выйти
					</Button>
				</div>
			</div>
			<div className={styles.layoutBody}>
				<Outlet/>
			</div>
		</div>
	);
}

export default Layout;