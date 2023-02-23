// function loadUsers(){
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
// }
function loadUsers(){
const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => displayUsers(data))
}
// function displayUsers(data){
//     for(const user of data){
//         console.log(user.name);
//     }
// }
function displayUsers(data){
const ul = document.getElementById('users-list');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}