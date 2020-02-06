$(document).ready(function() {

  $('button').on('click', function() {

    //console.log('i was clicked')

    let hasImage = true

    if(hasImage) {
      //remove image
      $('button').css('background-color', 'darkgray')
      $('img').addClass('hide')
    } else {
      //add image
      $('button').css('background-color', 'brown')
      $('img').removeClass('hide')
    }
    
    
  })

})
