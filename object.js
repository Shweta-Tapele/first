let alien = 
{
    name: 'Shweta',
    tech: 'Java',
    exp: 4,
    laptop:{
        cpu:'i7',
        ram:4

    }
}


// delete alien.laptop

//console.log(alien.exp);


for (let key in alien.laptop)
{
    console.log(key, alien.laptop[key]);
}