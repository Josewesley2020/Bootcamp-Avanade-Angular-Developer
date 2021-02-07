let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let codigo = []; 

let code = parseInt(gets());

while (code != 4) 
{
   codigo.push(code);
   code = parseInt(gets());
}

for (var i = 0; i <= codigo.length; i++) 
{
  
  if (codigo[i] < 4) 
  {
    
    switch(codigo[i])
    {
      case 1:
        alcohol += 1;
        break;
      case 2:
        gasoline += 1;
        break;
      case 3:
        diesel += 1;
        break;
    }
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);