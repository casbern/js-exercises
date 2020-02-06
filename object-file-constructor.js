function File (filePath) {
  this.filePath = filePath
  this.getSize = function getSize() {
    //return size
  }
  this.isFile = function isFile() {
    //return boolean
  }
  this.fileType = function fileType() {
    //return a string with the extention
  }
  this.moveTo = function moveTo(pathName) {
   // return 
  }

}

const myFile = new File("/Users/cah/js-training/exercise.js")

console.log(myFile.filePath)