// copied exactly from YouTube tutorial video "Drag & Drop with Javascript 4 minutes" by Appwrite.
// https://www.youtube.com/watch?v=ymDjvycjgUM


let newX = 50, newY = 50, startX = 50, startY = 50;

const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown (e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove (e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + "px";
    card.style.left = (card.offsetLeft - newX) + "px";

    // console.log({newX, newY});
    // console.log({startX, startY});
}
 
function mouseUp (e) {
    document.removeEventListener("mousemove", mouseMove)
}