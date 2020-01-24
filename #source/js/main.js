window.onscroll = function() {myFunction()};


var navbar = document.querySelector("#myNavContainer");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("imagebox");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var imageBoxes = document.getElementsByClassName('imageBox');
  for(i = 0; i < cols.imageBoxes; i++) {
    imageBoxes[i].style = "flex:1 0 15%";
  }
  function modifyRowContainer(value){
    var flexParam = "flex:1 0 21%";
    var imageBoxes = document.getElementsByClassName('imageBox');
    
    switch (value) {
        case 1:
            flexParam = "flex:1 0 15%"
            break;
        default:
            flexParam = "flex:1 0 21%";
    }

    for(i = 0; i < imageBoxes.length; i++) {
        imageBoxes[i].style = flexParam;
    }
}