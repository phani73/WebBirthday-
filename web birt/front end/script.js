const right=document.getElementById("right");
const left =document.getElementById("left");

right.onclick =function()
{
    left.classList.add("left","button")
    right.classList.add('rotate')
}
function removeText() {
    // Get the element by its ID
    const right = document.getElementById('left');
    right.innerHTML = '';
}