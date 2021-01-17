
function changeButton(element) {
    element.src = element.bln ? "public/menu.svg" : "public/x-circle.svg";
     element.bln = !element.bln;
}