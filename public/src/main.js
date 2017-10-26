$(function(){
  $('.status').each(function(){
    if($(this).text() === "to do"){
      $(this).css('color','red')
    }else{
      $(this).css('color','green')
    }
  })
})
