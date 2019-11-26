// ========== String Properties ===========

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

function showProperties(obj) {
  for(key in obj) {
    if(typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

const result = showProperties(movie);
console.log(result);