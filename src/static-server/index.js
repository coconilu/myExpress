const mineType = {
  'css': 'text/css',
  'js': 'text/javascript',
  'txt': 'text/plain',
  'html': 'text/html',
  'gif': 'image/gif',
  'png': 'image/png',
  'jpeg': 'image/jpeg',
  'bmp': 'image/bmp',
  'webp': 'image/webp'
}

const makeStaticServer = function (req, res, rootPath) {
  const path = require('path')
  const url = require('url')
  const fs = require('fs')

  const { pathname } = url.parse(req.url)
  const realPath = path.join(rootPath, '/static', pathname)
  const rs = fs.createReadStream(realPath)
  let chunkArr = []
  let len = 0
  rs.on('data', (chunk) => {
    chunkArr.push(chunk)
    len += chunk.length
  })
  rs.on('end', () => {
    let resultBuffer = Buffer.concat(chunkArr, len)
    res.statusCode = 200
    res.setHeader('Content-Type', mineType[pathname.slice(pathname.lastIndexOf('.') + 1)])
    res.setHeader('Content-Length', resultBuffer.length)
    res.setHeader('Cache-Control', 'max-age=120')
    res.end(resultBuffer)
  })
  rs.on('error', err => {
    console.log(err)
  })
}

exports.makeStaticServer = makeStaticServer