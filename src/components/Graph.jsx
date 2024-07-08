import React from "react";
import Plotly from "plotly.js-basic-dist";

function Graph(props) {
   const { data, layout, config, style, ...attr } = props;
   const plot = React.useRef();

   React.useEffect(()=> {
      Plotly.newPlot(plot.current, data, layout, config);
   })
   return (
      <div style={ {...style,...{ width:'100%' }} } { ...attr } ref={ plot }>
      </div>
      
      )
}
export default Graph;