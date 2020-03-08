function Route(request) {

  
  
  function showProtocol() {
    const stringTransform = url.split("/", 1)
    return stringTransform.toString()
  }
  
  function showHostName() {
    const stringTransform = url.split("/")
    return stringTransform[2].toString()
  }
  
  function showURL() {
    return url.substr(19)
  }
  
  let  [ method, url ] = request.split(" ")

  this.method = method
  this.protocol = showProtocol()
  this.hostName = showHostName()
  this.urlPath = showURL()
  
}

const route = new Route("POST https://example.com/teachers/create")
console.log(route)