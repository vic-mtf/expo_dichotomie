import { useState,  useEffect } from 'react';																					

function IsDark(choice) {
	const dark = window.matchMedia('(prefers-color-scheme: dark)');
	var [value, setValue] = useState(dark.matches);
	const handlerChange = (e)=> {
		setValue(e.matches);
	}
	useEffect(()=> {
		dark.addListener(handlerChange);
		return ()=> dark.removeListener(handlerChange);
	})
	return (choice === null ||  choice === undefined) ? value : choice;
}

function IsLight(choice) {
	const light = window.machMedia('(prefers-color-scheme: light)');
	var [value, setValue] = useState(light.matches);
	const handlerChange = (e)=> {
		setValue(e.matches);
	}
	useEffect(()=> {
		light.addListener(handlerChange);
		return ()=> light.removeListener(handlerChange);
	})
	return (choice === null ||  choice === undefined) ? value : choice;
}

export { IsDark, IsLight };