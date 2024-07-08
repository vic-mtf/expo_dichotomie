import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Home from './Home';
import About from './About';
import Theme from './Theme';
import Note from './Note';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function App() {
   
   const [dark, setDark] = React.useState(true);
   const [value, setValue] = React.useState(true);
   const [search, setSearch] = React.useState('');
   const [systemTheme, setSystemTheme] = React.useState(false);
   const [option, setOption] = React.useState('home');
	const handlerSearch = (e)=> {
		setSearch(e.toLowerCase().trim());
	}
	
	const handlerDarkMode = (e)=> {
	   setDark(e);
	}
	
	const handlerSystemTheme = (e)=> {
	   setSystemTheme(e);
	}
   React.useEffect(()=> {
      dark && document.body.classList.add('dark-theme_')
   })
   return(
      <BrowserRouter>
        <Header 
            link={ Link } 
            search={ handlerSearch }
            dark={ dark }
            option={ option }
        />
         
       {/* <Loader dark={ dark } hidden={ value } />*/}
         <Switch>
            <Route exact path="/home">
               <Home
                  value={ value }
                  setValue={ setValue }
                  dark={ dark }
                  search={ search }
                  setOption={ setOption }
               />
            </Route>
            <Route exact path="/theme">
               <Theme
                  value={ value }
                  dark={ dark }
                  handlerDarkMode={ handlerDarkMode }
                  systemTheme={ systemTheme }
                  handlerSystemTheme={ handlerSystemTheme }
                  setOption={ setOption }
               />
            </Route>
            <Route path="/note">
               <Note
                  dark={ dark }
                  setOption={ setOption }
               />
            </Route>
            <Route path="/about">
               <About
                  dark={ dark }
                  setOption={ setOption }
               />
            </Route>
            <Route to="/">
               <Loader link={ Link }/>
            </Route>
         </Switch>
      </BrowserRouter>
      );
}

export default React.memo(App)