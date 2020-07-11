$("#appContainer").remove();

var styleElement = document.createElement("style");
styleElement.innerHTML = ".nytc---modal-window---noScroll { overflow: inherit; }";
document.body.appendChild(styleElement);

window.onbeforeunload = function () {
    console.log("Redirect Blocked!");
    return false;
};