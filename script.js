//your JS code here. If required.
let st = document.getElementById("status");
let btn = document.getElementById("enterBtn");



btn.addEventListener('click', function () {

  let heading = document.createElement("h1");
  heading.innerHTML = "Entered Metaverse";
  st.parentNode.replaceChild(heading, st);
})