let num = 5678932


let result =0 

while(num>0)
{
   rightmost = num %10;
   result = result*10 +rightmost;
   num = parseInt(num/10);
}

console.log(result);