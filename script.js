
function changeButton(element) {
    element.src = element.bln ? "public/menu.svg" : "public/x-circle.svg";
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


// document.getElementById("#menuButton").addEventListener("click", function()
// {
//     document.getElementById("")
// });

// document.querySelector("#menuButton")