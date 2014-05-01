/* Author: Brett Morgan (brettmorgan@google.com)
 *
 * This method uses the Blogger JSON API to retrieve the content from the
 * code.blogger.com Blog, and pushes it into the #main div.
 */

function init() {
  // Get your API key from http://code.google.com/apis/console
  gapi.client.setApiKey('AIzaSyBqUaquZh_9bXxCYQr5T1eruhABr9fPG4w');
  // Load the Blogger JSON API
  gapi.client.load('blogger', 'v2', function() {
    // Load the list of posts for code.blogger.com
    var request = gapi.client.blogger.posts.list({
      'blogId': 3887994559066526603,
      'fields': 'items(content,title)'
    });
    request.execute(function(response) {

      for (var i = 0; i < response.items.length; i++) {
        // For the parts of the response, have a look at the result at:
        // http://code.google.com/apis/explorer/#_s=blogger&_v=v2&_m=posts.list&blogId=3213900
        $("#main").append("<h2>" + response.items[i].title + "</h2>");
        $("#main").append(response.items[i].content);
        if (i+1<response.items.length) {
          $("#main").append("<hr>");
        }
      }
    });
  });
}
