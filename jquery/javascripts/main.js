$(document).ready(function() {

  $.ajax({
    url:"./javascripts/songs.json"
  }).done(function(songList) {
    console.log(songList.songs);
    for(var i =0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
      $("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
      $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
      $("#list-of-songs").append("<div>On the album" + currentSong.album + "</div>");
    }
  })
});

/*
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
}); */
