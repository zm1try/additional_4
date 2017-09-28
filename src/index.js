module.exports = function multiply(first, second) {
  var a = first,
      b = second,
      c = [],
      i = 0,
      j = 0,
      g = 0,
      x = 0,
      y = 0,
      z = 0,
      t = 0,
      h = 0,
      last = 0,
      sum = 0,
      str = [],
      sum = [],
      revers = '',
      result = '';
  for (j = 0; j < b.length; j++) {
    str[j] = [];
    for (i = 0; i < a.length; i++) {
      str[j].push(parseInt(a.charAt(i))*parseInt(b.charAt(j)));
      //c[j] = parseFloat(str[j]);
      
    } 
    for (g = 0; g < (b.length-(b.length-j-5)); g++) {
      str[j].unshift(0);
      //c[j] = c[j] * 10;
      //console.log(c[j]);
    }
    for (x = 0; x < (b.length-j-1); x++) {
        str[j].push(0);
        //c[j] = c[j] * 10;
        //console.log(c[j]);
      }
      
    //console.log(str[j]);
    
  }
  //console.log(str[0].length);
  //console.log(b.length);
  for (y = 0; y < str[0].length; y++) {
    sum[y] = 0;
    for (z = 0; z < b.length; z++) {
      //console.log(str[z][y]);
      sum[y] += str[z][y];
    }
  }
  for (t=sum.length-1; t >= 0; t--) {

    sum[t-1] += Math.floor(sum[t]/10);
    sum[t] = sum[t]%10;
    //console.log(sum[t]);
    revers += sum[t];
  }
  for (h = revers.length - 1; h >= 0; h--) {
            result += revers.charAt(h);
        }
  for (last = 0; last < result.length; last++) {
    //console.log(result.charAt(last));
    if (result.charAt(last) === '0') continue;
    else {
      return result.slice(last,result.length);
      break}
  }
  //console.log(result);
  //console.log(sum.length);
  //console.log(typeof(result));
  //return result;
}
