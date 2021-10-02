 import React from 'react';
 
 const styles = {
    button: {
       width:'160px'
    },
    input:{
      outlineColor:'gray',
      borderBottom:'1px gray solid'
    },
    dark: {
       background: '#20202c'
    },
    light: {
		background: '#eee'
	}
 };
 
 function équation(props) {
    const [variable, seVariable] = React.useState(3);
    const [help, setHelp] = React.useState(false);
    const num = React.useRef();
    const inter = [React.useRef(), React.useRef()];
    const error = React.useRef();
    const hanlerHelp = (e)=> {
       setHelp(e.target.id === "close" ? false : true);
    }
    const hanlerTable = (e)=> {
       
       switch (e.target.id) {
          case 'add':
             seVariable( variable + 1 );
             break;
          case 'remove':
             seVariable( (variable - 1)  ? variable - 1 : variable);
             break;
          
          default:
             {
                const numUp = [];
                for(let v of num.current.childNodes)                         
                      numUp.push(v.firstElementChild.value);
                numUp.pop();
                props.setEq(numUp);
                props.setInter(inter.map(e=> parseFloat(e.current.value)));
                props.setError(parseFloat(error.current.value));
                props.setUpGrade(true);
             }
       }
    }
    
    const returnMap = (nbr)=> {
       let i = 0;
       const map = [];
       for(; i < nbr; i++) map.push(i);
       return map;
    }
    
    React.useEffect(()=> {
       
       const eqReverse = [...props.eq].reverse();
       const cel = [...num.current.childNodes].reverse();
       
       cel.forEach((e, i, t)=> { 
           if(i) e.firstElementChild.value = parseFloat(eqReverse[ i - 1 ]);
       });
       
       props.inter.forEach((e, i)=> { inter[i].current.value = parseFloat(e)});
       error.current.value = parseFloat(props.error);
    })
    
    return (
       <React.Fragment>
          <div className="w3-responsive w3-round w3-border">
            <table style={ styles.table } className="w3-round w3-table">
               <thead>
               <tr>
                  <th className="w3-center" colSpan={ variable }>
                     Variable
                  </th>
                  <th className="w3-center">
                     C
                  </th>
                  <th className="w3-center w3-border-left">
                     I
                  </th>
               </tr>
               </thead>
               <tbody>
                  <tr ref={ num }>
                  {
                     returnMap(variable).map((e,i)=> (
                     <td key={ 'td' + i }>
                        <input placeholder={'x'+((variable-i) > 1 ? variable-i : '') } type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                     </td>
                     ))
                  }
                     <td>
                        <input placeholder="const" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                     </td>
                     <td className="w3-border-left">
                        <input ref={ inter[0] } placeholder="a" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                     </td>
                  
                  </tr>
                  <tr>
                     <th className="w3-center w3-border-top">e</th>
                     <td colSpan={ variable } className="w3-border-top">
                        <input ref={ error } step={ 0.001 } max={1} min={ Math.pow(10,-15) } placeholder="précision" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                     </td>
                     <td className="w3-border-left">
                        <input ref={ inter[1] } placeholder="b" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                     </td>
                  
                  </tr>
               </tbody>
            </table>
          </div>
          
          <div className="w3-block w3-center w3-margin-top">
               <button 
                  className="w3-bar-item w3-small w3-round w3-btn w3-hover-blue w3-text-blue"
                  id="add"
                  onClick={ hanlerTable }
                  style={ styles.button }
               >
                  Ajouter une variable
               </button>
               <button 
                  className="w3-bar-item w3-small w3-round w3-btn w3-hover-pink w3-text-pink"
                  id="remove"
                  onClick={ hanlerTable }
                  style={ styles.button }
               >
                  supprimer une variable
               </button>
         </div>
         <div style={ props.dark ? styles.dark : styles.light } hidden={ !help } className="w3-panel w3-round w3-display-container w3-animate-opacity">
            <span onClick={ hanlerHelp } id="close" className="w3-btn w3-pink w3-display-topright w3-round">&times;</span>
            <h1>Guide</h1>
            <p>
               Pour compléter le tableau, remplacez exactement les coefficients
               de chaque variable ou le terme en `x` généralement de votre équation dans la zone <strong>variable</strong> du tableau,
               La case <strong>C</strong> porte la valeur du terme indépendant de l'équation et la zone <strong>I</strong> est destinée pour l'insertion 
               d'intervalle de recherche,  puis la zone <strong>e</strong> pour la précision de recherche.
            </p>
            <div>
               Prenons l'exemple pour l'équation `x^3 - x^2 + 5` définie sur l'intervalle `[-2,-1]`, la tolérance ou précision est de `10^-3`
               pour remplacer le données précédentes des le tableau on analyse l'équation afin d'isoler les coefficients de chaque terme en `x` alors nous aurons: <br/>
               `x` = 0, `x^2` = -1, `x^3` = 1, <strong>C</strong> = 5, <strong>I</strong> = -2,-1 et <strong>e</strong> = 0.001, le tableau se présente comme suite:
            <div className="w3-responsive w3-round w3-border w3-margin-bottom w3-margin-top">
               <table style={ styles.table } className="w3-round w3-table">
                  <thead>
                  <tr>
                     <th className="w3-center" colSpan={ 3 }>
                        Variable
                     </th>
                     <th className="w3-center">
                        C
                     </th>
                     <th className="w3-center w3-border-left">
                        I
                     </th>
                  </tr>
                  </thead>
                  <tbody>
               <tr>
                  <td>
                     <input readOnly={ true } defaultValue='1' type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
                  <td>
                     <input readOnly={ true } defaultValue='-1' type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
                  <td>
                     <input readOnly={ true } defaultValue='0' type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
                  <td>
                     <input readOnly={ true } defaultValue="5" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
                  <td className="w3-border-left">
                     <input readOnly={ true } defaultValue="-2" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
               </tr>
               <tr>
                  <th className="w3-center w3-border-top">e</th>
                  <td colSpan={ 3 } className="w3-border-top">
                     <input readOnly={ true } defaultValue="0.001" step={ 0.0001 } max={1} min={Math.pow(10,-15)} placeholder="précision" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
                  <td className="w3-border-left">
                     <input readOnly={ true } defaultValue="-1" type="number" style={styles.input} className="w3-input w3-center w3-round"/>
                  </td>
               
               </tr>
               </tbody>
            </table>
          </div>
           <p>L'ordre d'emplacement des `x` est important,  comme vous pouvez le remarquer le terme en `x`  n'est pas dans l'équation d'ou valeur 0 pour son coefficient, nous avons -1 comme valeur pour `x^2` et enfin 1 pour `x^3`</p>
         </div>
         </div>
         <div hidden={ help } className="w3-margin-top">
            Si le tableau tableau semble incompréhensible, allez voir la section <span id="open" onClick={ hanlerHelp } style={{padding:0,color:'#dc3e5d'}} className="w3-btn w3-left-align">Guide d'utilisation du tableau</span> pour plus d'informations sur le remplissage des données dans le tableau pour le teste votre équation
         </div>
         <div className="w3-margin-top w3-center">
            <button 
                  className="w3-bar-item w3-round w3-small w3-block w3-btn w3-blue"
                  id="valid"
                  onClick={ hanlerTable }
                  ref={ props.update }
               >
                  Actualiser le graphique et le tableau des données 
               </button>
         </div>
       </React.Fragment>
       )
 }
 export default React.memo(équation);