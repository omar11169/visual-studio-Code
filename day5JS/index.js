const welcome = document.getElementsByName("Welcome");
const content = document.getElementsByName("Content");
const id = document.getElementById("id");
const topics = document.getElementsByClassName("topics");

omar.addEventListener("click", (e) => {
  omar1.style.backgroundColor = "blue";
  omar1.fontSize = "20px";
  omar1.style.color = "white";
  omar1.style.fontFamily = "Arial";
  omar1.style.fontWeight = "bold";
  omar1.style.textAlign = "center";

  omar1.style.textTransform = "uppercase";
  omar1.style.border = "2px solid black";
  omar1.style.borderRadius = "5px";
  omar1.style.padding = "10px";
  omar1.style.margin = "10px";
  omar1.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  omar1.style.transition = "all 0.3s ease";
  omar1.style.cursor = "pointer";

  console.log(e);
});

console.log(content);
console.log(welcome);
console.log(id);
console.log(topics);
console.log("Welcome to the JavaScript world!");
