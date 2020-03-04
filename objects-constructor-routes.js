function Route(route) {
  this.route = route

  this.splitingRoute = function () {
    const split1 = route.split(" ")
    const url = split1[1]
    const split2 = route.split("/")

    this.method = split1[0]
    this.protocol = split2[0]
    this.hostname = split[2]
    this.urlPath = 
    this.parameters = 

  }
}

const route = new Route("POST https://example.com/teachers/create")

route.splitingRoute()

