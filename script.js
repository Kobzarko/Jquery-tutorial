import $ from "jquery";

// const btn = $("#btn");

// console.log(btn);

$(document).ready(function () {
  $(".list-item:first").hover(function () {
    $(this).toggleClass("active");
  });

  $(".list-item:eq(2)").on("click", function () {
    $(".image:even").fadeToggle("slow");
  });

  $(".list-item:eq(4)").on("click", function () {
    $(".image:odd").animate(
      {
        opacity: "toggle",
        height: "toggle",
      },
      2000
    );
  });

  $(".list-item:eq(1)").on("click", function () {
    if (this.style.backgroundColor === "green") {
      $(this).css("background-color", "");
    } else {
      $(this).css("background-color", "green");
    }
  });

  const availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];
  // autocomplete is not a function
  // $("#tags").autocomplete({ source: availableTags });

  $(".list-item:eq(3)").draggable();
});
