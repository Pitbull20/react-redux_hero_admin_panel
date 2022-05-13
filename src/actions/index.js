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

export const addHero = (heroName, heroDescription, heroElement) => {
	return {
		type: 'ADD_HERO',
		payload: {
			heroName,
			heroDescription,
			heroElement,
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
