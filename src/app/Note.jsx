import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Equation from '../components/Equation';
import Graph from '../components/Graph';
import LinSpace from '../components/LinSpace';
import Dicho from '../components/Dicho';
import Mt from '../components/Math';

const styles = {
	img:{
		opacity: .8,
		overflow: 'hidden',
	},
	table: {
	   overflow: 'hidden'
	}
};

function Note(props) {
   const [eq, setEq] = React.useState([1,-1, 0, 5]);
   const [inter, setInter] = React.useState([-2,-1]);
   const [error, setError] = React.useState(0.001);
   const [upGrade, setUpGrade] = React.useState(false);
   const update = React.useRef();
   const valueEq = (x)=> {
      let value = 0;
      const sum = eq.map((e,i,t)=> e * Math.pow(x, t.length - (i+1)));
      sum.forEach(e=> { value += e });
      return value;
   };
   
   React.useEffect(()=> {
      props.setOption('note');
      if(!upGrade && update.current) {
         update.current.click();
      }
   });
   
   return(
      <Container className="w3-margin-top">
         <Mt>
         <Row className="w3-margin-top">
            <Col>
               <p>
                  Cette interface use de l'algorithme de dichotomie qui vous 
                  permet de tester vos solutions sur une précision insérée, Et de visualiser graphiquement la variation de votre fonction sur un intervalle donné 
               </p>
               <Equation
                setError={ setError }
                setInter={ setInter }
                setEq={ setEq }
                eq={ eq }
                inter={ inter }
                error={ error }
                update={ update }
                setUpGrade={ setUpGrade }
                dark={ props.dark }
               />
            </Col>
         </Row>
         <Row>
            <Col md={6} className="w3-margin-top">
               <p className="w3-text-gray">graphique de l'equation: </p>
                 <Graph
                     data={[
                         {  
                           x:LinSpace(...inter, 500),
                           y: LinSpace(...inter, 500).map(e=>valueEq(parseFloat(e))),
                           name:"f"
                         },{
                            x: inter,
                            y:[0, 0],
                            mode: 'markers',
                            marker: {
                                 size: [10, 10],
                              },
                            name:'I'
                         },
                        {
                            x:LinSpace(...inter, 500).filter(x=>{if( valueEq(x) > Math.pow(10,-10000)) return x; else return 0}),
                            y:[0],
                            mode: 'markers',
                            marker: {
                                 size: [15],
                              },
                            name:'x'
                         }
                        ]}
                     config={ {staticPlot: true} }
        		         className="w3-round"
           		      style={ styles.img }
                  />
            </Col>
            <Col md={6} className="w3-margin-top w3-margin-bottom">
            
               <p className="w3-text-gray">Tableau de variation:</p>
               <div className="w3-responsive w3-round w3-margin-bottom w3-border">
               
                 <table style={ styles.table } className="w3-table w3-border w3-round">
                     <thead>
                        <tr>
                           {
                           [
                              'n', 'a_n', 'b_n', 'm', 'f(a)', 'f(b)', 'f(m)', 'b-a'
                           ].map((e, i)=>(
                              <th key={ 'th' + i } className="w3-border w3-center">
                                 <span>`{e}`</span>
                              </th>
                           ))
                           }
                        </tr>
                     </thead>
                     <tbody>
                     {
                        Dicho( e=>valueEq(e), inter , error).map((e, i)=>(
                           <tr key={ 'tr' + i }>
                              <td className="w3-border w3-center">{ i }</td>
                              {
                                ((e)=>{
                                    const t = [];
                                    let index = 0;
                                    for(let j in e) {
                                       if(/[fabm]$/.test(j) ) t.push(<td key={ 'td'+ index } className="w3-border w3-center">{ /f/.test(j) ?(e[j] < 0 ? '-' : '+'): e[j] }</td>)
                                       index++;
                                    }
                                    return t;
                                 })(e)
                              }
                           </tr>
                        ))
                     } 
                     </tbody>
                  </table>
            
               </div>
            </Col>
         </Row>
         </Mt>
      </Container>
   );
}
export default React.memo(Note);
