// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../actions';

const HeroesFilters = () => {
	const dispatch = useDispatch();
	const getFilterData = e => {
		const data = e.currentTarget.getAttribute('data-value');
		dispatch(setFilters(data));
	};
	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>
					<button
						className={`btn btn-outline-dark active`}
						data-value='all'
						onClick={e => getFilterData(e)}
					>
						Все
					</button>
					<button
						className={`btn btn-danger`}
						data-value='fire'
						onClick={e => getFilterData(e)}
					>
						Огонь
					</button>
					<button
						className={`btn btn-primary`}
						data-value='water'
						onClick={e => getFilterData(e)}
					>
						Вода
					</button>
					<button
						className={`btn btn-success`}
						data-value='wind'
						onClick={e => getFilterData(e)}
					>
						Ветер
					</button>
					<button
						className={`btn btn-secondary`}
						data-value='earth'
						onClick={e => getFilterData(e)}
					>
						Земля
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
