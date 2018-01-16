/**
  Javascript isn't required for this effect,
  I just added a quick piece of jQuery code
  to simulate a hover for the animated preview
  on CodePen.io.
*/

// simulation code, ignore it.
$(function() {
  setTimeout(function() {
    $("article.highlight").toggleClass("hover");
    setTimeout(function() {
      $("article.highlight").toggleClass("hover");
    }, 2700);
  }, 2000);
});