// importar as configurações do servidor
const { on, set } = require('./config/server')
var app = require('./config/server')

// parametrizar a porta de escuta // padrão 80 ou 3000
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

var io = require('socket.io')(server).listen(server)

app.set('io', io)

/* Criar a conexão por websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function(){
        console.log('Usuário desconectou')
    })

    socket.on('msgParaServidor', function(data){
        
        // diálogo
        socket.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        )
        
        socket.broadcast.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        // participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            )
            
            socket.broadcast.emit(
                'participantesParaCliente', 
                {apelido: data.apelido}
            )
        }
    })
})