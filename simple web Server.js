const http = require('http')

let server = http.createServer(function (request, response) {
  response.end('<h1> babababa! </h1>')
})
server.listen(3000)

