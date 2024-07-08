
function Dicho(f=e=>0, i=[], e=Math.pow(10,-3)) {
   let [a0, b0] = i;
   let [a, b] = i;
   let n = 0;
   let m = null;
   let data = [];
   
   while( b-a > e) {
      m = (a + b)/2;
      data.push({
         a:a,
         b:b,
         n:n,
         m:m,
         fa:f(a),
         fb:f(b),
         fm:f(m),
         ba: b-a,
         ban: (b0-a0)/Math.pow(2,n)
      });
      if(f(a) * f(m) < 0) {
         b = m;
      } else {
         a = m;
      }
      n++;
   }
   
   return data;
}

export default Dicho;