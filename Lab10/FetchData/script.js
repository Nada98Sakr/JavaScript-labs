let container = document.querySelector(".container");
let url = "https://reqres.in/api/users?page=2";

fetchData(url);

async function fetchData(url) {
    let response = await fetch(url); 
    let fetchedData = await response.text();
    let data = JSON.parse(fetchedData).data;
    data.forEach( el => {
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="card" style="width: 18rem;">
                <img src="${el.avatar}" class="card-img-top" alt="avatar">
                <div class="card-body">
                    <h5 class="card-title">${
                      el.first_name + " " + el.last_name
                    }</h5>
                    <p class="card-text">contact me on the following email.</p>
                    <a href="mailto:${
                      el.email
                    }" class="btn btn-primary">email</a>
                </div>
            </div>`
        );
    })
}
