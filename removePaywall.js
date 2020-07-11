$("#appContainer").remove();

var styleElement = document.createElement("style");
styleElement.innerHTML = ".nytc---modal-window---noScroll { overflow: inherit; }";
document.body.appendChild(styleElement);

// Stub SetTimeout function so it doesnt redirect us from the page
setTimeout = function () { };