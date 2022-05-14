export const heroesFetching = () => {
	return {
		type: 'HEROES_FETCHING',
	};
};

export const heroesFetched = heroes => {
	return {
		type: 'HEROES_FETCHED',
		payload: heroes,
	};
};

export const heroesFetchingError = () => {
	return {
		type: 'HEROES_FETCHING_ERROR',
	};
};

export const deleteHero = id => {
	return {
		type: 'HERO_DELETE',
		payload: {
			id: id,
		},
	};
};

export const addHero = (heroName, heroDescription, heroElement, heroId) => {
	return {
		type: 'ADD_HERO',
		payload: {
			heroName,
			heroDescription,
			heroElement,
			heroId,
		},
	};
};

export const filtersFetched = filtersArr => {
	return {
		type: 'FILTERS_FETCHED',
		payload: {
			filtersArr: filtersArr,
		},
	};
};

export const setFilters = data => {
	return {
		type: 'SET_FILTERS',
		payload: {
			filterStatus: data,
		},
	};
};
