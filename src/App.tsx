import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	const [counter, setCounter] = useState<number>(0);

	return (
		<>
			<Input placeholder='Введите логин...'/>
			<Input placeholder='Введите пароль...'/>
			<Button onClick={() => setCounter(counter + 1)}>
        Кнопка
			</Button>
			<Button appearance='big'>
        Кнопка big
			</Button>
		</>
	);
}

export default App;
