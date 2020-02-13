//https://github.com/choosy/js-homework/blob/master/objects-file-constructor.txt

const fs = require('fs')



function File(filePath) {

  this.filePath = filePath

  this.getSize = function getSize() {
    const takingFile = this.filePath.split('/').pop()
    return fs.statSync(takingFile).size
  }

  this.isFile = function isFile() {
    return fs.existsSync(this.filePath)
  }

  this.fileType = function fileType() {
    return this.filePath.split('/').pop().split('.').pop()
  }

  this.moveTo = function moveTo(pathName) {
    return fs.rename(this.filePath, pathName, function (err) {
      if (err) {
        throw err
      }
    })
  }

}



  const myFile = new File("/Users/cassiabernardo/Dev/js-training/objects.js")




//console.log(myFile.filePath)

//console.log(myFile.getSize())

//console.log(myFile.isFile())

//console.log(myFile.fileType())

//console.log(myFile.moveTo("/Users/cassiabernardo/Dev"))