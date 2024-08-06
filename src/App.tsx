import { useState } from 'react';
import Button from './components/Button/Button';

function App() {
	const [counter, setCounter] = useState<number>(0);

	return (
		<>
			<Button onClick={() => setCounter(counter + 1)} className={styles['accent']}>
        Кнопка
			</Button>
			<Button >
        Кнопка большая
			</Button>
			{counter}
		</>
	);
}

export default App;
