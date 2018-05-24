exports.normalizeURL = (url) => {
    if (!url.startsWith('/')) url = '/' + url
    if (url.endsWith('/')) url = url.substr(0, url.length - 1)
    return url
}