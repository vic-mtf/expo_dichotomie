import { IsDark } from './ThemeDetector';
import '../styles/Theme.css';

export default function SetTheme(props) {
	const dark = IsDark(props);
	const classBody = document.body.classList
   classBody.remove('dark-theme_');
   classBody.remove('light-theme_');
   classBody.add(dark ? 'dark-theme_' : 'light-theme_');
   document.head.querySelector('meta[name="theme-color"]').content = dark ? '#20202c' : '#eee';
	//import('../styles/dark-theme.css') : import('../styles/light-theme.css');									
  return dark;
}