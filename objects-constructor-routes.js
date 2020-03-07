function splitRequest(request) {
  const method = request.split(" ")
  return method
  
}

function showMethod(request) {
  const method = splitRequest(request)
   return method[0]
}

function showProtocol(request) {
  const protocol = splitRequest(request)
  const stringTransform = protocol[1].split("/", 1)
  return stringTransform.toString()
}

function showHostName(request) {
  const hostName = splitRequest(request)
  const stringTransform = hostName[1].split("/")
  return stringTransform[2].toString() 
}

function showURL(request) {
  const url = splitRequest(request)
  return url[1].substr(19)
}


function Route(request) {
  this.method = showMethod(request)
  this.protocol = showProtocol(request)
  this.hostName = showHostName(request)
  this.url = showURL(request)

}

const route = new Route("POST https://example.com/teachers/create")
console.log(route)

