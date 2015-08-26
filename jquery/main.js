$(document).ready(function() {

  $("#get-more-songs").click(function() {
    $.ajax({
      url: "./javascripts/more-songs.json"
    }).done(function(songList) {
      console.log(songList.songs);
      displaySongs(songList);
  });


  $(".myItem").each(function() {
    var theLI = $(this);

    $(this).hover(function () {
      theLI.toggleClass("red");
    });
  });




  $("#all-my-songs").html("<h1>Hello, world</h1>");

  $("#all-my-songs").append("<h1>The world is great</h1>");

  $("#all-my-songs").prepend("<div>I'm another div</div>");

  $(".my-awesome-class").html("<h2>Something else</h2>");

  $(".my-awesome-class").addClass("red");
  $(".my-awesome-class").addClass("bordered");

  //$(".my-awesome-class").css("background-color", "green");

  //$(".my-awesome-class").css({
  //  border: "10px solid black"
  //});

  $("#cool-button").click(function() {
    alert("You clicked on the cool button");
  });
  $("#all-my-songs").hover(function () {
    $("#message").html("Get off of me");
  });
});
