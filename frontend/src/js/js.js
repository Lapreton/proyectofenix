window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navegacion").style.maxHeight = "50px";
    
  } else {
    document.getElementById("navegacion").style.maxHeight = "70px";
  }
}
