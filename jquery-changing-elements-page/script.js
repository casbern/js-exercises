$(document).ready(function() {

  $('button').on('click', function() {

    //console.log('i was clicked')

    let hasImage = true

    if(hasImage) {
      //remove image
      console.log('click to show')

      $('button').css('background-color', 'darkgray')
      $('img').addClass('hide')

      hasImage = false

    } else {
      //add image
      console.log('click to hide')

      $('button').css('background-color', 'brown')
      $('img').removeClass('hide')

      hasImage = true

    }
    
    console.log(hasImage)
    
  })

})
