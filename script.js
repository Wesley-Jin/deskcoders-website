
function changeButton(element) {
    element.src = element.bln ? "public/hamburger.svg" : "public/x-circle.svg";
    element.bln = !element.bln;
}

 function showDropdown() {
     document.getElementById("dropdown").classList.toggle("show");
 }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.navbarButton')) {
      var dropdowns = document.getElementsByClassName("navbarMenu");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          const navbarButtonEl = document.querySelector('.navbarButton');
          changeButton(navbarButtonEl);
        }
      }
    }
  }

const backToTopEl = document.querySelector(".backTopBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    backToTopEl.classList.add("active");
  }
  else {
    backToTopEl.classList.remove("active");
  }
})

const loaderWrapper = document.querySelector('.loaderWrap');
window.addEventListener('load', function() {
  this.document.querySelector('.loaderWrap').classList.add('fade-out');
  loaderWrapper.parentElement.removeChild(loaderWrapper);
})


// document.addEventListener("scroll", (function toggleBackToTopButton(e)) {
//     backToTopEl.style.visibility = window.scrollY > 600 ? "visible" : "hidden";
// })

// document.getElementById("#menuButton").addEventListener("click", function()
// {
//     document.getElementById("")
// });

// document.querySelector("#menuButton")