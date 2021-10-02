import { BsCircleHalf } from '@react-icons/all-files/bs/BsCircleHalf';
import { BsQuestionCircle } from '@react-icons/all-files/bs/BsQuestionCircle'
import { BsBook} from '@react-icons/all-files/bs/BsBook';
import { BsHouseDoor } from '@react-icons/all-files/bs/BsHouseDoor';
import { Visible } from 'react-grid-system';

const styles = {
   darkNav:  {
      position: 'sticky', 
      top:0,
      backgroundImage: 'linear-gradient(#20202c 90%, transparent 100%)',
  	   zIndex:10,
  	   width:'100vw',
  	   padding:'5vw',
  	   color:'#eee',
  	   marginBottom:'2vw'
   },
   lightNav:   {
      position:'sticky', 
      top:0,
      backgroundImage: 'linear-gradient(#eee 90%, transparent 100%)',
  	   zIndex:10,
  	   width:'100vw',
  	   padding:'5vw',
  	   color:'#111',
  	   marginBottom:'2vw'
   },
   input:{
      height:'1.5em',
      marginTop:'1.5vw'
   },
   title: {
      color: '#dc3e5d',
      fontSize:'1.5em',
   }
};

function NavMain(props) {
   const { dark, option, search } = props;
   const { darkNav, title, lightNav, input } = styles;
   const handlerInputChange = (e)=> {
  	if(search) search(e.target.value.trim())
  }
   return(
      <Visible md>
         <div className="w3-bar w3-row w3-center" style={ dark ? darkNav : lightNav }>
     		   <div style={ title } className="w3-bar-item w3-col s2">Dichotomie</div>
     		   <props.link to="/home" className={ `${ option === 'home' ? 'w3-border-bottom w3-border-blue' : '' } w3-small w3-bar-item w3-btn w3-col s2` }>
        		   <BsHouseDoor className="w3-radio"/><span className="w3-label w3-margin-left">home</span>
        		</props.link>
     			<props.link to="/theme" className={`${ option === 'theme' ? 'w3-border-bottom w3-border-blue' : ''} w3-small w3-bar-item w3-btn w3-col s2`}>
        			<BsCircleHalf className="w3-radio"/> <span className="w3-label w3-margin-left">Thème</span>
     			</props.link>
   			<props.link to="/note" className={ `${ option === 'note' ? 'w3-border-bottom w3-border-blue' : '' } w3-small w3-bar-item w3-btn w3-col s2` }>
        			<BsBook className="w3-radio"/> <span className="w3-label w3-margin-left">Exercice</span>
     			</props.link>
   			<props.link to="/about" className={ `${ option === 'about' ? 'w3-border-bottom w3-border-blue' : '' } w3-small w3-bar-item w3-btn w3-col s2` }>
        			<BsQuestionCircle className="w3-radio"/> <span className="w3-label w3-margin-left">À-propos</span>
   			</props.link>
        		<div className="w3-col s2">
           		<input
           		   style={ input }
         			placeholder="recherche"
         			className="w3-input w3-margin-left"
         			onChange={ handlerInputChange }
         		/>
        		</div>
		 </div>
      </Visible>
      );
}

export default NavMain;