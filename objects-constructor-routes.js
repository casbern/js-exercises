function Route(request) {

  function getProtocol() {
    const stringTransformation = url.split("/", 1)
    return stringTransformation.toString()
  }
  
  function getHostName() {
    const stringTransformation = url.split("/")
    return stringTransformation[2].toString()
  }
  
  function getURL() {
    return url.substr(19)
  }
  
  let  [ method, url ] = request.split(" ")

  this.method = method
  this.protocol = getProtocol()
  this.hostName = getHostName()
  this.urlPath = getURL()
  
}

const route = new Route("POST https://example.com/teachers/create")
console.log(route)