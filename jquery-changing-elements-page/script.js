$(document).ready(function() {
  let hasImage = true

  $('button').on('click', function() {

    //console.log('i was clicked')


    if(hasImage) {
      //remove image
      console.log('click to hide')

      $('button').css('background-color', 'darkgray')
      $('img').addClass('hide')

      hasImage = false

    } else {
      //add image
      console.log('click to show')

      $('button').css('background-color', 'brown')
      $('img').removeClass('hide')

      hasImage = true

    }
    
    console.log(hasImage)
    
  })

})
