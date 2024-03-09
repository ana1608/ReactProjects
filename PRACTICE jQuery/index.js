//$("h1").css("color", "purple");
//$("h1").removeClass("title");
//$("h1").hasClass("title");
$("h1").addClass("title");
$("h1").text("ola");
$("button").html("<em>olaaaa</em>");
$("a").attr("href", "https://angular.io/");
$("a").attr("href");

$("button").click(function () {
  $("h1").text("olaaaa");
  // $("h1").hide();
  // $("h1").toggle();
  $("h1").slideUp().slideDown();
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});

//$("h1").before("<button> adeus </button>");
$("h1").after("<button> adeus </button>");

$("h1").prepend("<span>oi</span>");
