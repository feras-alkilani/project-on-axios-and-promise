
function getUsersUsingAxios() {
  return new Promise((resolve, reject) =>{

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{
      let users = response.data;
      document.getElementById("users").innerHTML = "";
  users.forEach(user => {
    let content = `
      <div id="user" onclick="userClicked(${user.id}, this)">
        <h3>${user.name}</h3>
        <h4>${user.email}</h4>
      </div>
    `;
    document.getElementById("users").innerHTML += content;
    })
    resolve()
}).catch(error => {alert(error)}) 
  })}



function getPostsUsingAxios(userId) {


  return new Promise ((resolve,reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response)=>{
      let posts = response.data;
      document.getElementById("posts").innerHTML = "";
  posts.forEach(post => {
    let content = `
      <div id="post" >
        <h3>${post.title}</h3>
        <h4>${post.body}</h4>
      </div>
    `;
    document.getElementById("posts").innerHTML += content;
    })
  }
  
  ).catch(error => {alert(error)})

  })















}


// Function to handle user click
function userClicked(id, el) {
  getPostsUsingAxios(id).then(() => {

    let selectedElements = document.querySelectorAll(".selected");
selectedElements.forEach(element => element.classList.remove("selected"));
el.classList.add("selected");
  })
}
// 
// Initialize fetching users
getUsersUsingAxios();
