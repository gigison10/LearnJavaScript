// let btn = document.querySelector("button");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".closeBtn");

// btn.addEventListener("click", function () {
//   modal.style.display = "flex";
// });

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

function fetchData() {
  fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })

    .then((data) => {
      // console.log(data);
      let html = data
        .map((user) => {
          return `
        <div class = 'user'>
        <p class = 'name'> ${user.name};</p>
        <img class ='img'  src ='${user.image_url}'  style="width:50px;height:120px;"/>
        <p id = description> ${user.description}</p>
        </div> `;
        })
        .join("");
      // console.log(html);


      ////////////////////////

      document.getElementById("app").innerHTML = html;
      const user = document.querySelector("#app");
      user.addEventListener("click", function (event) {
        modal.style.display = "flex";
        let description = document.querySelector("#description").innerHTML;
        document.getElementById("text").innerHTML = description;
        console.log(event.target);
      });
      }) 
}

fetchData();
s