let BASE_URL = "http://localhost:8000/blogs";

let form = document.querySelector(".form");
let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#body");
let blogSelect = document.querySelector("#select");
let author;
blogSelect.addEventListener("change", function (e) {
  author = e.target.value;
  console.log(author);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let blogObj = {
    title: blogTitle.value,
    body: blogBody.value,
    author: author,
  };

  function postNewBlog(obj) {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  postNewBlog(blogObj);

  window.location.href = "home.html";
});
