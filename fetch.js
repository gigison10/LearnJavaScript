/*
function fetchData() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        let users = data.data
        
        .map(user => {
            return `
            <div class="user">
                <span><img src= "${user.avatar}" alt= "${user.first_name}" /</span>
                <ul class=text>
                    <li>Name: ${user.first_name} </li>
                    <li>email: ${user.email}</li>;
                </ul>
            </div>
            `;
        })
        .join("");

        console.log(users);
        let app = document.getElementById('app');
        app.insertAdjacentHTML("afterbegin", users);
    })
}
fetchData();
*/