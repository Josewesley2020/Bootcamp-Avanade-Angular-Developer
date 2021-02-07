var n = parseInt(gets());

for (var i = 0; i < n; i++) 
{
  var c = parseFloat(gets());
    var cont = 0;
    while (c > 1) 
    {
      c = c/2;
      cont += 1;
    }
  console.log(cont + ' dias');
}
