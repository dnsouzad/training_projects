// importar as configurações do servidor
var app = require('./config/server')

// parametrizar a porta de escuta // padrão 80 ou 3000
app.listen(80, function(){
    console.log('Servidor Online');
})