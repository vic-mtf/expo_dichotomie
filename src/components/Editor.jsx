import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-funky.css"; //Example style, you can use another

const styles = {
  editor:{
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 12,
    background:'#282a36',
    color: 'white'
  }
}

const code = `// ici e représente l'epsilon de la tolérance
// m le milieu de l'encadrement ]a,b[
// f est une fonction générique qui s'annule à une racine près entre a et b
while(b - a > e) {
    var m = (a + b) / 2;
    if(f(a) * f(m) < 0) {
      b = m;
    } else {
      a = m;
    }
  }
/* 
  sous l'hypothèse deux nombres sont de signes opposés 
  si leurs produits est inférieur à zéro nous vérifions 
  les signes de f(a), f(b) et f(m) pour appliquer la dichotomie
*/`
function Algo() {

  return (
    <Editor
      value={ code }
      onValueChange={ ()=> false }
      highlight={ (code) => highlight(code, languages.js) }
      padding={10 }
      style={ styles.editor }
      readOnly={ true }
      className="w3-border w3-round w3-border-gray"
    />
  );
}

export default Algo;