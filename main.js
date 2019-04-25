$(document).ready(function(){
  console.log('jq connected!');
  /* goal:  is to have a website where new color options
  can be added, but just adding the color to the array */

  // array for all the theme options.
  var themes = ['white', 'silver', 'powderblue', 'peachpuff', 'aquamarine', 'papayawhip'];
  var themesOpen = false;

  // event listener for the view-themes button
  // when that is clicked, render li's of themes

  $('.view-themes').click(renderThemeOptions);

  function renderThemeOptions() {
    if (themesOpen === false) {
      themes.forEach(renderTheme);
      themesOpen = true;
    } else {
      $('.themes').empty();
      themesOpen = false;
    }
  }

  function renderTheme(color) {
    var $newThemeTab = $('<li></li>').text(color).css('background-color', color);
    $newThemeTab.click(function(){
      $('body').css('background-color', color);
    })
    $('.themes').append($newThemeTab);
  }

})