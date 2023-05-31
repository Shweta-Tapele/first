function greet()
{
    console.log("Hello");
}

greet();



let add = function(num1, num2)
{
    return num1 +num2;
}

let result = add(5,6)


console.log(result); 



let add1 = (num3,num4) =>
{
    if(num3 >0 && num4 > 0)
    {
        return num3+num4;
    }
    else
        console.log("negative ums cannt be added");

}


let result1 = add1(-7,9);

console.log(result1);