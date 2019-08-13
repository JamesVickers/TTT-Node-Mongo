//alert("hello");
function showModal() {
  $(".mobile-nav-modal")
    .removeClass("modal-hide")
    .addClass("modal-show");

  $("body").css("overflow", "hidden");
}

function hideModal() {
  $(".mobile-nav-modal")
    .removeClass("modal-show")
    .addClass("modal-hide");

  $("body").css("overflow", "visible");
}

$("#openMenu").on("click", function() {
  showModal();
});

$("#closeMenu").on("click", function() {
  hideModal();
});



// only show focus on keyboard events (tabbing for a11y), not for mouse click events

//on click, if element has a tab index and if event is a click, blur focus

let mouseDown = false;

$(".blur-focus").on('mousedown', () => {
  mouseDown = true;
});

$(".blur-focus").on('mouseup', () => {
  mouseDown = false;
});

$(".blur-focus").on('focus', (event) => {
  if (mouseDown) {
    event.target.blur();
  }
});


//hide modal automatically if window is resized > 700px
$(window).resize(function() {
  if (window.matchMedia("(min-width: 700px)").matches) {
    hideModal();
  }
  //let vh = window.innerHeight * 0.01;
  //document.documentElement.style.setProperty('--vh', `${vh}px`);
});

///change work button images from greyscale to color on hover
/*function switchButtonImage(id, url) {
  $("#" + id).attr("src", url);
}

$(".work-link-img")
  .closest("div")
  .on("mouseover", function() {
    var target = $(this)
      .find(".work-link-img")
      .attr("id")
      .replace("-button", "");
    var source = "/img/hex-" + target + "-button-yellow.png";
    $(this)
      .find(".work-link-img")
      .attr("src", source);
  });
$(".work-link-img")
  .closest("div")
  .on("mouseout", function() {
    var target = $(this)
      .find(".work-link-img")
      .attr("id")
      .replace("-button", "");
    var source = "/img/hex-" + target + "-button-yellow-grey.png";
    $(this)
      .find(".work-link-img")
      .attr("src", source);
  });
  */

function resizeFacebook(w, h) {
  $(".facebook-container").css("width", w);
  $(".facebook-container").css("height", h);
}

/*/////////////////////////////////////////////////////////////////////////////
/////// THIS FIRES ON EVERY PAGE AND CAUSES CONSOLE ERRORS ////////////////////
////////////////// NEEDS FIXING SO ONLY FIRES ON NEWS PAGE ////////////////////
////////////////////////////////////////////////////////////////////////////*/

$(window).resize(function() {
    if (window.matchMedia("(min-width: 400px)").matches) {
    resizeFacebook("350px", "500px");
    $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
  } if (window.matchMedia("(max-width: 400px)").matches) {
    resizeFacebook("250px", "500px");
    $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
  } if (window.matchMedia("(min-width: 600px)").matches) {
    resizeFacebook("500px", "900px");
    $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
  } if (window.matchMedia("(max-width: 600px)").matches) {
    resizeFacebook("250px", "500px");
    $('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
  }
  FB.XFBML.parse();
});  

/*/////////////////////////////////////////////////////////////////////////////
/////// THIS FIRES ON EVERY PAGE AND CAUSES CONSOLE ERRORS ////////////////////
////////////////// NEEDS FIXING SO ONLY FIRES ON NEWS PAGE ////////////////////
////////////////////////////////////////////////////////////////////////////*/