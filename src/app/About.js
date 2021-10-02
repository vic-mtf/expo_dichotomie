import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import rdc from '../assets/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png';                     
import iss from '../assets/iss.png';
import coatOfArms from '../assets/armoirie.png';
import stat from '../assets/statistic.png';

const users = [
   {
      last:'MONGOLO',
      second:'TANZEY FATAKI',
      first:'Viael'
   },
   {
      last: 'TSHILANDA',
      second:'TSHIPETA',
      first:'Kencia'
   },
   {
      last:'NGALAMULUME',
      first:'James'
   },
   {
      last:'MWAMB',
      second:'TSHINAN',
      first:'Junior'
   },
   {
      last:'MITONDO',
      second:'MWANZA',
      first:'Dieuvie'
   },
   {
      last:'NZUNDU',
      second:'HERVE',
      first:'Herve'
      
   },
   {
      last:'ABDALLAH',
      second: 'ISMAEL',
      first:'Mushikwa'
   },
   {
      last:'MUKENGESHAYI',
      second:'BABATUBIA',
      first:'Honore'
   },
   {
      last:'TINTA',
      second:'MUSEMA',
      first:'Clanne'
   },
   {
      last:'WOOTO',
      second:'LOKUND',
      first:'Léonard'
   },
   {
      last:'TUEKABOLE',
      second:' OSILA',
      first:' Stino'
   },
   {
      last:'MUZELA',
      second:'AIMEE',
      first:'Joceline'
   },
   {
      last:'AMPE',
      second:'BAKENEYA',
      first:'Synthia'
   },
   {
      last:'FADHILI ',
      second:'MAKINDO',
      first:'Esaie'
   },
   {
      last:'KAPUKU',
      second:'NGAMINIONU',
      first:'Jeanne'
   },
   {
      last:' MALU',
      second:'KATENDE',
      first:'Junior'
   },
   {
      last:'KANKOLONGO',
      second:'BIAKUPANABO',
      first:'Clément'
   },
   {
      last:'NKOSI',
      second:'KINGWANGA',
      first:'Dorcas'
   }
]

const styles = {
   iss:{
      borderRadius:'10px 10px 200px 200px',
   }, 
   title: {
      fontSize: '3vw',
      fontWeight:'bold'
   },
   container :{
      overflow:'hidden',
      height:'70vh',
      userSelect:'none'
   },
   layer: {
      width:'50vw',
      margin: 'auto',
      height:'250px',
      overflow: 'hidden'
   },
   button: {
      background: '#39f'
   }
}

function About(props) {
   
   let wait = React.useRef();
   const [index, setIndex] = React.useState(1);
   const slide = React.useRef();
   
   const hanlerBtn = (e)=> {
      const id = parseInt(e.target.id);
      if(index !== id) { 
         setIndex(id);
         if(wait.current) window.clearTimeout(wait.current);
      }
   };
   React.useEffect(()=> {
      wait.current = window.setTimeout(()=> {
         if(slide.current)
            setIndex(index === slide.current.childNodes.length ? 1 : index + 1);
         window.clearTimeout(wait.current);
      }, 5000);
      //alert(indexs.current.childNodes)
      props.setOption('about');
   });
   
   return(
      <Container className="App w3-margin-top w3-margin-bottom">
         <Row className="w3-margin-top w3-margin-bottom">
            <Col>
               <div ref={ slide }>
               
                  <div hidden={ index === 1 ? null : true} className="w3-center w3-animate-fading">
                     <h1 style={ styles.title }>REPUBLIQUE DEMOCRATIQUE DU CONGO</h1>
                     <div className="w3-round" style={ styles.layer }>
                        <img
                           src={ rdc }
                           alt={ rdc }
                           className="w3-image w3-round"
                        />
                     </div>
                  </div>
                  
                  <div hidden={ index === 2 ? null : true } className="w3-center w3-animate-fading">
                     <h1 style={ styles.title }>ENSEIGNEMENT SUPERIEUR ET UNIVERSITAIRE</h1>
                     <div className="w3-round" style={ styles.layer }>
                        <img
                           src={ coatOfArms }
                           alt={ coatOfArms }
                           className="w3-image w3-round"
                        />
                     </div>
                  </div>
                  
                  
                  <div hidden={ index === 3 ? null : true } className="w3-center w3-animate-fading">
                     <h1 style={ styles.title }>INSTITUT SUPERIEUR DE STATIQUE DE KINSHASA</h1>
                     <div className="w3-round" style={ styles.layer }>
                        <img
                           src={ iss }
                           alt={ iss }
                           className="w3-image w3-round"
                        />
                     </div>
                  </div>
                  
                  
                  <div hidden={ index === 4 ? null : true } className="w3-center w3-animate-fading">
                     <h1 style={ styles.title }>PROMOTION STATISTIQUE</h1>
                     <div className="w3-round" style={ styles.layer }>
                        <img
                           src={ stat }
                           alt={ stat }
                           className="w3-image w3-round"
                        />
                     </div>
                  </div>
                  
               </div>
               
               <div className="w3-center w3-margin-top w3-block w3-bar">
                  <button style={ index === 1 ? styles.button : null } onClick={ hanlerBtn } id="1" className="w3-btn">1</button>
                  <button style={ index === 2 ? styles.button : null } onClick={ hanlerBtn } id="2" className="w3-btn">2</button>
                  <button style={ index === 3 ? styles.button : null } onClick={ hanlerBtn } id="3" className="w3-btn">3</button>
                  <button style={ index === 4 ? styles.button : null } onClick={ hanlerBtn } id="4" className="w3-btn">4</button>
               </div>
            </Col>
         </Row>
         <Row className="w3-margin-top w3-margin-bottom">
            <Col>
               <h1 style={ styles.title }>Travail dirigé d'analyse numérique</h1>
               <div>Titulaire du cours : <span>Ct. Roger LIENDI</span></div>
               <div>Ce travail  est présenté par :</div>
               <Row>
               {
                  users.map((e,i)=> (
                  <Col key={ 'col'+i  } md={ 6 }>
                     { i + 1}.
                     <span className="w3-margin-left">{e.last}</span>
                     <span className="w3-margin-left">{e.second}</span>
                     <span className="w3-margin-left">{e.first}</span>
                  </Col>
                  ))
               }
               </Row>
               
            </Col>
         </Row>
         <Row className="w3-margin-top">
            <Col className="w3-center w3-text-gray w3-small">Copyright &copy; 2021; Designed by victor-mtf </Col>
         </Row>
      </Container>
      );
}

export default About;