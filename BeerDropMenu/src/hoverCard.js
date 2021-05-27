
function fetchData() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
  
      .then((data) => {
        // console.log(data);
        let html = data
          .map((hoverCard)=> {
            return `
          <div  id = hoverCard>
            <p class = 'name'> ${hoverCard.name};</p>
            <img class ='img'  src ='${hoverCard.image_url}'  style="width:50px;height:120px;"/>
            <p class = description> ${hoverCard.description}</p>
          </div> 
          `;
          })
          .join("");
        // console.log(html);
        document.getElementById("app").innerHTML = html;
        
        let hoverCard = document.querySelector("#hoverCard");
        hoverCard.addEventListener("click", () => hoverCard.style.background="#337ab7")
        
      })   
  }
  fetchData();
  