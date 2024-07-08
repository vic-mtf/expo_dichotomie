import React from 'react';
import Infos from './Infos';
import Algo from './Editor';
import Dicho from './Dicho';
import img1 from '../assets/Dichotomie.png';
import img2 from '../assets/recherche_racine_dichotomie2.gif';
import img3 from '../assets/Newton_iteration.png'
import plot from '../assets/plotly.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = {
	link:{
		textDecoration:'none',
		color:'#dc3e5d'
	},
	img:{
		opacity: .8,
		overflow: 'hidden'
	}
};

export default function Cours(props) {

	const { dark } = props;
	const data = [
		{
			title: 'Introduction',
			content: [
				[
					<p data-aos="fade-up" className="aos-animate">
           la <strong>dichotomie</strong> (<em className="w3-text-gray">méthode de bissection</em>) est un algorithme de prospection d'un zéro
           d'une fonction donnée qui consiste à itérer des fragmentations d'un intervalle en
           deux segments identiques, ensuite à désigner le sous-intervalle dans lequel l'existence
           d'un zéro de la fonction est possible.
          </p>
				],
				[
					<img
					data-aos="fade-up"
						className="w3-image w3-round w3-white aos-animate"
						src={ img1 }
						alt={ img1 }
						style={ styles.img }
					/>,
					<Infos isDark={ dark }>
							Quelques étapes séquentielles ou consécutives de la méthode de <strong>dichotomie</strong> avec comme le point 
	            d'origine l'intervalle `[a_1,b_1]`. le zéro de la fonction est représenté
	            en rouge bordeau
          </Infos>
				]
			]
		},
		
		{
			title: 'Précepte',
			content: [
				[
				 <p data-aos="fade-up" className="aos-animate">
                Soit `a` et `b` deux nombres réels et `f` une fonction continue sur l'intervalle `[a,b]` de manière à ce que `f(a)`
                et `f(b)` soient de signes contraires <br/>
                
                Présimons que nous désirons trancher ou solutionner l'équation `f(x)=0`, Conformément au théorème des valeurs intermédiaires,
                `f` a au moins un zéro dans l'intervalle `[a,b]` la méthode de <strong>dichotomie</strong> consiste à fractionner l'intervalle
                en deux en calculant le milieu m, qui est donné par la relation `m=(a+b)/2`, alors dans ce cas nous sommes apporté à analyser sur 
                le choix de deux éventualités:<br/> 
                soit `f(a)` et `f(m)` sont des signes opposés ou `f(m)` et `f(b)` sont des signes opposés <br/>
                L'algorithme de <strong>dichotomie</strong> est appliqué aux sous-intervalles dans lequel l'altération des signes s'avère présente 
                de manière récursive. <br/>
          </p>,
        	<img 
        		data-aos="fade-up"
        		src={ img2 }
        		alt={ img2 }
        		className="w3-image w3-round w3-white aos-animate"
        		style={ styles.img }
        	/>
				],
				[
					<Infos isDark={ dark }>
	                Après chaque itération, la réduction d'intervalle de recherche s'avère progresser quasi linéairement,
	                Ce qui rend la méthode robuste.<br/>
	                Par construction, après `n` itérations, on obtient `a_n {'<'} x_n {'<'}  b_n` avec `b_n - a_n = (b-a)/2^n` . L’encadrement de la racine est donc d’amplitude : 
	                `(b - a) / 2^n`
	                On peut donc faire tourner cet algorithme de construction, quand que l’on n’obtient pas la précision souhaitée
          </Infos>
				]
			]
		},
		
		{
		   title:"exemple",
		   content: [
		      [
		    <div data-aos="fade-up" className="w3-responsive aos-animate">
		      <p data-aos="fade-up" className="aos-animate">
      		    
      		         Soit `f` la fonction définie sur un intervalle `I` par `f(x) = x^3 − x^2 + 5`, nous cherchons une valeur inique `x` tel que `f(x)` soit égale à `0`, avec `I =[-2, -1]`
      		         nous pouvons observer visuellement la continuité de `f` sur `I` ci-après 
            </p>
            <img
               data-aos="fade-up"
           		src={ plot }
           		alt={ plot }
           		className="w3-image w3-round w3-white aos-animate"
           		style={ styles.img }
            />
            </div>,
               <div data-aos="fade-up" className="aos-animate">
                  <p data-aos="fade-up" className="aos-animate">
                       Pour plus d'appréhension pratique le tableau illustre la dichotomie appliquée `n` fois sur l'intervalle `I` en étudiant les variations des signes pour `f(a)`, `f(b)` et `f(m)`
                  </p>
                  <div data-aos="fade-up" className="w3-responsive w3-border aos-animate">
                     <table className="w3-table w3-border w3-round">
                        <thead>
                        <tr>
                           <th className="w3-border w3-center">`n`</th>
                           <th className="w3-border w3-center">`a_n`</th>
                           <th className="w3-border w3-center">`b_n`</th>
                           <th className="w3-border w3-center">`m`</th>
                           <th className="w3-border w3-center">`f(a)`</th>
                           <th className="w3-border w3-center">`f(m)`</th>
                           <th className="w3-border w3-center">`f(b)`</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           Dicho( x=>(Math.pow(x,3) - Math.pow(x,2) + 5),[-2,-1],0.001).map((e, i)=>(
                              <tr key={ 'tr' + i }>
                                 <td className="w3-border w3-center">{ i }</td>
                                 <td className="w3-border w3-center">{ e.a }</td>
                                 <td className="w3-border w3-center">{ e.b }</td>
                                 <td className="w3-border w3-center">{ e.m }</td>
                                 <td className="w3-border w3-center">{ e.fa < 0 ? '-' : '+' }</td>
                                 <td className="w3-border w3-center">{ e.fm < 0 ? '-' : '+' }</td>
                                 <td className="w3-border w3-center">{ e.fb < 0 ? '-' : '+' }</td>
                              </tr>
                           ))
                        }
                        </tbody>
                     </table>
                  </div>
                  <p data-aos="fade-up" className="aos-animate">
                        après 9 iterations on en déduit que la valeur de `x` est `-1.43359375 {'< x <'} -1.431640625`
                  </p>
               </div>
            ]
		      ]
		},
	
		{
			title: 'Gain',
			content: [
				[
					<p data-aos="fade-up" className="aos-animate">
      
                  Le principal avantage pratique de la <strong>dichotomie</strong> est sa robustesse, puisque si `f` est continue sur l'intervalle `[a,b]`, alors l'algorithme est
                  théoriquement convergent après un certain nombre d'itérations, De plus, si l'on se donne la tolérance relative `epsilon`, 
                  on sait majorer le nombre d'itérations nécessaires pour satisfaire cette tolérance
            
                Prenons l'equation précédente ci-haut de notre exemple, Identifions les étendues de chaque sous intervalle dans un tableau :
               </p>,
               <div data-aos="fade-up" className="w3-responsive w3-border aos-animate">
                     <table className="w3-table w3-border w3-round">
                        <thead>
                        <tr>
                           <th className="w3-border w3-center">`n`</th>
                           <th className="w3-border w3-center">`a_n`</th>
                           <th className="w3-border w3-center">`b_n`</th>
                           <th className="w3-border w3-center">`m`</th>
                           <th className="w3-border w3-center">`b_n-a_n`</th>
                           <th className="w3-border w3-center">`(b_0-a_0)/(2^n)`</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           Dicho( x=>(Math.pow(x,3) - Math.pow(x,2) + 5),[-2,-1],0.001).map((e, i)=>(
                              <tr key={ 'tr' + i }>
                                 <td className="w3-border w3-center">{ i }</td>
                                 <td className="w3-border w3-center">{ e.a }</td>
                                 <td className="w3-border w3-center">{ e.b }</td>
                                 <td className="w3-border w3-center">{ e.m }</td>
                                 <td className="w3-border w3-center">{ e.ba }</td>
                                 <td className="w3-border w3-center">{ e.ban }</td>
                              </tr>
                           ))
                        }
                        </tbody>
                     </table>
               </div>
               ],
               [
               <div data-aos="fade-up" className="aos-animate">
               <p data-aos="fade-up" className="aos-animate">
                  On remarque à chaque `n` étape l'étendue est réduite à moitié, pour converger via la tolérance on se donne une condition qui consiste à calculer tant que `b_n - a_n {'>'} epsilon`, alors ce qui implique que nous arrêtons
                  de calculer si et seulement `b_{'{n+1}'} - a_{'{n+1}'} {'<='} epsilon`, ceci nous amène à l'écrire autrement `(b_0-a_0) / 2^(n+1){'<='} epsilon` (<em className="w3-text-gray">voire le tableau `b_n - a_n = (b_0 - a_0)/ (2^n)`</em>), Ainsi on pourra calculer d’avance le nombre maximal  d’itérations assurant la précision voulue. 
                  C’est la plus petite valeur de `n` qui vérifie:<br/>
                  nous savons que `epsilon{'>='}(b-a)/2^(n+1)`
                  `iff 2^(n+1){'>='}(b-a)/epsilon`
                  `iff log(2^(n+1)){'>='}log((b-a)/epsilon)`
                  `iff (n+1)log 2{'>='}log((b-a)/epsilon)`
                  `iff (n+1) {'>='} (log((b-a)/epsilon))/log 2`
                  `iff n{'>='}((log((b-a)/epsilon))/log 2) - 1`
               </p>
            </div>
				],
				[
					<Infos isDark={ dark }>
                Donc on en déduit que :<br/>
                `n{'>='}(log_2((b-a)/epsilon))-1`
           </Infos>,
           <p data-aos="fade-up" className="aos-animate">
                  L'avantage de la <strong>dichotomie</strong> par rapport à méthode de la <strong>Newton</strong> est son domaine d'application plus vaste : il suffit seulement que `f(a)` et `f(b)` soient de signes opposés et 
                  qu'on puisse déterminer le signe de `f(m)` à chaque itération (<em className="w3-text-gray">moins de paramètres à manipuler</em>) d'où la simplicité et la robustesse de la méthode
           </p>
				]
				]
		},
		
		{
			title: 'Programmation',
			content: [
				[  
					<p data-aos="fade-up" className="aos-animate">
            Nous illustrons ici l'algorithme de dichotomie en <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" style={ styles.link }>JavaScript</a>, Sous l'hypothèse que le signe de <code style={ styles.code }>f(m)</code> soit déterminable les variables initiales <code style={ styles.code }>a</code> et <code style={ styles.code }>b </code>
            (<em className="w3-text-gray"> elles encadrent la racine cherchée à une tolérance près donnée</em>) sont choisis de matière à ce que <code style={ styles.code }>f(a)</code> et <code style={ styles.code }>f(b)</code> soient des signes opposés. 
            La variable <code style={ styles.code }>e</code> spécifie la précision ou la tolérance du résultat.
          </p>,
          <div data-aos="fade-up" className="aos-animate">
            <Algo/>
          </div>
        ]
				]
		},
		
		{
			title: 'Défiance',
			content: [
				[
					<p data-aos="fade-up" className="aos-animate">
              Le principal défaut de l'algorithme est que seul le signe de `f` est prise en compte, ce qui implique qu'elle converge plutôt lentement (<em className="w3-text-gray">convergence quasiment linéaire</em>). La méthode de <strong>Newton</strong>, elle use de la valeur de `f` ainsi que la valeur de la pente de `f` (<em className="w3-text-gray">la tangente touchant `f` en un point `x_n`</em>), 
              la raison pour laquelle elle converge significativement plus rapide (<em className="w3-text-gray">convergence quadratique</em>).<br/>
              Généralement la détermination du signe de `f(m)` peut s'avérer impossible, même si on tentait d'augmenter la précision du calcul de logiciel. Pour la méthode il n'existe généralement pas d'algorithme pour étudier `m` et se décider si `m{'<'}0`, `m{'='}0` ou encore  `m{'>'}0` ce qui est insuffisant pour conclure.
          </p>,
          <img 
          	data-aos="fade-up"
        		src={ img3 }
        		alt={ img3 }
        		className="w3-image w3-round w3-white aos-animate"
        		style={ styles.img }
          />
				],
				[
					<p data-aos="fade-up" className="aos-animate">
              La dichotomie bien qu'elle soit d'une grande robustesse comme méthode cela exige cependant à chaque étape d'analyse le signe de `f(m)`, Après quelques étapes dans certain cas il arrive que `f(m)` soit très proche de `0` et que la précision liée au programme ou logiciel de calcul ne permet plus de déterminer le signe de `f(m)` 
              (<em className="w3-text-gray"> les valeurs erronée issus d'un arrondissement lié au programme sont à base de cette imperfection</em>), Alors le logiciel risque d'éliminer ironiquement une moitié de l'intervalle et converger vers une valeur éloignée de la racine cherchée.
          </p>
				],
				[
					<Infos isDark={ dark }>
           D'après <a href="https://fr.m.wikipedia.org/wiki/Analyse_constructive" style={ styles.link }>wikipedia</a> les théoriciens de l'analyse constructive qualifient la méthode de dichotomie être non constructive et privilégie l'énoncé alternatif
          </Infos>
				]
			]
		}
		
	];
	
	React.useEffect(()=> {
		AOS.init({
  		animatedClassName:'aos-animate',
			duration: 400,
  		offset:50,
  		easing: 'ease-in-out'
		})
	});
	return data;
	
}

