import React from 'react';
import { Container, Row } from 'react-grid-system';
import NavMobile from './NavMobile';
import NavMain from './NavMain';

const styles = {
  title: {
    marginTop:0,
    color:'#39f',
    fontSize: '8vw',
    textAlign:'center'
    
  },
  dark: {
      background: '#20202c',
      height:'50vw',
      paddingTop:'14vw',
      marginTop:'-10vw',
      marginBottom:'-10vw'
  },
  light: {
      background:'#eee',
      height:'50vw',
      paddingTop:'14vw',
      marginTop:'-10vw',
      marginBottom:'-10vw'
  }
}


function Header(props) {
   const {option} = props;
	 return (
	    <React.Fragment>
        	<div style={ props.dark ? styles.dark : styles.light }>
        		<Container >
      	  		<Row>
      	  				<p style={ styles.title } className="w3-panel">EXPOSE D'ANALYSE NUMERIQUE</p>
      	  		</Row>
            </Container>
         </div>
         <NavMobile option={ option } dark={ props.dark } link={ props.link } search={ props.search } />
         <NavMain option={ option } dark={ props.dark } link={ props.link } search={ props.search } />
      </React.Fragment>
  )
}

export default Header;