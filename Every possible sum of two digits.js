function digits(num){
    let z = num.toString().split('').map(v=>v*1)
     let arr=[];
     for (let i=0;i<z.length;i++){
       for (let j=1+i;j<z.length;j++){
         arr.push(z[i]+z[j])
         }
       }
     return arr
  }

/*
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/