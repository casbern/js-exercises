function treeConstructor(strArr) {
  let newArray = []
  let parent = []
  let child = []
  let tmp
  let counts = {}

  for(string of strArr) {
    tmp = string.replace("(", "").replace(")", "").split(",")
 
    element = [parseInt(tmp[0]), parseInt(tmp[1])]

    newArray.push(element)
  
    }

  for(element of newArray) {
    parent.push(element[1])
  }

  for(element of newArray) {
    child.push(element[0])
  }
  
  for(let i = 0; i < parent.length; i++) {
    if(counts[parent[i]]) {
      //Se tiver essa propriedade no obj, soma + 1
      counts[parent[i]] += 1 
    } else {
      //Se não tiver a propriedade, cria essa propriedade e adiciona 1 ao valor.
      counts [parent[i]] = 1
    }
  }

  for(let count in counts) {
    //Pega uma propriedade do obj por vez 
    if(counts[count] <= 2) {
      return true
    } else {
      return false
    }
  }

}

//const result = treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])
const result = treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])

console.log(result)