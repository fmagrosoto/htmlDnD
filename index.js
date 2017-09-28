var express = require('express');
var app = express();

// Esto es un direccionamiento
app.get('/',function(req,res){
    // res.send('Probando Express');
    res.sendFile('./index.html',{ root : __dirname});
});

// Uso general en cualquier árbol de directorios
// ¡Esta es la ley!
app.use(express.static('/'));

app.listen(3501,function(){
    console.log('!Corriendo DnD en el puerto 3501!');
});
