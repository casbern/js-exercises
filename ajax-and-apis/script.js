$(document).ready(function() {

  $('button').on('click', function() {

    var xhr = new XMLHttpRequest(); // it returns an object of type XMLHttpRequest

    console.log(xhr)

    xhr.open("GET", "https://api.github.com/users/cah90", true);
    xhr.send(null);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            //const result = xhr.responseText // it is a string that contains json data
            const result = JSON.parse(xhr.responseText) //it returns an object literal

            $('.login').text(result.login) //shows the value of the property
            $('.id').text(result.id) 
            

            for(key in result) {
              console.log(key,result[key]) //access the key and the value
            }
        }
      }

    })
})



