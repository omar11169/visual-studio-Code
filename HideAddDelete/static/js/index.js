const list = document.querySelector("ul");
const Input = document.querySelector(".hola");
const button = document.querySelector("button");

// add event listener to the button

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (Input.value !== "") {
    li = document.createElement("li");
    list.appendChild(li);
    names = document.createElement("span");
    names.textContent = Input.value;
    names.classList.add("name");
    li.appendChild(names);

    deletebutton = document.createElement("span");
    deletebutton.textContent = "delete";
    deletebutton.classList.add("delete");
    li.appendChild(deletebutton);

    Input.value = "";
  }
});

// delete
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    li = e.target.parentElement.remove();
    list.removeChild(li);
  }
});

//hide
hidebooks = document.querySelector("#hide");
hidebooks.addEventListener("change", (e) => {
  if (e.target.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

// search
const search = document.querySelector("#search");
search.addEventListener("keyup", (e) => {
  const searchText = e.target.value.toLowerCase();
  const names = document.querySelectorAll(".name");
  names.forEach((name) => {
    if (name.textContent.toLowerCase().includes(searchText)) {
      name.parentElement.style.display = "block";
    } else {
      name.parentElement.style.display = "none";
    }
  });
});
