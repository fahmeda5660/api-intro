function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => displayUsers(data))
    }

    function displayUsers(posts){
    const postsContainer = document.getElementById('posts-container');
        for(const post of posts){
            // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-style');
        postDiv.innerHTML=`
        <h4>User-${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>        
        ` ;
        postsContainer.appendChild(postDiv);          
        }
    }
    loadUsers();
