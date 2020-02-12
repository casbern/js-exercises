$(document).ready(function() {

  $('button').on('click', function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/cah90", true);
    xhr.send(null);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            //const result = xhr.responseText //it return a js string
            const result = JSON.parse(xhr.responseText) //it returns a js object

            $('.login').text(result.login) //shows the value of the property
            $('.id').text(result.id) 
            

            for(key in result) {
              console.log(key,result[key]) //access the key and the value
            }
        }
      }

    })
})



