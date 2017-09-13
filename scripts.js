document.getElementById("seeSelectionButton").addEventListener("click", function(){ window.location.href = "Gallery.htm"; }, false);
document.getElementById("bookCaterButton").addEventListener("click", function(){ window.location.href = "ContactUs.htm"; }, false);

document.getElementById("welcome").addEventListener("mouseenter", changeColorTo, false);
document.getElementById("welcome").addEventListener("mouseleave", changeColorBack, false);

// Admittedly placeholder function
function changeColorTo(){
  document.getElementById("welcome").className = 'purpleText'; // Probably a better way to do this, but it's almost 3am and I'm ready for bed
}

// Admittedly placeholder function
function changeColorBack(){
  document.getElementById("welcome").className = 'blackText';
}
