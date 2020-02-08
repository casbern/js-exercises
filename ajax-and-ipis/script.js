$(document).ready(function() {

  $('button').on('click', function() {

    var xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.open("GET", "https://api.github.com/users/cah90", true);
    xhr.send(null);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText)
            $('p').text(result)
            console.log(result)
        }
      }

    })
})



