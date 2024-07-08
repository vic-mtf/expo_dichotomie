
function LinSpace(a, b, n) {
   
    let numbers = [];                                                      
    let r = (b-a)/(n-1);
    let i = 0;
    
    for(; i < n; i++) {
       if(i) {
          if((n-1) === i) numbers.push(b);
          else numbers.push( numbers[ numbers.length -1] + r );
       }
       else numbers.push(a);
    }
    
    return n >= 2 ? numbers : [];
}

export default LinSpace;