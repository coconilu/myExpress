const http = require('http')

class MyExpress {
    constructor(router) {
        this.router =  {}
        this.middlewares = []
    }

    use() {
        const args = [].slice.apply(arguments)
        if (args[0] instanceof String) {

        } else if (args[o] instanceof Function) {
            
        }
        
        this.middlewares.push(middleware)
    }

    listen (port, host, callback) {
        const server = http.createServer((req, res)=>{
            let route = req.url
            // todo
        })
        server.listen(3000)
    }
}