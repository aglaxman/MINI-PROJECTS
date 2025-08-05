const collection = document.querySelector(".collection");
const addbtn = document.querySelector(".btn");
const newli = document.createElement("li");
const newbtn = document.createElement("button");
const ul = document.querySelector(".collection");
function addItems() {
  const newli = document.createElement("li");
  const newbtn = document.createElement("button");
  const taskinput = document.querySelector("#taskInput").value; 

  if (taskinput.trim().length != 0) {
    delbtn.textContent = 'delete'
    newbtn.textContent = taskinput;
    newli.appendChild(newbtn);
    ul.appendChild(newli);
  }

  document.querySelector("#taskInput").value = " ";
}
