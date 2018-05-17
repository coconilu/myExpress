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

MyExpress.Router = class Router {
    constructor() {
        this._router = {}
    }

    get(url, callback) {
        let routeArr = url.split('/')
        console.log(routeArr)
        let tempArr = this._router
        for (let i = 0, length = routeArr.length; i < length; ++i) {
            tempArr[routeArr[i]] = tempArr[routeArr[i]] || {}
            tempArr = tempArr[routeArr[i]]
        }
        tempArr[Symbol('GET')] = callback
    }

    post(url, callback) {

    }
}