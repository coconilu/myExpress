const http = require('http')

class MyExpress {
    constructor(router) {
        this.router = router || {}
        this.middlewares = []
    }

    use(middleware) {
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