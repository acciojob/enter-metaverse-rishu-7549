// //your JS code here. If required.
// let st = document.getElementById("status");
// let btn = document.getElementById("enterBtn");



// btn.addEventListener('click', function () {

//   let heading = document.createElement("h1");
//   heading.innerHTML = "Entered Metaverse";
//   st.parentNode.replaceChild(heading, st);
// });

document.getElementById("enterBtn").addEventListener("click", function() {
let paragraph = document.getElementById("status");

let heading = document.createElement("h1");
heading.innerHTML = "Entered Metaverse"; // Set new text

paragraph.parentNode.replaceChild(heading, paragraph);
});