var apiKey = "AIzaSyBqUaquZh_9bXxCYQr5T1eruhABr9fPG4w"
var blogID = "3295796553627316717"
var bloggerAPI = "https://www.googleapis.com/blogger/v2/blogs/" +
                blogID +
                "/posts?callback=?&key=" +
                apiKey;
var response = $.getJSON(bloggerAPI).done(
  function ( data ) {
    $('#content').text(response.responseJSON.items[0].title);
    $('#content').append($('<a href="' +
                  response.responseJSON.items[0].url + '">' +
                  response.responseJSON.items[0].title +'</a>'))


  }
);
