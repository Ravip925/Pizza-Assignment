const draggableElement1 = document.getElementById("draggable-element1");
const draggableElement2 = document.getElementById("draggable-element2");
const lists = document.querySelectorAll(".list");
const greet = document.querySelector(".greet");

draggableElement1.addEventListener("dragover", function (e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById("dropzone").classList.add("add1");
    document.getElementById("dropzone").classList.remove("add2");
    document.getElementById("dropzone").classList.remove("pizza1");
    document.getElementById("dropzone").classList.remove("pizza2");
    document.getElementById("dropzone").classList.remove("pizza3");
  }, 1000);
});

draggableElement2.addEventListener("dragover", function (e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById("dropzone").classList.add("add2");
    document.getElementById("dropzone").classList.remove("add1");
    document.getElementById("dropzone").classList.remove("pizza1");
    document.getElementById("dropzone").classList.remove("pizza2");
    document.getElementById("dropzone").classList.remove("pizza3");
  }, 1000);
});

lists.forEach((element, index) => {
  if (index === 0) {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        document.getElementById("dropzone").classList.add("pizza1");
        document.getElementById("dropzone").classList.remove("pizza2");
        document.getElementById("dropzone").classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });
  } else if (index === 1) {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        document.getElementById("dropzone").classList.add("pizza2");
        document.getElementById("dropzone").classList.remove("pizza1");
        document.getElementById("dropzone").classList.remove("pizza3");
        greet.style.visibility = "visible";
      }, 1000);
    });
  } else {
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      setTimeout(() => {
        document.getElementById("dropzone").classList.add("pizza3");
        document.getElementById("dropzone").classList.remove("pizza2");
        document.getElementById("dropzone").classList.remove("pizza1");
        greet.style.visibility = "visible";
      }, 1000);
    });
  }
});

const dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropzone.addEventListener("drop", function (event) {
  event.preventDefault();
  document.getElementById("ul").style.visibility = "visible";
});
