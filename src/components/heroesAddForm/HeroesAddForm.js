import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersFetched, addHero } from '../../actions';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
	const { filters, heroes } = useSelector(state => state);
	const dispatch = useDispatch();
	const { request } = useHttp();
	const [heroName, setHeroName] = useState('');
	const [heroDescription, setHeroDescription] = useState('');
	const [heroElement, setHeroElement] = useState('');

	const addHeroToGlobalState = e => {
		e.preventDefault();
		if (heroName && heroDescription && heroElement) {
			dispatch(addHero(heroName, heroDescription, heroElement));
			request(
				'http://localhost:3001/heroes',
				'POST',
				JSON.stringify(heroes[heroes.length - 1])
			);
		}
	};

	useEffect(() => {
		request('http://localhost:3001/filters').then(data =>
			dispatch(filtersFetched(data))
		);
	}, []);

	return (
		<form className='border p-4 shadow-lg rounded'>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label fs-4'>
					Имя нового героя
				</label>
				<input
					required
					type='text'
					name='name'
					className='form-control'
					id='name'
					onChange={e => setHeroName(e.currentTarget.value)}
					placeholder='Как меня зовут?'
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='text' className='form-label fs-4'>
					Описание
				</label>
				<textarea
					required
					name='text'
					className='form-control'
					id='text'
					onChange={e => setHeroDescription(e.currentTarget.value)}
					placeholder='Что я умею?'
					style={{ height: '130px' }}
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='element' className='form-label'>
					Выбрать элемент героя
				</label>
				<select
					required
					className='form-select'
					id='element'
					name='element'
					onChange={e => setHeroElement(e.currentTarget.value)}
				>
					<option>Я владею элементом...</option>
					{filters.map((item, i) => (
						<option value={item} key={i}>
							{item}
						</option>
					))}
				</select>
			</div>

			<button
				type='submit'
				className='btn btn-primary'
				onClick={e => addHeroToGlobalState(e)}
			>
				Создать
			</button>
		</form>
	);
};

export default HeroesAddForm;
