const { normalizeURL } = require('./util')

const HttpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD']

class Router {
    constructor() {
        this.stack = {}
        // 构建http方法
        for (let v of HttpMethods) {
            this[v.toLowerCase()] = (url, callback) => {
                url = normalizeURL(url)
                console.log(url)
                this.stack[url] = this.stack[url] ? this.stack[url] : {}
                this.stack[url][v] = callback
                return this
            }
        }
    }
}

exports.Router = Router