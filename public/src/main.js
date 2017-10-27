$(function(){
  // $('.status').each(function(){
  //   if($(this).text() === "to do"){
  //     $(this).css('color','red')
  //   }else{
  //     $(this).css('color','green')
  //   }
  // })
  $('.edit-button').click(function(event) {
    $('.edit').toggleClass('nodisplay');
  });
  // $('.status').click(function() {
  //   let status = $(this).hasClass('not-done') ? 'complete' : 'not-done';
  //   let id = $(this).data('id');
  //   let title = $(this).prev().text();
  //   let category = $(this).parent('.todo').siblings('.links').find('p').text();
  //   let description = $(this).parent('.todo').siblings('.description').text();
  //   $.ajax({
  //     method: 'PUT',
  //     url: `/todo/${id}`,
  //     data: {
  //       title: title,
  //       category: category,
  //       description: description,
  //       status: status
  //     }
  //   })
  // })
})
