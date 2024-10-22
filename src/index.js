const pageEl = document.getElementById("page");

// create the invent page layout
pageEl.innerHTML = `<div id="nav"></div>
                    <div id="main">
                        <div id="dashpad">
                            <div class="card" id="to-do">
                                <h3>To-Do</h3>
                                <form>
                                    <input id="tdInput" type="text">
                                    <button id="tdBtn" type="button">Add To-Do</button>
                                <form>
                                <ul id="tdList">
                                    <li>Finish Project</li>
                                </ul>
                            </div>
                            <div class="card" id="qrGen"></div>
                        </div>
                    </div>`;

const navEl = document.getElementById("nav");
const mainEl = document.querySelector("#main");
const dashEl = document.querySelector("#dashpad");

// style navbar
navEl.style.height = "10vh";
navEl.style.width = "100vw";
navEl.style.backgroundColor = "rgba(71, 61, 139, 0.719)";

// style main container
mainEl.style.height = "90vh";
mainEl.style.width = "100vw";

// style dashpad
dashEl.style.height = "85vh";
dashEl.style.width = "90vw";
dashEl.style.margin = "0 auto";
dashEl.style.paddingTop = "10px";
dashEl.style.borderRadius = "2em"
dashEl.style.backgroundColor = "var(--dash-bkgr-color)";
dashEl.style.backgroundImage = "var(--dash-bkgr-image)";
dashEl.style.backgroundSize = "var(--dash-bkgr-size)";













// copied exactly from YouTube tutorial video "Drag & Drop with Javascript 4 minutes" by Appwrite.
// https://www.youtube.com/watch?v=ymDjvycjgUM


let newX = 0, newY = 0, startX = 0, startY = 0;

const toDo = document.getElementById("to-do");

toDo.addEventListener("mousedown", mouseDown);

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

    toDo.style.top = (toDo.offsetTop - newY) + "px";
    toDo.style.left = (toDo.offsetLeft - newX) + "px";

    // console.log({newX, newY});
    // console.log({startX, startY});
}
 
function mouseUp (e) {
    document.removeEventListener("mousemove", mouseMove)
}










/* const grabBtn = document.getElementById("toDoBtn");
const grabInput = document.getElementById("toDoInput");
const grabUL = document.getElementById("thisOne");

grabBtn.addEventListener("onclick", () => {

    const newLI = grabInput.value;
    // grabUL.appendChild(newLI)
    // newLI.textContent = grabInput.value

    grabUL.appendChild(document.createElement("li")).textContent = newLI;
}) */

const tdInputEl = document.getElementById("tdInput");
const tdBtnEl = document.getElementById("tdBtn");
const tdListEl = document.getElementById("tdList");

tdListEl.addEventListener("click", (e) => {
    e.target.classList.toggle("strikethrough");
})

function addToDo() {
    const newToDo = tdInputEl.value;
    
    // This wasn't in the instructions, but
    // we added a guard against empty comments:
    if (newToDo === "") return;
    
    tdListEl.appendChild(document.createElement("li")).textContent = newToDo;
    tdInputEl.value = "";
    tdInputEl.focus();
    }
    
// Register the event listener.
tdBtnEl.addEventListener("click", addToDo);