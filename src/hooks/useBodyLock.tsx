import {useEffect} from 'react';

const useBodyLock = () => {
	useEffect(() => {
		const {body} = document;
		body.className = '';
	}, []);

	const toggleBodyLock = () => {
		const {body} = document;

		body.classList.toggle('burgerMenuOpen');
	};

	return toggleBodyLock;
};

export default useBodyLock;
