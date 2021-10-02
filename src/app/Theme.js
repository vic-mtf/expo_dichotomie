import React from 'react';
import SetTheme from '../components/SetTheme';
import { Container, Row, Col } from 'react-grid-system';
import { BsSun } from '@react-icons/all-files/bs/BsSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import { BsToggleOn } from '@react-icons/all-files/bs/BsToggleOn';
import { BsToggleOff } from '@react-icons/all-files/bs/BsToggleOff';

const styles = {
   light: {
      background: '#eee'
   },
   dark: {
      background: '#20202c'
   },
   radioOn: {
      color:'#39f'
   }
}

function Theme(props) {
   const [autoTheme, setAutoTheme] = React.useState(props.systemTheme);
   const [manualTheme, setManualTheme] = React.useState( props.dark ? 'dark' : 'light');
   
   const handlerToggle = (e)=> {
      setAutoTheme(!autoTheme);
   }
   const handlerManualTheme = (e)=> {
      let el = e.target;
      let id = el.id;
      while(id === '') {
        if(el)el = el.parentNode;
        id = el.id;
      }
      setManualTheme(id);
   }
   
   const  isDark = SetTheme(autoTheme ? null : (manualTheme === 'dark' ? true : false))
   React.useEffect(()=> {
   props.handlerDarkMode( isDark );
   props.handlerSystemTheme(autoTheme); 
   props.setOption('theme');
   })
   return(
      <Container className="App w3-margin-top">
         <Row className="w3-margin-top">
            <Col>
               <button 
                  className="w3-btn w3-large"
                  onClick={ handlerToggle }
               >
                  <BsToggleOn 
                     hidden={ !autoTheme } 
                     className="w3-radio"
                     color={ autoTheme ? '#39f' : null}
                  />
                  <BsToggleOff 
                     hidden={ autoTheme } 
                     className="w3-radio"
                     color={ autoTheme ? '#39f' : null }
                  />
               </button>
               <span className="w3-margin-left w3-label">
                     Activer le thème automatique par défaut
               </span>
            </Col>
         </Row>
         <Row className="w3-margin-top">
            <Col className="w3-text-gray">
               Le thème automatique par défaut exploite systématiquement
               le thème natif qu'utilise votre appareil, 
               Alors cette option n'est pas compatible avec d'autres systèmes et 
               un certain nombre d'anciens navigateurs 
            </Col>
         </Row>
         <Row className="w3-margin-top w3-margin-bottom">
            <Col>
               <ul 
                  hidden={ null } 
                  style={ props.dark ? styles.dark : styles.light} 
                  className="w3-ul w3-round"
               >
                    <li>
                     <button 
                        disabled={ autoTheme }
                        style={ manualTheme === 'light' ? styles.radioOn : null } 
                        className="w3-btn w3-left-align w3-block"
                        id="light"
                        onClick={ handlerManualTheme }
                     >
                        <BsSun className="w3-radio"/>
                        <span className="w3-margin-left w3-label">Clair</span>
                     </button>
                  </li>
                   <li>
                     <button
                        style={ manualTheme === 'dark' ? styles.radioOn : null } 
                        className="w3-btn w3-left-align w3-block"
                        id="dark"
                        onClick={ handlerManualTheme }
                        disabled={ autoTheme }
                     >
                        <BsMoon 
                           className="w3-radio"
                        />
                        <span className="w3-margin-left w3-label">Sombre</span>
                     </button>
                  </li>
               </ul>
            </Col>
         </Row>
      </Container>
      );
}

export default React.memo(Theme);