import { BsInfoCircle } from '@react-icons/all-files/bs/BsInfoCircle'
import 'w3-css';

const styles = {
	icon: {
		marginTop: '-1em',
		borderRadius: '25px',
		color: '#39f'
	},
	dark: {
		background: '#262635'
	},
	light: {
		background: '#fff'
	},
	p:{
		marginTop: '-.5em'
	},
	div:{
		borderTop:'1.5px solid #39f'
	}
};
export default function Infos(props) {
	let { isDark, children, content, className, ...attr} = props;
	className = className ? className : '';
	
	return(
		<div data-aos="fade-up" style={ styles.div } className={ `w3-round w3-panel w3-center ${ isDark ? 'private-infos' : 'w3-light-gray'} ${ className }` } {...attr}>
			<BsInfoCircle
				fontSize="2em"
				style={ {...styles.icon, ...(isDark ? styles.dark : styles.light) } }
			/>
			<p style={ styles.p }>{children ? children : content}</p>
		</div>
		);
}