
//conditional UI, display only if the user logged in or not
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user)=>{
  if(user){
    //toggle UI
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none')
  }else{
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block')
  }
};


//reference to the "posts" class in index.html
const postList = document.querySelector('.posts');

//seting up posts
const setupPost = (data) =>{
  if (data.length){
  let html ='';
  data.forEach(doc => {
    //remember to use data() method not ".data" attribute
    const post = doc.data();
    console.log(post);

    const li = `
      <li>        
        <div class="collapsible-header grey lighten-4"> ${post.title} </div>
        <div class="collapsible-body white"> ${post.content} </div>
      </li>
    `;
    html = html + li;
  });
  postList.innerHTML = html;
  }
  else{
    postList.innerHTML = '<h4 class="center-align">Log in to see posts</h4>';
  }
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    //grabbing all "modal" class and initialize them
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    //same as above
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });