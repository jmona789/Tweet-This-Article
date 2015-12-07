$(document).ready(function(){
    $("blockquote").addClass("tweetText");
    var blockquoteLink = $("<a>").addClass("tweetThis");
    $("blockquote").wrap(blockquoteLink);
    var tweetText = $(".tweetText").html();
    var currentUrl = window.location;
  function cutQuote(){
    if (tweetText.length > 102){
      return tweetText.slice(0, 98) +'..."';
    }
    else{
      return tweetText;
    }
  }

  $(".tweetThis").attr("href", "http://twitter.com/intent/tweet?text="+cutQuote()+" "+currentUrl+"&via=NB_Today");
});