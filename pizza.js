const draggableElement1 = document.getElementById("draggable-element1");
const draggableElement2 = document.getElementById("draggable-element2");
const dropZone = document.getElementById("dropzone");
let lists = document.querySelectorAll(".list");
const greet = document.querySelector(".greet");
const ingredient_title = document.querySelector('.ingredient-title')

draggableElement1.addEventListener("dragover", function (e) {
  e.preventDefault();
  setTimeout(() => {
    dropZone.classList.add("add1");
    dropZone.classList.remove("add2");
    dropZone.classList.remove("pizza1");
    dropZone.classList.remove("pizza2");
    dropZone.classList.remove("pizza3");
    greet.style.visibility = "hidden";
  }, 1000);
});
draggableElement1.addEventListener("touchend", function (e) {
  e.preventDefault();
  setTimeout(() => {
    dropZone.classList.add("add1");
    dropZone.classList.remove("add2");
    dropZone.classList.remove("pizza1");
    dropZone.classList.remove("pizza2");
    dropZone.classList.remove("pizza3");
    greet.style.visibility = "hidden";
    document.getElementById("ul").style.visibility = "visible";
    ingredient_title.style.visibility = "visible";
  }, 500);
});



draggableElement2.addEventListener("dragover", function (e) {
  e.preventDefault();
  setTimeout(() => {
    dropZone.classList.add("add2");
    dropZone.classList.remove("add1");
    dropZone.classList.remove("pizza1");
    dropZone.classList.remove("pizza2");
    dropZone.classList.remove("pizza3");
    greet.style.visibility = "hidden";
  }, 1000);
});
draggableElement2.addEventListener("touchend", function (e) {
  e.preventDefault();
  setTimeout(() => {
    dropZone.classList.add("add2");
    dropZone.classList.remove("add1");
    dropZone.classList.remove("pizza1");
    dropZone.classList.remove("pizza2");
    dropZone.classList.remove("pizza3");
    greet.style.visibility = "hidden";
    document.getElementById("ul").style.visibility = "visible";
    ingredient_title.style.visibility = "visible";
  }, 500);
});

lists.forEach((element, index) => {
  if (index === 0) {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza1");
        dropZone.classList.remove("pizza2");
        dropZone.classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });

    element.addEventListener("touchend", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza1");
        dropZone.classList.remove("pizza2");
        dropZone.classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });
    
    
  } else if (index === 1) {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza2");
        dropZone.classList.remove("pizza1");
        dropZone.classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });

    element.addEventListener("touchend", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza2");
        dropZone.classList.remove("pizza1");
        dropZone.classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });
  } else {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza3");
        dropZone.classList.remove("pizza2");
        dropZone.classList.remove("pizza1");
        greet.style.visibility = "visible";
        
      }, 1000);
    });

    element.addEventListener("touchend", function (e) {
      e.preventDefault();
      setTimeout(() => {
        dropZone.classList.add("pizza3");
        dropZone.classList.remove("pizza2");
        dropZone.classList.remove("pizza1");
        greet.style.visibility = "visible";
      }, 1000);
    });
  }
});


dropZone.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropZone.addEventListener("drop", function (event) {
  event.preventDefault();
  document.getElementById("ul").style.visibility = "visible";
  ingredient_title.style.visibility = "visible";
});
