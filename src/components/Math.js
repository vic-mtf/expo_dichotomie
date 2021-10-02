import React from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';                                                                                                                        

const config = {
  loader:{
      load: ['input/asciimath']
  }
}

function Mt(props) {
   return(
     	   
     	   <MathJaxContext
		      config={ config }
		      src={ `${ process.env.PUBLIC_URL }/mathjax/es5/tex-chtml.js` }
	      >
	       <MathJax 
	         inline={ true }
	         hideUntilTypeset="first"
            dynamic={ true }
	       >{ props.children }</MathJax>
	      </MathJaxContext>
	      );
}

export default React.memo(Mt);