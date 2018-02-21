export const SearchService = (text) => {
	const uri = 'https://swapi.co/api/planets/?search=' + text;
	return fetch(uri)
			.then(res => res.json());
}

export const UserService = () => {
	const uri = 'https://swapi.co/api/people';
	return fetch(uri)
			.then(res => res.json());
}