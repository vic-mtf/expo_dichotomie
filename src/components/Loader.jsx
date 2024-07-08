import React from 'react';
import { BsGear } from '@react-icons/all-files/bs/BsGear'
import '../styles/Loader.css';

function Loader(props) {
   
  const through = React.useRef();
  const handlerRedirecting = ()=> {
     
     through.current.click();
     
  };
  const style = {
     background: 'none',
     width: 0,
     height: 0
  };
  React.useEffect(()=> {
     window.setTimeout(handlerRedirecting, 2000);
  });
  return(
      <div className="Loader">
       <props.link ref={ through } style={ style } to="/home" />
        <div className="w3-panel">
          <BsGear
            alt="load"
            className="private-gear"
            id="gear-1"
          />
          <BsGear
            alt="load"
            className="private-gear"
            id="gear-2"
          />
        </div>
        <p>chargement...</p>
       {
       //<header className="w3-text-gray">copyright 2021; Designed by victor</header>
       }
      </div>
    
    )
}

export default Loader;