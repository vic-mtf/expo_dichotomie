import React from 'react';
import Chapter from '../components/Chapter';
import Cours from '../components/Cours';
import Mt from '../components/Math';																
import { BsExclamationTriangle } from '@react-icons/all-files/bs/BsExclamationTriangle';

function Home(props) {
   const { search } = props;
   let empty = true;
	React.useEffect(()=> {
	   props.setOption('home');
	});
	return (
      <React.Fragment>
   	    <div className="App">
            <Mt>
   	      {
   	      Cours({dark: props.dark}).map((e, i)=> {
   		      	if(search.trim() === '' || ~e.title.toLowerCase().indexOf(search))   {							
   		      		empty = false;
   		      		return(
   			      		<Chapter
   			      		 title={ e.title }
   			      		 data={ e.content }
   			      		 layer={ props.setValue }
   			      		 key={ 'chap'+ i }
   			      		 dark={ props.dark }
   			      		/>
   		      			)
   		      	} else return null;
   	      	})
   	      }
            </Mt>
   	    </div>
   	    { 
   	    	empty ? (
   	    		<div className="w3-center w3-text-gray  w3-margin-top" >
   	    			aucun élément trouvé <br/>
   	    			<BsExclamationTriangle 
   	    				fontSize="2em"
   	    				className="w3-margin-top"
   	    			/> 
   	    		</div>
   	    		) 
   	    		: null
   	    	
   	    }
      </React.Fragment>
  );
}

export default React.memo(Home);