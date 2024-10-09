import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    }
}

function Login() {
	const [error, setError] = useState<string | null>();
	const navigate = useNavigate();

	const authSubmit = async (e: FormEvent) => {
		e.preventDefault(); 
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const {email,password} = target;
		console.log(email.value, password.value);
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
			localStorage.setItem('jwt', data.access_token);
			navigate('/react-vite-ts-shop/');
		} catch (e) {
			if (e instanceof AxiosError){
				setError(e.response?.data.message);
			}
		}
	};

	return (
		<div className={styles.login}>
			<Heading>Вход</Heading>
			{error && <div className={styles.error}>
				{error}
			</div>}
			<form className={styles.form} onSubmit={authSubmit}>
				<div className={styles.blockInput}>
					<label htmlFor='email' className={styles.lable}>Ваш Email</label>
					<Input id='email' name='email' placeholder='Email'></Input>
				</div>
				<div className={styles.blockInput}>
					<label htmlFor='pass' className={styles.lable}>Ваш пароль</label>
					<Input id='pass' name='password' type='password' placeholder='Пароль'></Input>
				</div>

				<Button appearance='big'>Вход</Button>
			</form>

			<div className={styles.blockReg}>
				<p className={styles.text}>Нет аккаунта?</p>
				<Link className={styles.link} to="/react-vite-ts-shop/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
}

export default Login;