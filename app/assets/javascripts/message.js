$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div data-id="${message.id}">
                  <p class="group-name">
                    ${message.user_name}
                  </p>
                  <p class="created-at">
                    ${message.created_at}
                  </p>
                  <p class="text">
                    ${content}
                    ${img}
                  </p>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href);
    $.ajax({
      url: url,
      type: "POST",
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
      $('#new_message')[0].reset();
      $('.send').prop('disabled', false);
    })
    .fail(function(data){
      alert('エラー');
    })
  })
});