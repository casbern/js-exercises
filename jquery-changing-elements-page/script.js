$(document).ready(function() {

  $('button').on('click', function() {

    console.log('i was clicked')
    
    $('button').css('background-color', 'darkgray')
    $('img').addClass('hide')
  })

})
