var http = require('http')

var server = http.createServer( function(req, res) {
    var categoria = req.url

    if(categoria == "/tecnologia") {
        res.end("<html><head><meta charset='utf-8'></head><body>Notícias de Tecnologia</body></html>")    
    } else if(categoria == "/moda"){
        res.end("<html><head><meta charset='utf-8'></head><body>Notícias de Moda</body></html>")    
    } else if(categoria == "/beleza") {
        res.end("<html><head><meta charset='utf-8'></head><body>Notícias de Beleza</body></html>")    
    } else {
        res.end("<html><head><meta charset='utf-8'></head><body>Portal de Notícias</body></html>")
    }
})

server.listen(3000)

