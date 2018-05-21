class Router {
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