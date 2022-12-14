let box = document.querySelector(".box");

fetch("http://localhost:8000/blogs")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
      box.innerHTML += `
      <div class="div">
      <div class="card">
      <h2 class="title">${element.title}</h2>
      <h3 class="body">${element.body}</h3>
      <p class="author">written by ${element.author}</p>
      <button id=${element.id} class="deleteBtn">Delete</button>
      </div>
      </div>
      `;
    });

    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("ksksks");
        el.parentElement.remove();

        fetch(`http://localhost:8000/blogs/${this.id}`, {
          method: "DELETE",
        });
      });
    });
  });
